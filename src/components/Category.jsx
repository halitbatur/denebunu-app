import React from "react";
import { FormCheck, Button } from "react-bootstrap";

export default function Category({
  products,
  moveProducts,
  categoryName,
  checkedProducts,
  handleSelectingProduct,
  deleteCategory,
}) {
  const capitilizedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  const noProductsToAdd = checkedProducts.products
    ? checkedProducts.products.length === 0
    : true;

  const noProductsToRemove = checkedProducts[categoryName]
    ? checkedProducts[categoryName].length === 0
    : true;

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
        disabled={noProductsToAdd}
        onClick={() => moveProducts(categoryName)}
      >
        {noProductsToAdd
          ? "Add Products"
          : "Add " + checkedProducts.products?.length + " products"}
      </Button>
      <Button
        disabled={noProductsToRemove}
        onClick={() => moveProducts(categoryName, true)}
      >
        {noProductsToRemove
          ? "Remove Products"
          : "Remove " + checkedProducts[categoryName].length + " products"}
      </Button>
      <Button onClick={() => deleteCategory()}>Delete Category</Button>
    </div>
  );
}
