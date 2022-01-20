import React from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import Review from "../components/Review";
import { Container, Row, Col, Button } from "react-bootstrap";
import products from "../static/products";

export default function Home() {
  const [currentProducts, setCurrentProducts] = React.useState(products);
  const categoryNumber = React.useRef(1);
  const [checkedProducts, setCheckedProducts] = React.useState({});
  const [categorizedProducts, setCategorizedProducts] = React.useState({});

  const handleSelectingProduct = (value, name, location) => {
    if (value) {
      setCheckedProducts((prevState) => {
        if (prevState[location]) {
          return { ...prevState, [location]: [...prevState[location], name] };
        }
        return { ...prevState, [location]: [name] };
      });
    } else {
      setCheckedProducts((prevState) => {
        const filtredLocation = prevState[location].filter(
          (product) => product !== name
        );
        return { ...prevState, [location]: [...filtredLocation] };
      });
    }
  };

  const moveProducts = (categoryName, isRemove) => {
    if (!isRemove) {
      setCurrentProducts((prevState) => {
        const filtredCurrentProducts = prevState.filter(
          (product) => !checkedProducts.products.includes(product)
        );
        return filtredCurrentProducts;
      });
      setCategorizedProducts({
        ...categorizedProducts,
        [categoryName]: [
          ...categorizedProducts[categoryName],
          ...checkedProducts.products,
        ],
      });
      setCheckedProducts({ ...checkedProducts, products: [] });
      return;
    }
    setCurrentProducts([...currentProducts, ...checkedProducts[categoryName]]);
    setCategorizedProducts({
      ...categorizedProducts,
      [categoryName]: [
        ...categorizedProducts[categoryName].filter((product) => {
          return !checkedProducts[categoryName].includes(product);
        }),
      ],
    });
    setCheckedProducts({ ...checkedProducts, [categoryName]: [] });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Products
            products={currentProducts}
            setCheckedProducts={setCheckedProducts}
            handleSelectingProduct={handleSelectingProduct}
          />
          <Review />
        </Col>
        <Col>
          {Object.keys(categorizedProducts).map((categoryName) => (
            <Category
              key={categoryName}
              categoryName={categoryName}
              moveProducts={moveProducts}
              checkedProducts={checkedProducts}
              setCheckedProducts={setCheckedProducts}
              products={categorizedProducts[categoryName]}
              handleSelectingProduct={handleSelectingProduct}
            />
          ))}
          <Button
            onClick={() => {
              setCategorizedProducts(
                (prevState) => {
                  const newCategory = "category" + categoryNumber.current;

                  return { ...prevState, [newCategory]: [] };
                },
                () => {
                  categoryNumber.current += 1;
                }
              );
            }}
          >
            Add category
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
