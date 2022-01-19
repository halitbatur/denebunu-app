import React from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import Review from "../components/Review";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Products />
          <Review />
        </Col>
        <Col>
          <Category />
        </Col>
      </Row>
    </Container>
  );
}
