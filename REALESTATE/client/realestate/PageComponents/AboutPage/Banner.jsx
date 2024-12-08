import React from "react";

const Banner = () => {
  return (
    <div className="rn-about-banner-area rn-section-gapTop">
      <div className="container mb--30">
        <div className="row">
          <div className="col-12">
            <h2
              className="title about-title-m"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="150"
            >
              Revolutionizing Real Estate. <br />
              Secure and Transparent Transactions
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid about-fluidimg">
        <div className="row">
          <div className="img-wrapper">
            <div className="bg_image--22 bg_image"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="h--100">
              <div className="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                <div className="inner">
                  <h2
                    className="title"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    Why Choose Qreal?
                  </h2>
                  <p
                    className="about-disc"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    Qreal leverages blockchain technology to provide secure and
                    transparent solutions for property transactions. From
                    ownership verification to seamless property transfers, our
                    platform ensures trust and efficiency in every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rn-about-card transparent-bg">
              <div className="inner">
                <h3
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="150"
                >
                  Helping You <br />
                  Thrive in Every Step.
                </h3>
                <p
                  className="about-disc mb--0"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="150"
                >
                  With blockchain integration, Qreal ensures you have access to
                  the most innovative tools in real estate. Whether buying,
                  selling, or managing properties, we simplify complex processes
                  to help you achieve your goals effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
