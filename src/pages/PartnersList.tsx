import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import nfLogo from "../images/nf-logo-white.png";

import "../styles/global.css";
import "../styles/pages/partners-list.css";

function PartnerList() {
  const homePartnershipRequests = [
    {
      id: 1,
      name: "NexForce",
      city: "São Paulo",
      country: "Brasil",
      phone: "123123123",
      website: "nexforce.io",
    },
    {
      id: 2,
      name: "LAC",
      city: "Vancouver",
      country: "Canada",
      phone: "321321321",
      website: "lac.co",
    },
    {
      id: 3,
      name: "Meta",
      city: "Menlo Park",
      country: "Estados Unidos",
      phone: "123123123",
      website: "facebook.com",
    },
    {
      id: 4,
      name: "Google",
      city: "Nova Iorque",
      country: "Estados Unidos",
      phone: "321321321",
      website: "google.com",
    },
  ];

  return (
    <div id="partners-list">
      <aside>
        <header>
          <img src={nfLogo} alt="NexForce" />
          <h2>Escolha um parceiro NexForce</h2>
          <p>Trabalhe junto conosco para transformar sua empresa</p>
          <Link to="/register" className="new-partner">
            Seja um Parceiro
            <FiPlus size={16} color="#212121" />
          </Link>
        </header>
      </aside>

      <div id="board-list">
        <section id="board-list-header">
          <h1>Encontre um Parceiro</h1>
        </section>

        <section id="board-list-table">
          <table>
            <thead>
              <tr>
                <th align="left">Empresa</th>
                <th align="left">Cidade</th>
                <th align="left">País</th>
                <th align="left">Telefone</th>
                <th align="left">Website</th>
              </tr>
            </thead>

            <tbody>
              {homePartnershipRequests.map((currentPartnershipRequest) => {
                return (
                  // <Link to="/partners/66aa2db378f94279c9f0fbe2">
                  <tr key={currentPartnershipRequest.id}>
                    <td>
                      <Link to="/partners/66aa2db378f94279c9f0fbe2">
                        {currentPartnershipRequest.name}
                      </Link>
                    </td>
                    <td>{currentPartnershipRequest.city}</td>
                    <td>{currentPartnershipRequest.country}</td>
                    <td>{currentPartnershipRequest.phone}</td>
                    <td>
                      <a href="https://{currentPartnershipRequest.website}">
                        {currentPartnershipRequest.website}
                      </a>
                    </td>
                  </tr>
                  // </Link>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default PartnerList;
