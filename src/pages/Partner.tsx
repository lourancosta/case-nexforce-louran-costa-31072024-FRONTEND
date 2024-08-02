import React, { useEffect, useState } from "react";
import "../styles/pages/partner.css";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    api.get(`/partners/${params.id}`).then((response) => {
      setPartner(response.data);
    });
  }, [params.id]);

  if (!partner) {
    return <p>Carregando...</p>;
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
              <input id="name" defaultValue={partner.name} />
            </div>

            <div className="input-block">
              <label htmlFor="city">Cidade</label>
              <input id="city" defaultValue={partner.city} />
            </div>

            <div className="input-block">
              <label htmlFor="phone">Telefone</label>
              <input id="phone" defaultValue={partner.phone} />
            </div>

            <div className="input-block">
              <label htmlFor="website">WebSite</label>
              <input id="website" defaultValue={partner.domain} />
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
