import React from 'react'
import Product from '../components/Product'
import { useSelector } from 'react-redux'
import Items from '../components/Items';
import { Link } from 'react-router-dom';

 const CartItems=()=> {
    const cartItems=useSelector((state)=>state.cart.itemsList);
    const check = useSelector((state)=>state.cart.totalQuantity);
    console.log(check)
console.log(cartItems)
  return (
    <div className='cart-container'>
         <h2 style={{textAlign:"center",margin:"50px"}}>Your Cart</h2>
     
      
      <ul>
        { 
            cartItems.length===0?<h1 style={{textAlign:"center"}}>Your Cart is Empty</h1>:
            cartItems.map((item)=>(
                <Items key ={item.id} id={item.id} name={item.name} price={item.price} productImage={item.productImage} totalPrice={item.totalPrice} totalQuantity={item.totalQuantity} />
            ))
        }
      </ul>
      <div style={{display:"flex",justifyContent:"center"}}>
      <Link to="/"  style={{textDecoration:"none",color:"black",textAlign:"center"}}><h2 style={{borderStyle: "solid",borderRadius:20,width:300}}>Continue Shopping</h2></Link>
      </div>

    </div>
  )
}

export default CartItems
