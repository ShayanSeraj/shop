import { useEffect, useState } from "react"

export const useCart = () => {

    const [cartItems, setCartItems] = useState()

    useEffect(()=>{
        const data = localStorage.getItem('shayanshop_cart')
        setCartItems(!!JSON.parse(data) ? JSON.parse(data) : [])
    },[])

    useEffect(()=>{
        if(cartItems !== undefined)
        localStorage.setItem('shayanshop_cart' , JSON.stringify(cartItems))
    },[cartItems])

    const addToCart = (itemId) => {
        if (!cartItems?.find((item) => item.id === itemId)) {
            setCartItems([...cartItems, { id: itemId, count: 1 }])
        } else {
            setCartItems(cartItems.map((item) => {
                if (item.id === itemId) {
                    return { ...item, count: item.count + 1 }
                } else {
                    return item
                }
            }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, count: item.count === 0 ? 0 : item.count - 1 }
            } else {
                return item
            }
        }))
        // console.log(cartItems)
    }

    const resetCart = () => {
        setCartItems()
        localStorage.removeItem('shayanshop_cart')
        localStorage.clear()
    }

    return { cartItems, addToCart, removeFromCart, resetCart }
}