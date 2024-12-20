import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Header, Footer, Copyright } from "../PageComponents/Components";
import {
  DetailEight,
  DetailFive,
  DetailOne,
  DetailThree,
  DetailTwo,
} from "../PageComponents/DetailPage";

import { useStateContext } from "../context";
const detail = () => {
  const [property, setProperty] = useState();
  const [parsedReviews, setParsedReviews] = useState();
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const {
    address,
    contract,
    addReviewFunction,
    getProductReviewsFunction,
    buyPropertyFunction,
    getPropertyFunction,
    getPropertiesData,
    updatePriceFunction,
  } = useStateContext();
  const router = useRouter();
  const { query } = router;
  //GET PROPERTY DATA
  const fetchProperty = async () => {
    const data = await getPropertyFunction(query.property);
    const dataReviews = await getProductReviewsFunction(query.property);
    const dataProperties = await getPropertiesData();
    setProperties(dataProperties);
    setProperty(data);
    setParsedReviews(dataReviews);
    setIsLoading(false);
  };
  useEffect(() => {
    if (contract) fetchProperty();
  }, [address, contract]);
  //ADD REVIEW
  const [review, setReview] = useState({
    productID: "",
    rating: 4,
    comment: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setReview({ ...review, [fieldName]: e.target.value });
  };

  const createReview = async () => {
    setCommentLoading(true);
    const data = await addReviewFunction({
      ...review,
      productID: property.productID,
    });
    setCommentLoading(false);
  };

  //BUY PROPERTY
  const buying = {
    productID: property?.productID,
    amount: property?.price,
  };
  const buyingProperty = async () => {
    setBuyLoading(true);
    const data = await buyPropertyFunction(buying);
    setBuyLoading(false);
  };
  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <DetailOne />

      <DetailTwo
        property={property}
        parsedReviews={parsedReviews}
        buyingProperty={buyingProperty}
        address={address}
        isLoading={isLoading}
        buyLoading={buyLoading}
      />

      <DetailThree properties={properties} />
      <DetailFive />

      <DetailEight
        createReview={createReview}
        handleFormFieldChange={handleFormFieldChange}
        commentLoading={commentLoading}
      />

      <Footer />
      <Copyright />
    </div>
  );
};

export default detail;
