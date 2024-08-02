import React from "react";
import "../styles/pages/partner.css";
import Sidebar from "../components/Sidebar";

export default function Partner() {
  return (
    <div id="page-infos-partner">
      <Sidebar></Sidebar>

      <main>
        <form className="infos-partner-form">
          <fieldset>
            <legend>Informações do Parceiro</legend>
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

          <button className="update-button" type="submit">
            Atualizar
          </button>

          <button className="delete-button" type="submit">
            Deletar
          </button>
        </form>
      </main>
    </div>
  );
}
