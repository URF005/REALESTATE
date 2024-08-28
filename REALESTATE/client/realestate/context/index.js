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

  //GET PROPERTY DATA FUNCTION
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

  return (
    <StateContext.Provider
      value={{
        contract,
        address,
        connect,
        realestate,
        createPropertyFunction,
        getPropertyData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
