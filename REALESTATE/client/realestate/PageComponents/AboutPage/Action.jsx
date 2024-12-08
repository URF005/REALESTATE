import React from "react";

const Action = () => {
  return (
    <div className="rn-callto-action rn-section-gapTop">
      <div className="container-fluid about-fluidimg-cta">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="bg_image--6 bg_image bg-image-border"
              data-black-overlay="7"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="call-to-action-wrapper">
                    <h3
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Explore Blockchain-Powered Real Estate <br /> with Qreal
                    </h3>
                    <p
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Transform your real estate experience with secure,
                      transparent, and efficient blockchain technology. Buy,
                      sell, and manage properties seamlessly with Qreal.
                    </p>
                    <div
                      className="callto-action-btn-wrapper"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      <a href="/create" className="btn btn-primary btn-large">
                        Register Property
                      </a>
                      <a
                        href="/contact"
                        className="btn btn-primary-alta btn-large"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
