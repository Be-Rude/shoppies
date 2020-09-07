import React from 'react';

import { Form, Button, Col, Row } from 'react-bootstrap';

export default function Search() {
  return (


    <Form >
      <Form.Group >
        
        <Row>
          
        <Form.Control size="lg" type="text" placeholder="Search IMDB" />
      <Col>
          <Button variant="primary" type="submit">
              Submit
          </Button>
          </Col>
        </Row>
      </Form.Group>
      <Form.Label>Search</Form.Label>
    </Form >
    
    )
  }