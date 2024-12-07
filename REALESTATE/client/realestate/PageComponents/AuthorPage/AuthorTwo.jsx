import React from "react";

const AuthorTwo = ({ address, author }) => {
  return (
    <div class="rn-author-area mb--30 mt_dec--120">
      <div class="container">
        <div class="row padding-tb-50 align-items-center d-flex">
          <div class="col-lg-12">
            <div class="author-wrapper">
              <div class="author-inner">
                <div class="user-thumbnail">
                  <img src="/profile/profile-01.jpg" alt="" />
                </div>
                <div class="rn-author-info-content">
                  <h4 class="title">{address}</h4>
                  <a href="#" class="social-follw">
                    {/* <i data-feather="twitter"></i> */}
                    <span class="user-name">PolygonUserPK</span>
                  </a>
                  <div class="follow-area">
                    <div class="follow following">
                      <span>
                        {author?.length}{" "}
                        <a href="#" class="color-body">
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
