import React from 'react';

import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

export default function Results() {

  return (
    <Container>
      <Row>
        <Col >
          <Card bg='secondary'>
            <Card.Header>Search Results</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odiorrrrrrrr<Button variant="primary">Nominate</Button></ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in<Button variant="primary">Nominate</Button></ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros<Button variant="primary">Nominate</Button></ListGroup.Item>
            </ListGroup>
          </Card>
          
        </Col>
        <Col >
          <Card bg='secondary'>
          <Card.Header>Nominations</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio<Button variant="primary">Nominate</Button></ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in<Button variant="primary">Nominate</Button></ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros<Button variant="primary">Nominate</Button></ListGroup.Item>
          </ListGroup>
          </Card>
          </Col>
      </Row>
    </Container >
  )
}