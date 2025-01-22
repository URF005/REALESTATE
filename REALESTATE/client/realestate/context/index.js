import React, { useState, useEffect, useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractRead,
  useContractWrite,
  useContractEvents,
  sendTransaction,
  useConnectionStatus,
  prepareContractCall,
  //NEW HOOKS FOR FRONTEND
  useDisconnect,
  useSigner,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x24df7219F7fB6C457f179db73f4d00DB85D02463"
  );
  console.log(contract);
  const address = useAddress();
  const connect = useMetamask();

  //FRONTEND
  const disconnect = useDisconnect();
  const connectionStatus = useConnectionStatus();
  const signer = useSigner();
  const [userBlance, setUserBlance] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //FUNCTION-------------
  //1.listProperty()

  const { mutateAsync: listProperty } = useContractWrite(
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
      alert("Listing property successful");
    } catch (err) {
      console.error("contract call failure", err);
      alert("Listing property failed");
    }
  };
  //2.updateProperty()

  const { mutateAsync: updateProperty } = useContractWrite(
    contract,
    "updateProperty"
  );
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
      alert("Property updated successfully");
    } catch (error) {
      console.error("Error while updating", error);
      alert("Error while updating");
    }
  };

  //4.BuyProperty()
  const buyPropertyFunction = async (buying) => {
    const { productID, amount } = buying;
    const money = ethers.utils.parseEther(amount);

    try {
      const data = await contract.call("buyProperty", [productID, address], {
        value: money.toString(),
      });
      console.info("contract call successs", data);
      alert("Successfully buy property");
      window.location.reload();
    } catch (err) {
      console.error("contract call failure", err);
      alert("Failed to buy property");
    }
  };

  //REVIEWS FUNCTION

  //5.addReview()

  const { mutateAsync: addReview } = useContractWrite(contract, "addReview");
  const addReviewFunction = async (from) => {
    const { productID, rating, comment } = from;

    try {
      setIsLoading(true);
      const data = await addReview({
        args: [productID, rating, comment, address],
      });
      console.info("contract call successs", data);
      alert("Successful add review");
      setIsLoading(false);
    } catch (err) {
      console.error("contract call failure", err);
      alert("Failed to add review");
    }
  };

  //GET PROPERTY DATA FUNCTION
  //7. getAllProperties()

  const getPropertiesData = async () => {
    try {
      const properties = await contract.call("getAllProperties");
      const balance = await signer?.getBalance();
      const userBalance = address
        ? ethers.utils.formatEther(balance?.toString())
        : "";
      setUserBlance(userBalance);
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

  //9. getProductReviews()

  const getProductReviewsFunction = async (productId) => {
    try {
      const getProductReviews = await contract.call("getProductReviews", [
        productId,
      ]);

      const parsedReviews = getProductReviews?.map((review, i) => ({
        reviewer: review.reviewer,
        likes: review.likes.toNumber(),
        comment: review.comment,
        rating: review.rating,
        productID: review.productId.toNumber(),
      }));

      return parsedReviews;
    } catch (error) {
      console.log(error);
    }
  };

  //10. getProperty()

  const getPropertyFunction = async (id) => {
    const productID = id * 1;

    try {
      setIsLoading(true);
      const propertyItem = await contract.call("getProperty", [productID]);
      const property = {
        productID: propertyItem?.[0].toNumber(),
        owner: propertyItem?.[1],
        title: propertyItem?.[3],
        category: propertyItem?.[4],
        description: propertyItem?.[7],
        price: ethers.utils.formatEther(propertyItem?.[2].toString()),
        address: propertyItem?.[6],
        image: propertyItem?.[5],
      };
      setIsLoading(false);
      return property;
    } catch (error) {
      console.log(error);
    }
  };

  //11.getUserProperties()

  const getUserPropertiesFunction = async () => {
    try {
      setIsLoading(true);
      const properties = await contract.call("getUserProperties", [address]);

      const parsedProperties = properties.map((property, i) => ({
        owner: property.owner,
        title: property.propertyTitle,
        description: property.description,
        category: property.category,
        price: ethers.utils.formatEther(property.price.toString()),
        productID: property.productID.toNumber(),
        reviewers: property.reviewers,
        reviews: property.reviews,
        image: property.images,
        address: property.propertyAddress,
      }));

      setIsLoading(false);
      return parsedProperties;
    } catch (error) {
      console.log(error);
    }
  };

  //12.getUserReviews()

  const getUserReviewsFunction = () => {
    try {
      setIsLoading(true);
      const { data: getUserReviews } = useContractRead(
        contract,
        "getUserReviews",
        [address]
      );

      setIsLoading(false);
      return getUserReviews;
    } catch (error) {}
  };

  //13.totalProperty()

  const totalPropertyFunction = async () => {
    try {
      setIsLoading(true);
      const totalProperty = await contract.call("propertyIndex");
      setIsLoading(false);
      return totalProperty;
    } catch (error) {
      console.log(error);
    }
  };

  //14.totalReviews()
  const totalReviewsFunction = async () => {
    try {
      setIsLoading(true);
      const totalReviews = await contract.call("reviewsCounter");
      setIsLoading(false);
      return totalReviews.toNumber();
    } catch (error) {
      console.log(error);
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
        address,
        contract,
        connect,
        createPropertyFunction,
        updatePropertyFunction,

        buyPropertyFunction,
        //REVIEW
        addReviewFunction,

        getProductReviewsFunction,
        getPropertyFunction,
        getUserPropertiesFunction,
        getUserReviewsFunction,
        totalPropertyFunction,
        totalReviewsFunction,

        //CONTRACT DATA
        getPropertiesData,
        userBlance,
        isLoading,
        //FRENT_END
        disconnect,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
