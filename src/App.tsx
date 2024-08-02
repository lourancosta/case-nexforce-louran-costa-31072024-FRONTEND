import React from "react";
import { FiArrowRight } from "react-icons/fi";

import "./styles/global.css";
import "./styles/pages/landing.css";

import logoImg from "./images/nf-logo.png";
import landingImage from "./images/nf-man.png";

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="NexForce" />
        <main>
          <h1>Parcerias NexForce</h1>
          <p>Seja parceiro da maior consultoria RevOps da América Latina</p>
          <a href=">" className="enter-partners">
            <FiArrowRight size={26} color="white" />
          </a>
        </main>
      </div>
      <div className="landing-image">
        <img src={landingImage} alt="Parceiro NexForce" />
      </div>
    </div>
  );
}

export default App;
