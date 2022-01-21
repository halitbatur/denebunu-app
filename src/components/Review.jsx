import React from "react";
import { FiSave } from "react-icons/fi";
import sanitizeCategory from "../utils/sanitizeCategory";

export default function Review({ currentProducts, categorizedProducts }) {
  return (
    <div
      style={{
        border: "1px solid #234292",
        padding: "20px",
        borderRadius: "1%",
        marginTop: "20px",
      }}
    >
      <h5 style={{ color: "#234292" }}>
        <FiSave /> Reviews
      </h5>
      <div>
        <p>Available Products: {currentProducts.length}</p>
        <p>Categories: {Object.keys(categorizedProducts).length}</p>
      </div>
      <div style={{ marginTop: "5px" }}>
        {Object.keys(categorizedProducts).map((category) => {
          return (
            <p>
              {sanitizeCategory(category)}:{" "}
              {categorizedProducts[category].length} products
            </p>
          );
        })}
      </div>
    </div>
  );
}
