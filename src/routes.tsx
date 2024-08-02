import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import PartnerList from "./pages/PartnersList";
import Partner from "./pages/Partner";
import CreatePartner from "./pages/CreatePartner";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/partners" Component={PartnerList} />

        <Route path="/partners/:id" Component={Partner} />
        <Route path="/register" Component={CreatePartner} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
