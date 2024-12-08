import React from "react";

const AuthorTwo = ({ address, author }) => {
  return (
    <div className="rn-author-area mb--30 mt_dec--120">
      <div className="container">
        <div className="row padding-tb-50 align-items-center d-flex">
          <div className="col-lg-12">
            <div className="author-wrapper">
              <div className="author-inner">
                <div className="user-thumbnail">
                  <img src="/profile/profile-01.jpg" alt="" />
                </div>
                <div className="rn-author-info-content">
                  <h4 className="title">{address}</h4>
                  <a href="#" className="social-follw">
                    {/* <i data-feather="twitter"></i> */}
                    <span className="user-name">PolygonUserPK</span>
                  </a>
                  <div className="follow-area">
                    <div className="follow following">
                      <span>
                        {author?.length}{" "}
                        <a href="#" className="color-body">
                          Owned Properties
                        </a>
                      </span>
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

export default AuthorTwo;
