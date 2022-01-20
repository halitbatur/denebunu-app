import React from "react";
import { FormCheck, Button } from "react-bootstrap";

export default function Category({
  products,
  moveProducts,
  categoryName,
  checkedProducts,
  handleSelectingProduct,
}) {
  const capitilizedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  return (
    <div>
      <h2>{capitilizedCategory}</h2>
      {products &&
        products.map((product) => {
          return (
            <FormCheck
              type="checkbox"
              label={product}
              key={product}
              onClick={(e) => {
                handleSelectingProduct(e.target.checked, product, categoryName);
              }}
            />
          );
        })}
      <Button
        disabled={
          checkedProducts.products
            ? checkedProducts.products.length === 0
            : true
        }
        onClick={() => moveProducts(categoryName)}
      >
        Move them here
      </Button>
      <Button
        disabled={
          checkedProducts[categoryName]
            ? checkedProducts[categoryName].length === 0
            : true
        }
        onClick={() => moveProducts(categoryName, true)}
      >
        Remove them from here
      </Button>
    </div>
  );
}
