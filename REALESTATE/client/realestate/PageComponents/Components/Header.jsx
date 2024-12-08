import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "../../context";

const Header = () => {
  const { address, disconnect, connect, userBlance } = useStateContext();

  return (
    <>
      <header className="rn-header haeder-default header--sticky">
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-thumbnail logo-custom-css">
                <Link className="logo-light" href="/">
                  <img src="/logo/logo-white.png" alt="nft-logo" />
                </Link>
                <Link className="logo-dark" href="/">
                  <img src="/logo/logo-dark.png" alt="nft-logo" />
                </Link>
              </div>
              <div className="mainmenu-wrapper">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  <ul className="mainmenu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="#">Explore</a>
                      <ul className="submenu">
                        <li>
                          <Link href="/author">
                            Owner<i className="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/create">
                            Create
                            <i className="feather-fast-forward"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              {/* //CONNECT WALLET */}

              {address ? (
                ""
              ) : (
                <div
                  className="setting-option header-btn rbt-site-header"
                  id="rbt-site-header"
                >
                  <div className="icon-box">
                    <button
                      onClick={() => connect()}
                      className="btn btn-primary-alta btn-small"
                    >
                      Wallet connect
                    </button>
                  </div>
                </div>
              )}

              {/* //END CONNECT WALLET */}

              {address ? (
                <div>
                  <div className="setting-option rn-icon-list user-account">
                    <div className="icon-box">
                      <a href="/author">
                        <img src="/icons/boy-avater.png" alt="Images" />
                      </a>
                      <div className="rn-dropdown">
                        <div className="rn-inner-top">
                          <h4 className="title">
                            <a href="product-details.html">
                              {address.slice(0, 15)}...
                            </a>
                          </h4>
                        </div>
                        <div className="rn-product-inner">
                          <ul className="product-list">
                            <li className="single-product-list">
                              <div className="thumbnail">
                                <a href="product-details.html">
                                  <img
                                    src="/portfolio/portfolio-07.jpg"
                                    alt="Nft Product Images"
                                  />
                                </a>
                              </div>
                              <div className="content">
                                <h6 className="title">
                                  <a href="product-details.html">Balance</a>
                                </h6>
                                <span className="price">
                                  {userBlance?.slice(0, 6)} MATIC
                                </span>
                              </div>
                              <div className="button"></div>
                            </li>
                          </ul>
                        </div>
                        <div className="add-fund-button mt--20 pb--20">
                          <a className="btn btn-primary-alta w-100" href="/connect">
                            Add Your More Funds
                          </a>
                        </div>
                        <ul className="list-inner">
                          <li>
                            <a href="/author">My Profile</a>
                          </li>

                          <li>
                            <a href="/connect">Manage funds</a>
                          </li>
                          <li>
                            <a href="#" onClick={() => disconnect()}>
                              Disconnect
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button className="hamberger-button">
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className="popup-mobile-menu">
        <div className="inner">
          <div className="header-top">
            <div className="logo logo-custom-css">
              <a className="logo-light" href="index.html">
                <img src="/logo/logo-white.png" alt="nft-logo" />
              </a>
              <a className="logo-dark" href="index.html">
                <img src="/logo/logo-dark.png" alt="nft-logo" />
              </a>
            </div>
            <div className="close-menu">
              <button className="close-button">
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul className="mainmenu">
              <li>
                <a className="nav-link its_new" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a className="nav-link its_new" href="/explor">
                  Explore
                </a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
