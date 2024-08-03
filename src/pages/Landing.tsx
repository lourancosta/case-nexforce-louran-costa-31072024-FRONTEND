import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/global.css";
import "../styles/pages/landing.css";

import logoImg from "../images/nf-logo.png";
import landingImage from "../images/nf-man.png";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="NexForce" />
        <main>
          <h1>Programa de Parcerias</h1>
          <p>Veja quais empresas são parceiras credenciadas NexForce</p>
          <Link to="/partners" className="enter-partners">
            <FiArrowRight size={26} color="white" />
          </Link>
        </main>
      </div>
      <div className="landing-image">
        <img src={landingImage} alt="Parceiro NexForce" />
      </div>
    </div>
  );
}

export default Landing;
