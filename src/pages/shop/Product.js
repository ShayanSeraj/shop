import { useContext, useState } from "react"
import { ShopContext } from "../../context/ShopContext"

const Product = (props) => {

    const { id, productName, productImage, price } = props.data

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)

    const isInCart = cartItems?.some((item) => item.id === id)


    return (
        <div className="col-6 col-sm-3 my-2">
            <div className="card" style={{ height: '22rem' }}>
                <img src={productImage} className="card-img-top" style={{ height: '11rem' }} alt="image..." />
                <div className="card-body">
                    <h5 className="cart-title">{productName}</h5>
                    <p className="card-text">Price : {price} €</p>
                    <button onClick={() => addToCart(id)} className="btn btn-info btn-sm">+</button>
                    <span className="mx-1">
                        {cartItems?.filter((row) => row.id === id)[0]?.count}
                    </span>
                    {isInCart && <button onClick={() => removeFromCart(id)}
                        className="btn btn-info btn-sm">
                        -
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Product