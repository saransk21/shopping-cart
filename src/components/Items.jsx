import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/reducer/cart-slice';

const Items = ({ id, name, productImage, price, totalPrice, totalQuantity, finalPrice }) => {
  const dispatch = useDispatch();
  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20 }} >
      <img src={productImage} style={{ height: 250, width: 250 }} />
      <div className="cartItem" style={{ width: 405.13 }} >
        <h2> {name}</h2>
        <p>Rs.{price} </p>

        <article>Total Rs.{totalPrice}</article>
        <br></br>
        <div style={{display:"flex",height:20,alignItems:"center"}}>
          <button onClick={decrementCartItems} className="cart-actions">
            -
          </button>
          <p style={{margin:10}}>{totalQuantity}</p>
          <button onClick={incrementCartItem} className="cart-actions">
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Items