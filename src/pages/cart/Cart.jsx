import React, { useContext } from "react"
import { PRODUCTS } from "../../data/Products"
import { ShopContext } from "../../context/ShopContext"
import Product from "../shop/Product"


export default function Cart() {

  const { cartItems , resetCart } = useContext(ShopContext)

  return (
    <React.Fragment>
      <h1>Your cart items</h1>
      <div className="row">
        {PRODUCTS.map((p) => {
          if (cartItems?.some((i) => i.id === p.id && i.count > 0)) {
            return <Product data={p} key={p.id} />
          }
        })}
      </div>
      <button className="btn btn-warning m-3" onClick={resetCart}>
        Reset
      </button>
    </React.Fragment>
  )
}
