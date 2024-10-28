import React, { useState, useEffect } from "react";
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

const Index = () => {
  // STATE VARIABLES
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const { address, contract, getPropertiesData } = useStateContext();

  // GET DATA
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
  }, [contract]); // Updated dependency to [contract]

  // CATEGORIES
  const housing = [];
  const rental = [];
  const farmhouse = [];
  const office = [];
  const commercial = [];
  const country = [];

  if (!isLoading) {
    properties?.forEach((el) => {
      switch (el.category) {
        case "country":
          country.push(el);
          break;
        case "Commercial":
          commercial.push(el);
          break;
        case "Office":
          office.push(el);
          break;
        case "Farmhouse":
          farmhouse.push(el);
          break;
        case "Rental":
          rental.push(el);
          break;
        case "Housing":
          housing.push(el);
          break;
        default:
          break;
      }
    });
  }

  const creators = getTopCreators(properties);

  return (
    <div className="template-color-1 nft-body-connect">
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

export default Index;
