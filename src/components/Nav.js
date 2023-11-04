import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import './nav.css'


export default function Nav() {

    const {cartItems} = useContext(ShopContext)

    const itemCount = cartItems?.reduce((prev , current)=> {
        return prev + current.count
    },0)

    return (
        <div className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
                <Link to='/' className='navbar-brand'>Shayan Shop</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className='nav-link'>Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cart' className='nav-link'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            {itemCount > 0 && <span className='cart-items-count'>{itemCount}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
