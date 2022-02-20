import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
import TestimonialSlider from "../components/TestimonialSlider";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class About extends Component {
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
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area">
          <div className="container" background-color="white">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      At Microsoft, our mission is to empower every student on the planet to achieve more. We believe that students today will be the changemakers of tomorrow, so empowering
                      them with the tools and opportunities to learn new skills and be future leaders is core to our mission. That is why we have extended Imagine Cup to younger students through
                      launching the Imagine Cup Junior - Artificial Intelligence for Good challenge
                    </li>
                    <li></li>
                    <li>Imagine Cup Junior 2021 provides students aged 13 to 18 the opportunity to learn about technology and how it can be used to positively change the world.
                      The Global challenge is focused on Artificial Intelligence (AI), introducing students to AI and Microsoft's AI for Good initiatives so they can come up with ideas to solve
                      social, cultural and environmental issues. It is also an opportunity to encourage students to develop and practice 21st Century skills like Communication, collaboration, critical thinking and creativity.
                    </li>
                    <li></li>
                    <li>The Imagine Cup Online Learning portal provides a platform for students to learn the fundamentals of programming starting with a detailed introduction to Microsoft and the Imagine Cup program. 
                      By the end of the modules, you will: <br></br> Understand programming concepts,<br></br>Attempt practical quizzes after the hands-on guides,<br></br>Apply the 
                      learnt skills in your individual and team projects.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper" style={{marginTop:"20px"}}>
          {/*About section start*/}
          
          {/*About section end*/}

          {/* Feature Icon */}
          

          {/* Team member */}
          <TeamMemberGrid />

        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
