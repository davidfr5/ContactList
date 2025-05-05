import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./views/Contacts";
import AddContact from "./views/AddContact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/add" element={<AddContact />} />
    </Routes>
  );
};

export default App;
