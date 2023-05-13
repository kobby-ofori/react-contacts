import React from "react";
import { Card, Col, Modal } from "react-bootstrap";
import EditContact from "./EditContact";
import { useState } from "react";

function NewContact(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContact
            userInfo={props.userInfo}
            editUser={props.editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="4">
        <Card
          className="custom-card"
          style={{
            width: "18rem",
            marginBottom: "10px",
            cursor: "pointer",
            boxShadow: "5px 10px 8px #888888",
          }}
        >
          <Card.Body className="card-body">
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>
                <strong>Phone</strong>: {props.userInfo.phone}
              </p>
              <p>
                <strong>Location</strong>: {props.userInfo.location}
              </p>
            </Card.Text>
            <Card.Link href="#" onClick={handleShow}>
              Edit
            </Card.Link>
            <Card.Link href="#" onClick={handleDelete}>
              Delete
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default NewContact;
