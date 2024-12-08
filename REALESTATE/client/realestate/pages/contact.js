import React from "react";

//INTERNAL IMPORT
import {
  ContactFour,
  ContactOne,
  ContactThree,
  ContactTwo,
} from "../PageComponents/ContactPage";
import { Header, Footer, Copyright } from "../PageComponents/Components";

const contact = () => {
  return (
    <div className="template-color-1 nft-body-connect">
      <Header />
      <ContactOne />
      <ContactTwo />
      <ContactFour />
      <Footer />
      <Copyright />
    </div>
  );
};

export default contact;
