import React from "react";
import { FormCheck, Button } from "react-bootstrap";
import { FiCodesandbox } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import sanitizeCategory from "../utils/sanitizeCategory";

export default function Category({
  products,
  moveProducts,
  categoryName,
  checkedProducts,
  handleSelectingProduct,
  deleteCategory,
}) {
  const noProductsToAdd = checkedProducts.products
    ? checkedProducts.products.length === 0
    : true;

  const noProductsToRemove = checkedProducts[categoryName]
    ? checkedProducts[categoryName].length === 0
    : true;

  const buttons = [
    {
      disabled: noProductsToAdd,
      onClick: () => moveProducts(categoryName),
      content: noProductsToAdd
        ? "Add Products"
        : "Add " + checkedProducts.products?.length + " products",
    },
    {
      disabled: noProductsToRemove,
      onClick: () => moveProducts(categoryName, true),
      content: noProductsToRemove
        ? "Remove Products"
        : "Remove " + checkedProducts[categoryName].length + " products",
    },
    {
      disabled: false,
      onClick: () => deleteCategory(),
      content: " Remove Category",
      style: { marginLeft: "auto" },
    },
  ];

  return (
    <div
      style={{
        border: "1px solid #234292",
        padding: "20px",
        borderRadius: "1%",
        marginTop: "20px",
        marginBottom: "20px ",
      }}
    >
      <h5>
        <FiCodesandbox /> {sanitizeCategory(categoryName)}
      </h5>
      {products.length > 0 ? (
        <div style={{ margin: "10px" }}>
          {products.map((product) => {
            return (
              <FormCheck
                type="checkbox"
                label={product}
                key={product}
                onClick={(e) => {
                  handleSelectingProduct(
                    e.target.checked,
                    product,
                    categoryName
                  );
                }}
              />
            );
          })}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <AiOutlineHeart />
          <p>Select products to add here.</p>
        </div>
      )}
      <div
        style={{ display: "flex", justifyContent: "start", columnGap: "10px" }}
      >
        {buttons.map((button) => {
          return (
            <Button
              disabled={button.disabled}
              onClick={button.onClick}
              style={button.style}
            >
              {button.content}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
