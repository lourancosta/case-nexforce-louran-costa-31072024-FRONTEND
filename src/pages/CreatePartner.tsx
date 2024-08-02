import React from "react";
import Sidebar from "../components/Sidebar";

import nfEvent from "../images/nf-event.png";

import "../styles/pages/create-partner.css";

export default function CreatePartner() {
  return (
    <div id="page-create-partner">
      <Sidebar></Sidebar>

      <main>
        <form className="create-partner-form">
          <div className="form-header">
            <img src={nfEvent} alt="NexForce" />
            <h2>
              Abra sua solicitação de candidatura e se torne um parceiro
              NexForce
            </h2>
          </div>

          <fieldset>
            <div className="input-block">
              <label htmlFor="name">Nome Empresa</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="city">Cidade</label>
              <input id="city" />
            </div>

            <div className="input-block">
              <label htmlFor="phone">Telefone</label>
              <input id="phone" />
            </div>

            <div className="input-block">
              <label htmlFor="website">WebSite</label>
              <input id="website" />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
