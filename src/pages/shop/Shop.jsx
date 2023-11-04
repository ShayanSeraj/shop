import React from "react";
import { PRODUCTS } from "../../data/Products";
import  Product  from "./Product";


export default function Shop() {
  return (
    <React.Fragment>
        <h1>Shop</h1>
        <div className="row">
            {PRODUCTS.map(productData =>(
                <Product key={productData.id} data={productData} />
            ))}
        </div>
    </React.Fragment>
  )
}
