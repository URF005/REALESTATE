import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context";
import { checkIfImage } from "../../utils";
import { ethers } from "ethers";

export const Index = () => {
  const {
    contract,
    address,
    connect,
    realestate,
    createPropertyFunction,
    getPropertyData,
  } = useStateContext();

  // State variables
  const [isLoading, setIsLoading] = useState(false);
  const [propertyData, setPropertyData] = useState([]);
  const [form, setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images: "",
    propertyAddress: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkIfImage(form.images, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createPropertyFunction({
          ...form,
          price: ethers.utils.parseUnits(form.price, 18),
        });
        setIsLoading(false);
      } else {
        alert("Please select a valid image URL");
        setForm({ ...form, images: "" });
      }
    });
  };

  //GET PROPERTY DATA
  const fetchPropertyData = async () => {
    setIsLoading(true);
    const data = await getPropertyData();
    setPropertyData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (contract) fetchPropertyData();
  }, [address, contract]);
  console.log(propertyData);

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <h1 className="text-center mt-4">Welcome to {realestate}</h1>
      <div className="text-center">
        <button
          onClick={() => connect()}
          type="button"
          className="btn btn-primary"
        >
          Connect Wallet
        </button>
      </div>
      <p className="text-center mt-3 fw-bold">Your Address: {address}</p>
      <h2 className="text-center mt-3 fw-bold">Create Property</h2>
      <div className="container d-flex justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control text-center mb-3"
                id="propertyTitle"
                placeholder="Property Title"
                onChange={(e) => handleFormFieldChange("propertyTitle", e)}
              />
              <input
                type="text"
                className="form-control text-center mb-3"
                id="description"
                placeholder="Description"
                onChange={(e) => handleFormFieldChange("description", e)}
              />
              <input
                type="text"
                className="form-control text-center mb-3"
                id="category"
                placeholder="Category"
                onChange={(e) => handleFormFieldChange("category", e)}
              />
              <input
                type="number"
                className="form-control text-center mb-3"
                id="price"
                placeholder="Price"
                onChange={(e) => handleFormFieldChange("price", e)}
              />
              <input
                type="url"
                className="form-control text-center mb-3"
                id="images"
                placeholder="Images"
                onChange={(e) => handleFormFieldChange("images", e)}
              />
              <input
                type="text"
                className="form-control text-center mb-3"
                id="propertyAddress"
                placeholder="Property Address"
                onChange={(e) => handleFormFieldChange("propertyAddress", e)}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          {isLoading ? (
            <div className="d-flex justify-content-center w-100">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            propertyData.map((property, index) => (
              <div key={index} className="col-md-4 d-flex align-items-stretch">
                <div className="card mb-4 shadow-sm">
                  <img
                    src={property.images}
                    className="card-img-top"
                    alt={property.propertyTitle}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.propertyTitle}</h5>
                    <p className="card-text text-truncate">
                      {property.description}
                    </p>
                    <p className="card-text">
                      <strong>Category:</strong>{" "}
                      <span className="text-success">{property.category}</span>
                    </p>
                    <p className="card-text">
                      <strong>Price:</strong>{" "}
                      <span className="text-success">{property.price} ETH</span>
                    </p>
                    <p className="card-text">
                      <strong>Owner:</strong> {property.owner}
                    </p>
                    <p className="card-text">
                      <strong>Address:</strong> {property.address}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        ID: {property.productId}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
