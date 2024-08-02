/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEvent, useEffect, useState } from "react";
import "../styles/pages/partner.css";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

interface Partner {
  name: string;
  city: string;
  country: string;
  phone: string;
  domain: string;
}

interface PartnerParams {
  id: string;
}

export default function GetPartner() {
  const params = useParams<PartnerParams | any>();

  const [partner, setPartner] = useState<Partner>();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/partners/${params.id}`).then((response) => {
      setPartner(response.data);
      setName(response.data.name);
      setCity(response.data.city);
      setCountry(response.data.country);
      setPhone(response.data.phone);
      setDomain(response.data.domain);
    });
  }, [params.id]);

  if (!partner) {
    return <p>Carregando...</p>;
  }

  async function handleUpdate(event: FormEvent) {
    event.preventDefault();

    const data = {
      name: name,
      domain: domain,
      phone: phone,
      city: city,
      country: country,
    };

    await api.patch(`/partners/${params.id}`, JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });

    alert("Cadastro atualizado com sucesso!");
    navigate("/partners");
  }

  return (
    <div id="page-infos-partner">
      <Sidebar></Sidebar>

      <main>
        <form className="infos-partner-form">
          <fieldset>
            <legend>Informações do Parceiro</legend>
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                defaultValue={partner.name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                defaultValue={partner.city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="country">País</label>
              <input
                id="country"
                defaultValue={partner.country}
                onChange={(event) => setCountry(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                defaultValue={partner.phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="domain">WebSite</label>
              <input
                id="domain"
                defaultValue={partner.domain}
                onChange={(event) => setDomain(event.target.value)}
              />
            </div>
          </fieldset>

          <button
            className="update-button"
            type="submit"
            onClick={handleUpdate}
          >
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
