import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './navbar.css'
import { useSelector } from 'react-redux';
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    const quantity = useSelector((state) => state.cart.itemsList)
    return (
        <div className='navContainer'>
            <div className='title'>
                <h2>My Store</h2>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/cart">
                         <FaShoppingCart style={{ height: "30px", width: "40px", margin: "20px", color: "white" }} />
                 </Link>
                <b style={{ color: 'white', paddingRight: "10px" }}>
                    ({quantity.length})
                </b>
            </div>

        </div>
    )
}

export default Navbar
