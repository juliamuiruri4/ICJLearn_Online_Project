import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/*====================  footer area ====================*/}
        <div className="footer-area" >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-content-wrapper section-space--inner--100">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4">
                      {/* footer intro wrapper */}
                      <div className="footer-intro-wrapper">
                        <div className="footer-logo">
                          <a href={`${process.env.PUBLIC_URL}/home-two`}>
                            <div className="logoHead">
                              <img
                                src="/assets/img/logo/ic-logo.jpg"
                                alt=""
                                className="sticky-logo img-fluid"
                              />
                              <h3>Imagine Cup Junior Online Learning</h3>
                            </div>
                          </a>
                        </div>
                        <div className="footer-desc">
                          Imagine Cup Junior is open to every student aged between 13 years - 18 years.
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget">
                        <h4 className="footer-widget__title">USEFUL LINKS</h4>
                        <ul className="footer-widget__navigation">
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Home</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Imagine Cup Website
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Projects</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>Careers</a>
                          </li>
                          <li>
                            <a href={`${process.env.PUBLIC_URL}/`}>
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                      {/* footer widget */}
                      <div className="footer-widget mb-0">
                        <h4 className="footer-widget__title">CONTACT US</h4>
                        <div className="footer-widget__content">
                          <p className="address">
                            Dunhill Towers, Westlands, Kenya
                          </p>
                          <ul className="contact-details">
                            <li>
                            <span className="icon"><i className="ion-ios-telephone-outline" /></span>
                                    <span className="text"><a href="tel:254724856784">(254) 72485 6784</a></span>
                            </li>
                            <li>
                            <span className="icon"><i className="ion-ios-email-outline" /></span>
                                    <span className="text"><a href="mailto:learn@imaginecup.onmicrosoft.com">learn@imaginecup.onmicrosoft.com</a><a href="mailto:kenya@stdnprtners.onmicrosoft.com">kenya@stdnprtners.onmicrosoft.com</a></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright text-center">
              Copyright © 2022. All right reserved
            </div>
          </div>
        </div>
        {/*====================  End of footer area  ====================*/}
        {/*====================  scroll top ====================*/}
        <button className="scroll-top" id="scroll-top">
          <i className="ion-android-arrow-up" />
        </button>
        {/*====================  End of scroll top  ====================*/}
      </div>
    );
  }
}

export default Footer;
