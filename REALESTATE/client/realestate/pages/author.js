import React, { useEffect, useState } from "react";

//INTERNAL IMPORT
import {
  AuthorFive,
  AuthorFour,
  AuthorOne,
  AuthorThree,
  AuthorTwo,
} from "../PageComponents/AuthorPage";
import { Header, Footer, Copyright } from "../PageComponents/Components";

import { useStateContext } from "../context";

const author = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [author, setAuthor] = useState([]);

  const { address, contract, getUserPropertiesFunction, getPropertiesData } =
    useStateContext();

  //GET DATA
  const fetchProperty = async () => {
    setIsLoading(true);
    const data = await getPropertiesData();
    const dataAuthor = await getUserPropertiesFunction();
    setAuthor(dataAuthor);
    setProperties(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchProperty();
  }, [address, contract]);

  console.log(properties);
  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <AuthorOne />
      <AuthorTwo address={address} author={author} />
      <AuthorThree properties={properties} author={author} />
      <AuthorFive />
      <Footer />
      <Copyright />
    </div>
  );
};

export default author;
