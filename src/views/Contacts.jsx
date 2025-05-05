import React from "react";
import { useContact } from "../context/ContactContext";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { contacts, loading } = useContact();

  if (loading) return <p className="m-4">Cargando contactos...</p>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Lista de Contactos</h2>
        <Link to="/add" className="btn btn-success">Agregar Contacto</Link>
      </div>

      {contacts.length === 0 ? (
        <p>No hay contactos registrados.</p>
      ) : (
        <ul className="list-group">
          {contacts.map((contact) => (
            <li className="list-group-item" key={contact.id}>
              <h5>{contact.name}</h5> 
              <p>Email: {contact.email}</p>
              <p>Teléfono: {contact.phone}</p>
              <p>Dirección: {contact.address}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contacts;
