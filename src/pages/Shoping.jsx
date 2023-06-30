import React, { useState } from 'react'
import Product from '../components/Product'
import { data } from '../data/data'
import './shoping.css'
import Navbar from '../components/Navbar'

import { useSelector,useDispatch } from 'react-redux'
import { cartActions } from '../redux/reducer/cart-slice'




function Shoping() {
  const dispatch =useDispatch();
  const cartItems=useSelector((state)=>state.cart.nameBrand)
  const brands=data.filter((item) => item.brand === cartItems)
  console.log(cartItems, "brands")
  console.log(brands, "brandslist")
  const value=brands.length===0;
  return (
    <div>
      <Navbar />
      <div className='container'>

        <div className='filter'>
          <button className='buttons' onClick={()=>dispatch(cartActions.setNameBrand("axor"))}>AXOR</button>
          <button className='buttons' onClick={()=>dispatch(cartActions.setNameBrand("smk"))}>SMK</button>
          <button className='buttons' onClick={()=>dispatch(cartActions.setNameBrand("re"))}>RE</button>
          <button className='buttons' onClick={()=>dispatch(cartActions.setNameBrand(""))}>ALL</button>
        </div>

        <div className='prodList'>
          {
           value?
            data.map((item) =>
              <Product key={item.id} id={item.id} productName={item.productName} productImage={item.productImage} price={item.price} brand={item.brand}/>
            ):brands.map((item) =>
            <Product key={item.id} id={item.id} productName={item.productName} productImage={item.productImage} price={item.price} brand={item.brand}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Shoping
