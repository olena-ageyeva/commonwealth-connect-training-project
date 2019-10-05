import React from "react";
import { Row, Col, Collapse } from "react-bootstrap";

export default function Home() {
  return (
    <Row style={{ height: "100%" }}>
      <Col>Filter</Col>

      <Col>Search Result</Col>

      <Col>
        Flyout
        <br />
        Map
      </Col>
    </Row>
  );
}
