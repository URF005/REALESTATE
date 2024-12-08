import React from "react";

const Quote = () => {
  return (
    <div className="rn-about-Quote-area rn-section-gapTop">
      <div className="container">
        <div className="row g-5 d-flex align-items-center">
          <div className="col-lg-6">
            <div className="rn-about-title-wrapper">
              <h3
                className="title"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
              >
                Revolutionizing Real Estate Transactions with Blockchain at
                Qreal
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="rn-about-wrapper"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="150"
            >
              <p>
                Blockchain technology is redefining how properties are bought
                and sold. The integration of blockchain ensures secure and
                transparent transactions, offering tremendous growth potential.
                According to industry reports, the adoption of blockchain in
                real estate has surged exponentially, making it a game-changer
                in the property market. Experience seamless transactions and
                enhanced trust with Qreal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
