import React from "react";
import { FormCheck } from "react-bootstrap";

export default function Products({ products, handleSelectingProduct }) {
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
