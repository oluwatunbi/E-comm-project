import React from "react";
import "./displayitems.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const Showboard = () => {
  return (
    <div className="display-container">
      <Container fluid className="container-fluid">
        <Row>
          <Col md={3} xs={6} className="displaybox">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                style={{ heigth: "21rem" }}
                src="/image/nike.jpg"
              />
              <Card.Body>
                <Card.Title className="card-title" style={{ height: "20px" }}>
                  Sneakers
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={6} className="displaybox">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/image/bags.jpg"
              />
              <Card.Body>
                <Card.Title className="card-title" style={{ height: "20px" }}>
                  Bags
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={6} className="displaybox">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/image/glasses.jpg"
              />
              <Card.Body>
                <Card.Title className="card-title" style={{ height: "20px" }}>
                  Glasses
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={6} className="displaybox">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/image/womendress.jpg"
              />
              <Card.Body>
                <Card.Title className="card-title" style={{ height: "20px" }}>
                  Women Fashion
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="display-large">
            <Card className="card" style={{ width: "26rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "27rem", "object-fit": "cover" }}
                src="/image/lingerie.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "20px" }}>Lingerie</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="display-large">
            <Card className="card" style={{ width: "26rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "27rem", "object-fit": "cover" }}
                src="/image/laptop.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "20px" }}>
                  Laptop And Accessory
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="display-large">
            <Card className="card" style={{ width: "26rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "27rem", "object-fit": "cover" }}
                src="/image/mensuit.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "20px" }}>Men Suit</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={3} xs={6} className="displaybox">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/image/camera.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "20px" }}>
                  Camera & Accessory
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={6} className="displaybox">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/image/toys.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "20px" }}>Toys</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={6} className="displaybox">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/image/cooker.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "20px" }}>Cookers</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xs={6} className="displaybox">
            <Card className="small-card">
              <Card.Img
                className="imgstyle"
                variant="top"
                src="/image/hoodie.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "20px" }}>Hoodie</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Showboard;
