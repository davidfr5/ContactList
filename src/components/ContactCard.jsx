import React from "react";
import { Card, Button } from "react-bootstrap";

const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Text>
                    <strong> Teléfono:</strong> {contact.phone}<br />
                    <strong> Email:</strong> {contact.email}<br />
                    <strong> Dirección:</strong> {contact.address}
                </Card.Text>  
                <div className="d-flex justify-content-end gap-2">
                    <Button variant="primary" size="sm" onClick={() => onEdit(contact)}>
                        Editar
                    </Button>
                    <Button variant="danger" size="sm" onClick={() => onDelete(contact.id)}>
                        Eliminar
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ContactCard;
