import React from "react";
import Countdown from "react-countdown";
import { Loader } from "../../PageComponents/Components";
const DetailTwo = ({
  property,
  parsedReviews,
  buyingProperty,
  address,
  isLoading,
  buyLoading,
}) => {
  const timeComment = new Date(new Date() - Math.random() * 1e12);

  return (
    <div className="product-details-area rn-section-gapTop">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="product-tab-wrapper rbt-sticky-top-adjust">
              <div className="pd-tab-inner">
                <div
                  className="nav rn-pd-nav rn-pd-rt-content nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <span className="rn-pd-sm-thumbnail">
                      <img src={property?.image} alt="Nft_Profile" />
                    </span>
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <span className="rn-pd-sm-thumbnail">
                      <img src={property?.image} alt="Nft_Profile" />
                    </span>
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <span className="rn-pd-sm-thumbnail">
                      <img src={property?.image} alt="Nft_Profile" />
                    </span>
                  </button>
                </div>

                <div
                  className="tab-content rn-pd-content"
                  id="v-pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="rn-pd-thumbnail">
                      {isLoading ? (
                        <Loader />
                      ) : (
                        <img src={property?.image} alt="Nft_Profile" />
                      )}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="rn-pd-thumbnail">
                      <img
                        src="/portfolio/portfolio-02.jpg"
                        alt="Nft_Profile"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="rn-pd-thumbnail">
                      <img
                        src="/portfolio/portfolio-03.jpg"
                        alt="Nft_Profile"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
            <div className="rn-pd-content-area">
              <div className="pd-title-area">
                <h4 className="title">{property?.title?.slice(0, 25)}..</h4>
                <div className="pd-react-area">
                  <div className="heart-count">
                    <span>{parsedReviews?.length}</span>
                  </div>
                </div>
              </div>

              <div className="catagory-collection">
                <div className="catagory">
                  <span>
                    Catagory{" "}
                    <span className="color-body">{property?.category}</span>
                  </span>
                  <div className="top-seller-inner-one">
                    <div className="top-seller-wrapper">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="/client/client-1.png" alt="Nft_Profile" />
                        </a>
                      </div>
                      <div className="top-seller-content">
                        <a href="#">
                          <p className="name">
                            {" "}
                            {property?.owner?.slice(0, 20)}..
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collection">
                  <span>Collections</span>
                  <div className="top-seller-inner-one">
                    <div className="top-seller-wrapper">
                      <div className="thumbnail">
                        <a href="#">
                          <img src="/client/client-2.png" alt="Nft_Profile" />
                        </a>
                      </div>
                      <div className="top-seller-content">
                        <a href="#">
                          <p className="name">{property?.category}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rn-bid-details">
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
                        Comments
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
                        Details
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Users interest
                      </button>
                    </div>
                  </nav>
                  <div
                    className="tab-content rn-bid-content"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      {parsedReviews?.map((review, i) => (
                        <div key={i + 1} className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src={`/client/client-${i + 1}.png`}
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>{review?.reviewer.slice(0, 35)}... </span>

                              <span className="count-number">
                                {review?.comment.slice(0, 70)}
                                {review?.comment.length >= 93 ? "..." : ""}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="rn-pd-bd-wrapper">
                        <div className="top-seller-inner-one">
                          <h6 className="name-title">Owner</h6>
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="/client/client-1.png"
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <a href="#">
                                <h6 className="name">
                                  {property?.owner?.slice(0, 20)}..
                                </h6>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="rn-pd-sm-property-wrapper">
                          <div className="pd-property-inner">
                            <h6 className="pd-property-title"> Title</h6>
                            <span className="color-white value">
                              {property?.title}
                            </span>
                          </div>
                          <div className="pd-property-inner">
                            <h6 className="pd-property-title"> Description</h6>

                            <span className="color-white value">
                              {property?.description}
                            </span>
                          </div>
                          <div className="pd-property-inner">
                            <h6 className="pd-property-title"> Address</h6>

                            <span className="color-white value">
                              {property?.address}
                            </span>
                          </div>
                          <div className="pd-property-inner">
                            <h6 className="pd-property-title">
                              {" "}
                              Price 18 Decimal Points: {property?.price} Matic
                            </h6>
                          </div>
                          <div className="pd-property-inner">
                            <h6 className="pd-property-title">
                              {" "}
                              Property ID: {property?.productID}
                            </h6>
                          </div>
                        </div>

                        <div className="rn-pd-sm-property-wrapper">
                          <h6 className="pd-property-title">Catagory</h6>
                          <div className="catagory-wrapper">
                            <div className="pd-property-inner">
                              <span className="color-body type">TYPE</span>
                              <span className="color-white value ">
                                {property?.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      {parsedReviews?.map((interest, i) => (
                        <div key={i + 1} className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src={`/client/client-${i + 1}.png`}
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span className="count-number">
                                {interest?.reviewer.slice(0, 40)}...
                              </span>
                              <span>{i + 1} hours ago</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="place-bet-area">
                  <div className="rn-bet-create">
                    {" "}
                    <div className="bid-list winning-bid">
                      <h6 className="title">Recent Comments</h6>
                      {parsedReviews
                        ?.reverse()
                        .slice(0, 2) // Change this to display the number of recent comments you want
                        .map((recentReview, i) => (
                          <div className="top-seller-inner-one" key={i}>
                            {" "}
                            {/* Add a key for each item */}
                            <div className="top-seller-wrapper">
                              <div className="thumbnail">
                                <a href="#">
                                  <img
                                    src="/client/client-7.png"
                                    alt="Nft_Profile"
                                  />
                                </a>
                              </div>
                              <div className="top-seller-content">
                                <span className="heighest-bid">
                                  {recentReview?.reviewer.slice(0, 20)}...
                                </span>
                                <span className="count-number">
                                  {recentReview?.comment.length >= 50
                                    ? `${recentReview?.comment.slice(0, 60)}...`
                                    : recentReview?.comment}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="bid-list left-bid">
                      <h6 className="title">Property Stats</h6>
                      <div className=" mt--15" data-date="2025-12-09">
                        <div className="countdown-container days">
                          <span className="countdown-value">Price: </span>
                          <span className="countdown-heading">
                            {property?.price} MATIC
                          </span>
                        </div>
                        <div className="countdown-container hours">
                          <span className="countdown-value">Comments: </span>
                          <span className="countdown-heading">
                            {parsedReviews?.length}
                          </span>
                        </div>
                        <div className="countdown-container minutes">
                          <span className="countdown-value"> Interest: </span>
                          <span className="countdown-heading">
                            {parsedReviews?.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => buyingProperty()}
                    type="button"
                    className="btn btn-primary-alta mt--30"
                  >
                    {buyLoading ? (
                      <Loader />
                    ) : (
                      <>
                        {address?.toLowerCase() == property?.owner.toLowerCase()
                          ? "You can't buy your owned Property"
                          : `${property?.price} MATIC Buy Property`}
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary-alta mt--30"
                    data-bs-toggle="modal"
                    data-bs-target="#placebidModal"
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTwo;
