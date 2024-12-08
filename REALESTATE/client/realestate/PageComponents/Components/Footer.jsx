import React from "react";

const Footer = () => {
  return (
    <div className="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-content-wrapper">
              <div className="footer-left">
                <div className="logo-thumbnail logo-custom-css">
                  <a className="logo-light" href="index.html">
                    <img src="/logo/logo-white.png" alt="real-estate-logo" />
                  </a>
                  <a className="logo-dark" href="index.html">
                    <img src="/logo/logo-dark.png" alt="real-estate-logo" />
                  </a>
                </div>
                <p className="rn-footer-describe">
                  Built to revolutionize property transactions across Pakistan,
                  ensuring trust and transparency with blockchain technology.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
            <div className="footer-widget widget-quicklink">
              <h6 className="widget-title">Quick Links</h6>
              <ul className="footer-list-one">
                <li className="single-list">
                  <a href="javascript:void(0);">Explore Listings</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Blockchain Security</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Efficient Transactions</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Legal Support</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Transparency Tools</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Transaction History</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Auto-Sync Records</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div className="footer-widget widget-information">
              <h6 className="widget-title">Information</h6>
              <ul className="footer-list-one">
                <li className="single-list">
                  <a href="javascript:void(0);">Market Insights</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Tokenize Property</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Key Resources</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Buyer Protection</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Blog Updates</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">About Us</a>
                </li>
                <li className="single-list">
                  <a href="javascript:void(0);">Issue Resolution</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div className="footer-widget">
              <h6 className="widget-title">Recently Sold</h6>
              <ul className="footer-recent-post">
                <li className="recent-post">
                  <div className="thumbnail">
                    <a href="property-details.html">
                      <img
                        src="/portfolio/portfolio-01.jpg"
                        alt="Property Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="javascript:void(0);">#12 Gulberg Villa</a>
                    </h6>
                    <p>Highest offer 1/15</p>
                    <span className="price">PKR 15M</span>
                  </div>
                </li>
                <li className="recent-post">
                  <div className="thumbnail">
                    <a href="property-details.html">
                      <img
                        src="/portfolio/portfolio-03.jpg"
                        alt="Property Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="javascript:void(0);">Clifton Heights</a>
                    </h6>
                    <p>Highest offer 1/10</p>
                    <span className="price">PKR 8M</span>
                  </div>
                </li>
                <li className="recent-post">
                  <div className="thumbnail">
                    <a href="javascript:void(0);">
                      <img
                        src="/portfolio/portfolio-02.jpg"
                        alt="Property Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="javascript:void(0);">DHA Phase 5</a>
                    </h6>
                    <p>Highest offer 1/25</p>
                    <span className="price">PKR 20M</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
