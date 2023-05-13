import React from "react";
import { Container, Row } from "react-bootstrap";
import NewContact from "./NewContact";

const Users = (props) => {
  return (
    <Container>
      <Row>
        {props.usersData.map((user, index) => {
          return (
            <NewContact
              userInfo={user}
              key={index}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Users;
