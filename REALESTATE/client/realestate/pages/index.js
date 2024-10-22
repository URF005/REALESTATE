import React from "react";
import { useState, useEffect } from "react";
import {
  Header,
  Banner,
  Live,
  Service,
  Product,
  TopSeller,
  Collection,
  Footer,
  Copyright,
} from "../PageComponents/Components";
import { useStateContext } from "../context";
import { getTopCreators } from "../utils";
import contact from "./contact";
const index = () => {
  // STATE VARIABLES
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const { address, contract, getPropertiesData } = useStateContext();
  //GET DATA
  const fetchProperty = async () => {
    setIsLoading(true);
    const data = await getPropertiesData();

    setProperties(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) {
      fetchProperty();
    }
  }, [address, contact]);
  //CATEGORIES
  const housing = [];
  const rental = [];
  const farmhouse = [];
  const office = [];
  const commercial = [];
  const country = [];

  if (!isLoading) {
    properties?.map((el) => {
      if (el.category === "country") {
        country.push(el);
      } else if (el.category === "Commercial") {
        commercial.push(el);
      } else if (el.category === "Office") {
        office.push(el);
      } else if (el.category === "Farmhouse") {
        farmhouse.push(el);
      } else if (el.category === "Rental") {
        rental.push(el);
      } else if (el.category === "Housing") {
        housing.push(el);
      }
    });
  }
  const creators = getTopCreators(properties);
  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <Banner />

      <Live properties={properties} />
      <Service />
      <Product properties={properties} />
      <TopSeller creators={creators} />
      <Collection
        housing={housing?.length}
        rental={rental?.length}
        farmhouse={farmhouse?.length}
        office={office?.length}
      />
      <Footer />
      <Copyright />
    </div>
  );
};

export default index;
