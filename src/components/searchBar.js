import React from 'react';

import { Form, Button, Col } from 'react-bootstrap';

export default function Search() {
  return (


    <Form >
      <Form.Group controlId="search">
        <Form.Row>
        <Form.Control size="lg" type="text" placeholder="Search IMDB" />
         <Col>
          <Button variant="primary" type="submit">
              Submit
          </Button>
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Label>Search</Form.Label>
    </Form >
    
    )
  }