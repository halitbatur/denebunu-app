import React from "react";
import { FormCheck } from "react-bootstrap";
import { BsBox } from "react-icons/bs";

export default function Products({ products, handleSelectingProduct }) {
  return (
    <div
      style={{
        border: "1px solid #234292",
        padding: "20px",
        borderRadius: "1%",
        marginTop: "20px",
        minHeight: "60%",
      }}
    >
      <h4>
        <BsBox /> Available products
      </h4>
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
