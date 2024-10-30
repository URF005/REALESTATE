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
                  Built to revolutionize property transactions across Pakistan, ensuring trust and transparency with blockchain technology.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
            <div className="footer-widget widget-quicklink">
              <h6 className="widget-title">Quick Links</h6>
              <ul className="footer-list-one">
                <li className="single-list">
                  <a href="#">Explore Listings</a>
                </li>
                <li className="single-list">
                  <a href="#">Blockchain Security</a>
                </li>
                <li className="single-list">
                  <a href="#">Efficient Transactions</a>
                </li>
                <li className="single-list">
                  <a href="#">Legal Support</a>
                </li>
                <li className="single-list">
                  <a href="#">Transparency Tools</a>
                </li>
                <li className="single-list">
                  <a href="#">Transaction History</a>
                </li>
                <li className="single-list">
                  <a href="#">Auto-Sync Records</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div className="footer-widget widget-information">
              <h6 className="widget-title">Information</h6>
              <ul className="footer-list-one">
                <li className="single-list">
                  <a href="#">Market Insights</a>
                </li>
                <li className="single-list">
                  <a href="#">Tokenize Property</a>
                </li>
                <li className="single-list">
                  <a href="#">Key Resources</a>
                </li>
                <li className="single-list">
                  <a href="#">Buyer Protection</a>
                </li>
                <li className="single-list">
                  <a href="blog.html">Blog Updates</a>
                </li>
                <li className="single-list">
                  <a href="about.html">About Us</a>
                </li>
                <li className="single-list">
                  <a href="#">Issue Resolution</a>
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
                      <a href="property-details.html">#12 Gulberg Villa</a>
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
                      <a href="property-details.html">Clifton Heights</a>
                    </h6>
                    <p>Highest offer 1/10</p>
                    <span className="price">PKR 8M</span>
                  </div>
                </li>
                <li className="recent-post">
                  <div className="thumbnail">
                    <a href="property-details.html">
                      <img
                        src="/portfolio/portfolio-02.jpg"
                        alt="Property Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="property-details.html">DHA Phase 5</a>
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
