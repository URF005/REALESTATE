import React from "react";
import Link from "next/link";
import { Loader } from "../Components";

const AuthorThree = ({ properties, author }) => {
  return (
    <div className="rn-authore-profile-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-wrapper-one">
              <nav className="tab-button-one">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="false"
                  >
                    All Properties
                  </button>
                  <button
                    className="nav-link active"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="true"
                  >
                    Owned
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="tab-content rn-bid-content" id="nav-tabContent">
          {/* All Properties Tab */}
          <div
            className="tab-pane row g-5 d-flex fade"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {properties.length === 0 ? (
              <Loader />
            ) : (
              properties.map((property, i) => (
                <div
                  key={i}
                  className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                >
                  <div className="product-style-one no-overlay with-placeBid">
                    <div className="card-thumbnail">
                      <Link href={`/detail?property=${property.productId}`}>
                        <img
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                          src={property.images}
                          alt="Property Image"
                        />
                      </Link>
                    </div>
                    <div className="product-share-wrapper">
                      <div className="profile-share">
                        {property.reviewers.map((el, i) => (
                          <a
                            key={i}
                            className="avatar"
                            data-tooltip={`${el.slice(0, 15)}..`}
                          >
                            <img
                              src={`/client/client-${i + 1}.png`}
                              alt="Reviewer"
                            />
                          </a>
                        ))}
                        {property.reviewers.length !== 0 && (
                          <a className="more-author-text" href="#">
                            Interested Users
                          </a>
                        )}
                      </div>
                    </div>
                    <a href="#">
                      <span className="product-name">
                        {property.propertyTitle?.length >= 25
                          ? `${property.propertyTitle.slice(0, 22)}...`
                          : property.propertyTitle}
                      </span>
                    </a>
                    <span className="latest-bid">
                      Category: {property.category}
                    </span>
                    <div className="bid-react-area">
                      <div className="last-bid">{property.price} MATIC</div>
                      <div className="react-area">
                        <span className="number">
                          {property.reviewers.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Owned Properties Tab */}
          <div
            className="tab-pane row g-5 d-flex fade show active"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            {author.length === 0 ? (
              <Loader />
            ) : (
              author.map((property, i) => (
                <div
                  key={i}
                  className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                >
                  <div className="product-style-one no-overlay with-placeBid">
                    <div className="card-thumbnail">
                      <Link href={`/detail?property=${property.productID}`}>
                        <img
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                          src={property.image}
                          alt="Property Image"
                        />
                      </Link>
                      <Link
                        href={`/update?property=${property.productID}`}
                        className="btn btn-primary"
                      >
                        Update
                      </Link>
                    </div>
                    <div className="product-share-wrapper">
                      <div className="profile-share">
                        {property.reviewers.map((el, i) => (
                          <a
                            key={i}
                            className="avatar"
                            data-tooltip={`${el.slice(0, 15)}..`}
                          >
                            <img
                              src={`/client/client-${i + 1}.png`}
                              alt="Reviewer"
                            />
                          </a>
                        ))}
                        {property.reviewers.length !== 0 && (
                          <a className="more-author-text" href="#">
                            Interested Users
                          </a>
                        )}
                      </div>
                    </div>
                    <a href="#">
                      <span className="product-name">
                        {property.title?.length >= 25
                          ? `${property.title.slice(0, 22)}...`
                          : property.title}
                      </span>
                    </a>
                    <span className="latest-bid">
                      Category: {property.category}
                    </span>
                    <div className="bid-react-area">
                      <div className="last-bid">{property.price} MATIC</div>
                      <div className="react-area">
                        <span className="number">
                          {property.reviewers.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorThree;
