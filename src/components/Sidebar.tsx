import React from "react";

import nfIcon from "../images/nf-icon.png";

import "../styles/components/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <img src={nfIcon} alt="NexForce Icone" />
    </aside>
  );
}
