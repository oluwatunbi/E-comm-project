import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./transaction.css";

const Transaction = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4} xs={6}>
          <img
            className="logo-img "
            src="image/master.png"
            alt="master card"
            style={{
              width: "210px",
              height: "180px",
            }}
          />
          <h3 className="text-center">Master Card</h3>
        </Col>
        <Col md={4} xs={6}>
          <img
            className="logo-img"
            src="image/visa.png"
            alt="visa card"
            style={{ width: "200px", height: "200px" }}
          />
        </Col>
        <Col md={4} xs={12}>
          <img
            className="logo-img"
            src="image/paypal.png"
            alt="visa card"
            style={{ width: "200px", height: "200px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={6}>
          <img
            className="logo-img"
            src="image/bitcoin.png"
            alt="visa card"
            style={{ width: "150px", height: "150px" }}
          />
        </Col>
        <Col md={6} xs={6}>
          <img
            className="logo-img"
            src="image/american-express.png"
            alt="visa"
            style={{ width: "150px", height: "150px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Transaction;
