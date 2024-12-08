import React from "react";
import {
  FaBitcoin,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaStripe,
  FaGooglePay,
  FaApplePay,
} from "react-icons/fa";

const ConnectTwo = () => {
  return (
    <div className="rn-connect-area rn-section-gapTop">
      <div className="container">
        <div className="row g mb--50 mb_md--30 mb_sm--30 align-items-center">
          <div
            className="col-lg-6"
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="800"
          >
            <h3 className="connect-title">Connect Your Wallet</h3>
            <p className="connect-td">
              Connect with one of the available wallet providers or create a new
              wallet. <a href="#">What is a wallet?</a>
            </p>
          </div>
          <div
            className="col-lg-6"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="800"
          >
            <p className="wallet-bootm-disc">
              We do not own your private keys and cannot access your funds
              without your confirmation.
            </p>
          </div>
        </div>
        <div className="row g-5">
          <div
            className="col-lg-6"
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-duration="500"
          >
            <div
              className="left-image"
              style={{ width: "100%", textAlign: "center" }}
            >
              <img
                src="connect/connect-01.png"
                alt="Placeholder Wallet Connection"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-5">
              {[
                {
                  name: "Bitcoin Wallet",
                  icon: <FaBitcoin />,
                  description: "Secure Bitcoin transactions.",
                  link: "https://bitcoin.org",
                },
                {
                  name: "Visa Wallet",
                  icon: <FaCcVisa />,
                  description: "Connect your Visa for payments.",
                  link: "https://www.visa.com",
                },
                {
                  name: "Mastercard Wallet",
                  icon: <FaCcMastercard />,
                  description: "Seamless Mastercard payments.",
                  link: "https://www.mastercard.com",
                },
                {
                  name: "PayPal",
                  icon: <FaPaypal />,
                  description: "Trusted global payment platform.",
                  link: "https://www.paypal.com",
                },
                {
                  name: "Stripe Wallet",
                  icon: <FaStripe />,
                  description: "Modern card payments made simple.",
                  link: "https://www.stripe.com",
                },
                {
                  name: "Google Pay",
                  icon: <FaGooglePay />,
                  description: "Fast and secure Google Pay.",
                  link: "https://pay.google.com",
                },
                {
                  name: "Apple Pay",
                  icon: <FaApplePay />,
                  description: "Smooth Apple Pay transactions.",
                  link: "https://www.apple.com/apple-pay/",
                },
              ].map((wallet, index) => (
                <div
                  key={index}
                  className="col-xxl-4 col-lg-6 col-md-4 col-12 col-sm-6 col-12"
                  data-sal="slide-up"
                  data-sal-delay={`${150 + index * 50}`}
                  data-sal-duration="800"
                >
                  <div className="wallet-wrapper">
                    <div className="inner">
                      <div className="icon" style={{ fontSize: "2rem" }}>
                        {wallet.icon}
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a
                            href={wallet.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {wallet.name}
                          </a>
                        </h4>
                        <p className="description">{wallet.description}</p>
                      </div>
                    </div>
                    <a
                      className="over-link"
                      href={wallet.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectTwo;
