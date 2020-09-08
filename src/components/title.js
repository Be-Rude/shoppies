import React from "react"

import "./component.css"
import { Container, Row } from "react-bootstrap";

export default function Title() {

  return (
    <Container className="title">
    <Row>
        <img className="logo" src={require("../img/LogoMakr_9b61vY.png")} alt=""/>
   
    <h2>
          Welcome to the Shoppie Award Nominations!
    </h2>
      </Row>
    </Container>
   
  )
  
}