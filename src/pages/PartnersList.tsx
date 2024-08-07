import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import nfLogo from "../images/nf-logo-white.png";

import "../styles/global.css";
import "../styles/pages/partners-list.css";
import api from "../services/api";

interface Partner {
  id: string;
  name: string;
  city: string;
  country: string;
  phone: string;
  domain: string;
}

function PartnerList() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/partners").then((response) => {
      setPartners(response.data);
    });
  }, []);

  let partnerSearched = partners.filter((partner) =>
    partner.name.toLowerCase().includes(search.toLowerCase())
  );

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
          <form>
            <label>Filtrar:</label>
            <input
              type="text"
              placeholder="Nome da empresa"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </form>
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
              {partnerSearched.map((partner) => {
                return (
                  <tr key={partner.id}>
                    <td className="company-name">
                      <Link to={`/partners/${partner.id}`}>{partner.name}</Link>
                    </td>
                    <td>{partner.city}</td>
                    <td>{partner.country}</td>
                    <td>{partner.phone}</td>
                    <td className="company-domain">
                      <a
                        target="_blank"
                        href={`https://${partner.domain}`}
                        rel="noreferrer"
                      >
                        {partner.domain}
                      </a>
                    </td>
                  </tr>
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
