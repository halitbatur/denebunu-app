import React from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import Review from "../components/Review";
import { Container, Row, Col } from "react-bootstrap";
import products from "../static/products";

export default function Home() {
  const [currentProducts, setCurrentProducts] = React.useState(products);
  const [checkedProducts, setCheckedProducts] = React.useState({
    products: [],
  });
  const [categorizedProducts, setCategorizedProducts] = React.useState([]);
  console.log(categorizedProducts);
  const moveProducts = () => {
    setCategorizedProducts(checkedProducts.products);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Products
            products={currentProducts}
            setCheckedProducts={setCheckedProducts}
          />
          <Review />
        </Col>
        <Col>
          <Category
            moveProducts={moveProducts}
            products={categorizedProducts}
          />
        </Col>
      </Row>
    </Container>
  );
}
