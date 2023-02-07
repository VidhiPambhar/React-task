import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailsCard } from "../components";
import { MovieList } from "../modules";

function Router() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<DetailsCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
