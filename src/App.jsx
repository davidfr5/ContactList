import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./views/Contacts";
import AddContact from "./views/AddContact";
import EditContact from "./views/EditContact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default App;
