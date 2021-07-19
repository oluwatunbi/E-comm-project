import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <Container fluid>
      <Row className="social-container">
        <div className="social-media">
          <img
            className="social-img"
            src="image/instagram.png"
            alt="instagram"
            style={{ width: "40px", height: "40px" }}
          />

          <img
            className="social-img"
            src="image/twitter.png"
            alt="Twitter"
            style={{ width: "40px", height: "40px" }}
          />

          <img
            className="social-img"
            src="image/facebook.png"
            alt="facebook"
            style={{ width: "40px", height: "40px" }}
          />

          <img
            className="social-img"
            src="image/snapchat.png"
            alt="snapchat"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </Row>
      <Row className="footer text-center">
        <Col md={4}>
          <h3 className="font-weight-bold mt-5">Help</h3>
          <ul>
            <li href="#"> How To buy</li>
            <li href="#"> Complains</li>
            <li href="#"> Report Merchants</li>
          </ul>
        </Col>
        <Col md={4}>
          <h3 className=" mt-5 font-weight-bold">Information </h3>
          <ul>
            <li href="#">Payment Method</li>
            <li href="#">Deliveries</li>
            <li href="#">Track orders</li>
            <li href="#">Return Orders</li>
          </ul>
        </Col>
        <Col md={4}>
          <h3 className=" mt-5 font-weight-bold">International</h3>
          <ul>
            <li href="#"> Algeria</li>
            <li href="#">Cameroon</li>
            <li href="#"> Ivory coast</li>
            <li href="#"> Egypt</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
