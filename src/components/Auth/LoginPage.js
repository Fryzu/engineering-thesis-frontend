import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default class LoginPage extends Component {
  render() {
    const { onLogin } = this.props;

    return (
      <Container className="col-md-4 mx-auto mt-5">
        <h2>Hello! :)</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          luctus libero a orci lobortis, nec ultrices sapien tincidunt. Proin
          eget finibus dolor. Sed dictum dapibus tellus, in auctor dui.
        </p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              This will be your name in the system.
            </Form.Text>
          </Form.Group>
          <Button onClick={onLogin} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}