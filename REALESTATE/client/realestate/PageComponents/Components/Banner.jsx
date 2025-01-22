import React from "react";
import Link from "next/link";

const Banner = () => {
  const category = [
    {
      name: "House",
      link: "/housing",
    },
    {
      name: "Office",
      link: "/office",
    },
    {
      name: "Farmhouse",
      link: "/farmhouse",
    },
    {
      name: "Apartment",
      link: "/apartment",
    },
    {
      name: "Commercial",
      link: "/commercial",
    },
    {
      name: "country",
      link: "/country",
    },
  ];
  return (
    <div className="banner-three slider-style-3 pt--70">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="wrapper">
              <div className="slider ">
                <div className="slider-thumbnail thumbnail-overlay">
                  <a>
                    <img
                      className="w-100"
                      src="/portfolio/portfolio-11.jpg"
                      alt="NFT_portfolio"
                    />
                  </a>
                  <div className="read-wrapper">
                    <h5>
                      <a>@theQrealcoders</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {category.map((el, i) => (
                <div key={i + 1} className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="slide-small-wrapper">
                    <div className="thumbnail thumbnail-overlay">
                      <Link
                        href={{
                          pathname: `/category${el.link}`,
                          query: { name: `${el.name}` },
                        }}
                      >
                        <img
                          className="w-100"
                          src={`/portfolio/portfolio-${i + 12}.jpg`}
                          alt="Nft_Profile"
                        />
                      </Link>
                    </div>
                    <div className="read-wrapper">
                      <h5 className="title">
                        <Link href="#">{el.name}</Link>
                      </h5>
                    </div>
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

export default Banner;
