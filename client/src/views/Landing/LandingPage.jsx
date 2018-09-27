import React from "react";
// Sections for this page
import About from "./Sections/About.jsx";
import Contact from "./Sections/Contact.jsx";
import Features from "./Sections/Features.jsx";
import Footer from "./Sections/Footer.jsx";
import Header from "./Sections/Header.jsx";
import LandingNav from "./Sections/LandingNav.jsx";
import Loginbtn from "./Sections/Loginbtn.jsx";

import Signup from "./Sections/Signup.jsx";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LandingNav />
        <Header />
        <section id="about" />
        <About />
        <section id="features" />
        <Features />
        <section id="signup" />
        <Signup />
        <Contact />
        <Footer />
        <Loginbtn />
      </div>
    );
  }
}

export default LandingPage;
