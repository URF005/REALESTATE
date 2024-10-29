import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

const Product = ({ properties }) => {
  const [selectedCategory, setSelectedCategory] = useState("*");

  // Function to handle category selection
  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  // Filter properties based on selected category
  const filteredProperties =
    selectedCategory === "*"
      ? properties
      : properties.filter((property) =>
          property.category.includes(selectedCategory)
        );

  return (
    <div className="rn-product-area rn-section-gapTop masonary-wrapper-activation">
      <div className="container">
        <div className="row align-items-center mb--30">
          <div className="col-lg-4">
            <div className="section-title">
              <h3 className="title mb--0">Explore Product</h3>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30">
              <button
                className={selectedCategory === "*" ? "is-checked" : ""}
                onClick={() => handleFilter("*")}
              >
                <span className="filter-text">All</span>
              </button>
              <button
                className={selectedCategory === "House" ? "is-checked" : ""}
                onClick={() => handleFilter("House")}
              >
                <span className="filter-text">House</span>
              </button>
              <button
                className={selectedCategory === "Office" ? "is-checked" : ""}
                onClick={() => handleFilter("Office")}
              >
                <span className="filter-text">Office</span>
              </button>
              <button
                className={selectedCategory === "Rental" ? "is-checked" : ""}
                onClick={() => handleFilter("Rental")}
              >
                <span className="filter-text">Rental</span>
              </button>
              <button
                className={selectedCategory === "Farmhouse" ? "is-checked" : ""}
                onClick={() => handleFilter("Farmhouse")}
              >
                <span className="filter-text">Farmhouse</span>
              </button>
              <button
                className={selectedCategory === "Country" ? "is-checked" : ""}
                onClick={() => handleFilter("Country")}
              >
                <span className="filter-text">Country</span>
              </button>
              <button
                className={
                  selectedCategory === "Commercial" ? "is-checked" : ""
                }
                onClick={() => handleFilter("Commercial")}
              >
                <span className="filter-text">Commercial</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredProperties.map((property) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={property.id}>
              <div className="product-style-one no-overlay with-placeBid">
                <div className="card-thumbnail">
                  <Link href={`/detail?property=${property.id}`}>
                    <img
                      src={property.images} // Assuming images is an array
                      alt={property.propertyTitle}
                    />
                  </Link>
                </div>
                <div className="product-share-wrapper">
                  <div className="profile-share">
                    {property.reviewers.map((el, i) => (
                      <a
                        href="author.html"
                        className="avatar"
                        data-tooltip={`Owner: ${el.slice(0, 15)}..`}
                        key={i}
                      >
                        <img
                          src={`/client/client-${i + 1}.png`}
                          alt="Nft_Profile"
                        />
                      </a>
                    ))}
                    {property.reviewers.length !== 0 && (
                      <a className="more-author-text" href="#">
                        {property.reviewers.length}+ Interested Users
                      </a>
                    )}
                  </div>
                </div>
                <Link href={`/detail?property=${property.productId}`}>
                  <span className="product-name">{property.propertyTitle}</span>
                </Link>
                <span class="latest-bid">Category: {property.category}</span>

                <div className="bid-react-area">
                  <div className="last-bid">{property.price} MATIC</div>
                  <div className="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      className="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span className="number">{property.reviewers.length}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
