import React from "react";
import { FormCheck } from "react-bootstrap";

export default function Products({ products, setCheckedProducts }) {
  const handleSelectingProduct = (value, name, location) => {
    if (value) {
      setCheckedProducts((prevState) => {
        return { ...prevState, [location]: [...prevState[location], name] };
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
  return (
    <div>
      {products &&
        products.map((product) => (
          <FormCheck
            type="checkbox"
            label={product}
            key={product}
            onClick={(e) =>
              handleSelectingProduct(e.target.checked, product, "products")
            }
          />
        ))}
    </div>
  );
}
