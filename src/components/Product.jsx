import React from 'react'
import './Product.css'
import { useSelector,useDispatch } from 'react-redux'
import { cartActions } from '../redux/reducer/cart-slice';
function Product({ id, productName, price, productImage,brand }) {

  const dispatch = useDispatch();
  const name=productName;
  const addToCart =()=>{
    dispatch(cartActions.addToCart({name,id,price,productImage,brand}))
  }
  const cartItems=useSelector((state)=>state.cart.itemsList)
  const existingItem=cartItems.find((item)=>item.id===id);
  return (
    <div>
        <div className='product'>
            <img src={productImage} style={{height:250,width:250}} alt='img'/>
            <div className='description'>
                <p>
                  <b>{name}</b>
                </p>
                <p>Rs.{price}</p>
                
                  {existingItem?
                    <button onClick={()=>dispatch(cartActions.removeItem(id))}>Remove from Cart</button>:
                    <button className="addToCartBttn"  onClick={addToCart}>
                         Add to Cart
                     </button>
                  }
                  


                
                
            </div>

        </div>
    </div>
  )
}

export default Product
