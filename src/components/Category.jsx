import React from "react";
import { FormCheck } from "react-bootstrap";

export default function Category({ products, moveProducts }) {
  return (
    <div>
      {products &&
        products.map((product) => {
          return <FormCheck type="checkbox" label={product} key={product} />;
        })}
      <button onClick={moveProducts}>Move them here</button>
    </div>
  );
}
