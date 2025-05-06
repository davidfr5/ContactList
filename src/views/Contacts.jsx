import React from "react";
import { useContact } from "../context/ContactContext";
import { Link } from "react-router-dom";

const Contacts = () => {
  const { contacts, loading, deleteContact } = useContact();

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
              <div className="d-flex gap-2">
                <Link to={`/edit/${contact.id}`} className="btn btn-warning btn-sm">Editar</Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    if (window.confirm("¿Estás seguro de eliminar este contacto?")) {
                      deleteContact(contact.id);
                    }
                  }}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contacts;
