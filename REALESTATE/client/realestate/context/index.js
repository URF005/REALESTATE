import React, { useEffect, useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractRead,
  useContractWrite,
  useContractEvents,
  sendTransaction,
  prepareContractCall,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x3AA5803BFAF5f8fd0167C605C26cbeBFC690dab8"
  );
  console.log(contract);
  const address = useAddress();
  const connect = useMetamask();
  const realestate = "RealEstateChain";

  //FUNCTION-------------
  //1.listProperty()

  const { mutateAsync: listProperty, isLoading } = useContractWrite(
    contract,
    "listProperty"
  );
  const createPropertyFunction = async (form) => {
    const {
      propertyTitle,
      description,
      category,
      price,
      images,
      propertyAddress,
    } = form;
    try {
      const data = await listProperty({
        args: [
          address,
          price,
          propertyTitle,
          category,
          images,
          propertyAddress,
          description,
        ],
      });
      console.info("contract call success", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  //2.updateProperty()

  const { mutateAsync: updateProperty, isLoading: updatePropertyLoading } =
    useContractWrite(contract, "updateProperty");
  const updatePropertyFunction = async (form) => {
    const {
      productId,
      propertyTitle,
      description,
      category,
      images,
      propertyAddress,
    } = form;
    try {
      const data = await updateProperty({
        args: [
          address,
          productId,
          propertyTitle,
          category,
          images,
          propertyAddress,
          description,
        ],
      });
      console.log("contract call successfully update", data);
    } catch (error) {
      console.error("Error while updating", error);
    }
  };

  //3.updatePrice()

  const { mutateAsync: updatePrice, isLoading: updatePriceLoading } =
    useContractWrite(contract, "updatePrice");
  const updatePriceFunction = async (form) => {
    const { productId, price } = form;
    try {
      const data = await updatePrice({
        args: [address, productId, price],
      });
      console.info("contract call success", data);
    } catch (error) {
      console.error("Error while updating price", error);
    }
  };

  //4.buyProperty()

  const { mutateAsync: buyProperty, isLoading: buyPropertyLoading } =
    useContractWrite(contract, "updatePrice");
  const buyPropertyFunction = async (form) => {
    const { id } = form;
    try {
      const data = await buyProperty({
        args: [id, address],
      });
      console.info("Buying Successful", data);
    } catch (error) {
      console.error("Buying Fail", error);
    }
  };

  //REVIEWS FUNCTION

  //5.addReview()

  const { mutateAsync: addReview, isLoading: addReviewLoading } =
    useContractWrite(contract, "addReview");
  const addReviewFunction = async (form) => {
    const { productId, rating, comment } = form;
    try {
      const data = await addReview({
        args: [productId, rating, comment, address],
      });
      console.log("Review Added Successfully", data);
    } catch (error) {
      console.error("Adding review failed", error);
    }
  };

  //6.likeReview()

  const { mutateAsync: likeReview, isLoading: likeReviewLoading } =
    useContractWrite(contract, "likeReview");
  const likeReviewFunction = async (form) => {
    const { productId, reviewIndex } = form;
    try {
      const data = await likeReview({
        args: [productId, reviewIndex, address],
      });
      console.info("Review Liked Successfully", data);
    } catch (error) {
      console.error("Review Liked Failed", error);
    }
  };

  //GET PROPERTY DATA FUNCTION
  //7. getAllProperties()

  const getPropertyData = async () => {
    try {
      const properties = await contract.call("getAllProperties");
      const parsedProperties = properties.map((property, i) => ({
        owner: property.owner,
        propertyTitle: property.propetyTitle,
        description: property.description,
        category: property.category,
        price: ethers.utils.formatEther(property.price.toString()),
        productId: property.productID.toNumber(),
        reviewers: property.reviewers,
        reviews: property.reviews,
        images: property.images,
        address: property.propertyAddress,
      }));
      return parsedProperties;
    } catch (err) {
      console.error("Error getting property data", err);
    }
  };

  //8. getHighestRatedProduct()

  const {
    data: gethighestRatedProduct,
    isLoading: highestRatedProductLoading,
  } = useContractRead(contract, "gethighestRatedProduct");

  //9. getProductReviews()

  const getProductReviewsFunction = (productId) => {
    try {
      const { data: getProductReviews, isLoading: getProductReviewsLoading } =
        useContractRead(contract, "getProductReviews");
      return getProductReviews, getProductReviewsLoading;
    } catch (err) {
      console.error("Error getting product reviews", err);
    }
  };

  //10. getProperty()

  const getPropertyFunction = (id) => {
    try {
      const { data: getProperty, isLoading: getPropertyLoading } =
        useContractRead("getProperty", [id]);
      return getProperty, getPropertyLoading;
    } catch (error) {
      console.error("Error getting property", error);
    }
  };

  //11.getUserProperties()

  const getUserPropertiesFunction = () => {
    try {
      const { data: getUserProperties, isLoading: getUserPropertiesLoading } =
        useContractRead("getUserProperties", [address]);
      return getUserProperties, getUserPropertiesLoading;
    } catch (error) {
      console.error("Error getting user properties", error);
    }
  };

  //12.getUserReviews()

  const getUserReviewsFunction = () => {
    try {
      const { data: getUserReviews, isLoading: getUserReviewsLoading } =
        useContractRead("getUserReviews", [address]);
      return getUserReviews, getUserReviewsLoading;
    } catch (error) {
      console.error("Error getting user reviews", error);
    }
  };

  //13.totalProperty()

  const totalPropertyFunction = () => {
    try {
      const { data: totalProperty, isLoading: totalPropertyLoading } =
        useContractRead(contract, "propertyIndex");
      return totalProperty, totalPropertyLoading;
    } catch (error) {
      console.error("Error getting total properties", error);
    }
  };

  //14.totalReviews()
  const totalReviewsFunction = () => {
    try {
      const { data: totalReviews, isLoading: totalReviewsLoading } =
        useContractWrite(contract, "reviewsCounter");
      return totalReviews, totalReviewsLoading;
    } catch (error) {
      console.error("Error getting total reviews", error);
    }
  };

  //Read data with events
  //Get specific events
  const { data: event } = useContractEvents(contract, "PropertyListed");
  //Get all events
  const { data: allEvents } = useContractEvents(contract);
  //Set default
  const { data: eventWithoutListner } = useContractEvents(contract, undefined, {
    subscribe: false,
  });
  console.log(event);

  return (
    <StateContext.Provider
      value={{
        contract,
        address,
        connect,
        realestate,
        createPropertyFunction,
        updatePropertyFunction,
        updatePriceFunction,
        buyPropertyFunction,
        addReviewFunction,
        likeReviewFunction,
        //READ PROPERTY DATA
        getPropertyData,
        gethighestRatedProduct,
        getProductReviewsFunction,
        getPropertyFunction,
        getUserPropertiesFunction,
        getUserReviewsFunction,
        totalPropertyFunction,
        totalReviewsFunction,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
