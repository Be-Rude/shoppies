import React from "react"

import "./component.css"
import { Container, Row } from "react-bootstrap";

export default function Title() {

  return (
    <Container>
    <Row>
        <img className="logo" src={require("../img/LogoMakr_9b61vY.png")} alt=""/>
   
    <h2 id="title">
          Welcome to the Shoppie Award Nominations!
    </h2>
      </Row>
    </Container>
   
  )
  
}