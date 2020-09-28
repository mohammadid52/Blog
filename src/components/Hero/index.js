import React from "react";
import Card from "../UI/Card";
import Logo from "../Logo/";
import "./style.css";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <Card>
      <div style={{ padding: "50px 0" }}>
        <Logo />
      </div>
      <Navbar />
    </Card>
  );
};

export default Hero;
