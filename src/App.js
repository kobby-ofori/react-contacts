import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Kwabena",
          phone: "0501983645",
          location: "Nikanika",
          id:"123",
        },
        {
          name: "Kofi",
          phone: "0244666777",
          location: "Lakeside",
          id:"246",
        },
      ],
    };
  }
  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };
  editUser = (id, updatedUser) => {
    this.setState({
      users:this.state.users.map(user=>user.id===id ? updatedUser : user)
    });
  };
  deleteUser = (id) => {
    let activeUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: activeUsers,
    });
  };
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <h3>Enter details</h3>
            <Col md="4">
              <ContactsForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <h3>Contacts</h3>
              <Contacts
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
