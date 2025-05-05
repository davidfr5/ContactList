import React, { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();
const API_BASE = "https://playground.4geeks.com/contact";
const AGENDA_SLUG = "lista_David"; 

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Crear la agenda si no existe
  const createAgenda = async () => {
    try {
      await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}`, {
        method: "POST",
      });
    } catch (err) {
      console.error("Error creating agenda:", err);
    }
  };

  // Obtener contactos
  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`);
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Agregar contacto
const addContact = async (contact) => {
  try {
    const contactWithAgenda = {
      ...contact,
      agenda_slug: AGENDA_SLUG,
    };

    const res = await fetch(`${API_BASE}/agendas/${AGENDA_SLUG}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactWithAgenda),
    });

    if (res.ok) {
      console.log("Contacto guardado correctamente.");
      fetchContacts();
    } else {
      const errorData = await res.json();
      console.error("Error en la respuesta:", errorData);
    }
  } catch (err) {
    console.error("Error adding contact:", err);
  }
};


  // Eliminar contacto
  const deleteContact = async (id) => {
    try {
      const res = await fetch(
        `${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`,
        { method: "DELETE" }
      );
      if (res.ok) fetchContacts();
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  // Actualizar contacto
  const updateContact = async (id, updatedContact) => {
    try {
      const res = await fetch(
        `${API_BASE}/agendas/${AGENDA_SLUG}/contacts/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedContact),
        }
      );
      if (res.ok) fetchContacts();
    } catch (err) {
      console.error("Error updating contact:", err);
    }
  };

  useEffect(() => {
    createAgenda().then(fetchContacts);
  }, []);

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, deleteContact, updateContact, loading }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
