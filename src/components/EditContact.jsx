import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userInfo.name,
      phone: props.userInfo.phone,
      location: props.userInfo.location,
      id: props.userInfo.id,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUser(this.state.id, this.state);
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="location"
              placeholder="Enter location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Tel..."
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditContact