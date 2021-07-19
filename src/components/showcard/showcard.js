import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./showcard.css";

const Displaycard = () => {
  return (
    <div>
      <Container fluid className="showcard">
        <div>
          <h1 className="bonus text-center">40% off in sales </h1>
        </div>
        <Row className="">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "30rem", "object-fit": "cover" }}
                src="/image/jewelleryshop.jpg"
              />
              <Card.Body>
                <Card.Title style={{ height: "20px" }}>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Img
                    className="imgstyle"
                    variant="top"
                    src="/image/hoodie.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ height: "20px" }}>
                      Card Title
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img
                    className="imgstyle"
                    variant="top"
                    src="/image/hoodie.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ height: "20px" }}>
                      Card Title
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-5 mb-2">
              <Col md={6}>
                <Card>
                  <Card.Img
                    className="imgstyle"
                    variant="top"
                    src="/image/hoodie.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ height: "20px" }}>
                      Card Title
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Img
                    className="imgstyle"
                    variant="top"
                    src="/image/hoodie.jpg"
                  />
                  <Card.Body>
                    <Card.Title style={{ height: "20px" }}>
                      Card Title
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Displaycard;
