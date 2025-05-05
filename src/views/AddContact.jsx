import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContact } from "../context/ContactContext";

const AddContact = () => {
  const { addContact } = useContact();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",     
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    await addContact(formData); 
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Agregar nuevo contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            className="form-control"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default AddContact;
