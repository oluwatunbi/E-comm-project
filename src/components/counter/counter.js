import React from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";
import { ImHappy } from "react-icons/im";
import { GrDeliver } from "react-icons/gr";
import { ImAirplane } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import "./counter.css";

const Counter = () => {
  return (
    <div>
      <Container fluid className="counter-board">
        <Row>
          <Col md={3}>
            <div>
              <IconContext.Provider value={{ size: "2em" }}>
                <div className="iconcenter mt-5">
                  <ImHappy />
                </div>
              </IconContext.Provider>
              <p className="text-center font-weight-bold ">
                Customer's Satisfaction
              </p>
              <span>
                <p className="counterstyle text-center">
                  <CountUp end={100} /> %
                </p>
              </span>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <IconContext.Provider value={{ size: "2em" }}>
                <div className="iconcenter mt-5">
                  <GrDeliver />
                </div>
              </IconContext.Provider>
              <p className="text-center font-weight-bold ">Delivery</p>
              <span>
                <p className="counterstyle text-center">
                  <CountUp end={7345} /> daily
                </p>
              </span>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <IconContext.Provider value={{ size: "2em" }}>
                <div className="iconcenter mt-5">
                  <ImAirplane />
                </div>
              </IconContext.Provider>
              <p className="text-center font-weight-bold ">Countries</p>
              <span>
                <p className="counterstyle text-center">
                  <CountUp end={112} />
                </p>
              </span>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <IconContext.Provider value={{ size: "2em" }}>
                <div className="iconcenter mt-5">
                  <RiTeamFill />
                </div>
              </IconContext.Provider>
              <p className="text-center font-weight-bold ">Our Team</p>
              <span>
                <p className="counterstyle text-center">
                  <CountUp start={0} end={150} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </p>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
