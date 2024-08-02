import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import nfEvent from "../images/nf-event.png";

import "../styles/pages/create-partner.css";
import api from "../services/api";

export default function CreatePartner() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name: name,
      domain: domain,
      phone: phone,
      city: city,
      country: country,
    };

    await api.post("partners", JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });

    alert("Cadastro realizado com sucesso!");
    navigate("/partners");
  }

  return (
    <div id="page-create-partner">
      <Sidebar></Sidebar>
      ``
      <main>
        <form className="create-partner-form" onSubmit={handleSubmit}>
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
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="country">País</label>
              <input
                id="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="domain">WebSite</label>
              <input
                id="domain"
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
              />
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
