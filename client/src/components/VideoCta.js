import React, { Component } from "react";

class VideoCta extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        {/*====================  video cta area ====================*/}
        <div className="video-cta-area section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h4 className="video-cta-content__small-title">ABOUT US</h4>
                  <h3 className="video-cta-content__title">
                    Best E-learning Portal
                  </h3>
                  <p className="video-cta-content__text">
                  The Imagine Cup Online Learning portal provides a platform for students to learn the fundamentals of programming starting with a detailed 
                  introduction to Microsoft and the Imagine Cup program. By the end of the modules, you will: Understand the basic concepts of programming, 
                  attempt practical quizes after the hands-on guides, apply the developed skills in your individual and team projects.
                  </p>
                  <a
                    href={`${process.env.PUBLIC_URL}/contact-us`}
                    className="ht-btn ht-btn--round"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="cta-video-image">
                  <img
                    src="assets/img/slider/sphere.png"
                    height="360px"
                    width="360px"
                    alt="techsphere"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of video cta area  ====================*/}
      </div>
    );
  }
}

export default VideoCta;
