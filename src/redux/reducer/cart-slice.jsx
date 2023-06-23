import {createSlice} from '@reduxjs/toolkit'
import { data } from '../../data/data';

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false,
        nameBrand:""
       
    },
    reducers:{
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem=state.itemsList.find((item)=>item.id===newItem.id);
            if(existingItem){
                existingItem.totalQuantity++;
                existingItem.totalPrice+=newItem.price;
                
            }
            else{
                state.itemsList.push({
                    id:newItem.id,
                    price:newItem.price,
                    totalQuantity:1,
                    totalPrice:newItem.price,
                    name:newItem.name,
                    productImage:newItem.productImage,
                    brand:newItem.brand
                    

                });
                state.totalQuantity++;
                
            }
            
        },
        removeFromCart(state,action){
            const id = action.payload;

            const existingItem = state.itemsList.find((item) => item.id === id);
            if (existingItem.totalQuantity === 1) {
              state.itemsList = state.itemsList.filter((item) => item.id !== id);
              state.totalQuantity--;
            } else {
              existingItem.totalQuantity--;
              existingItem.totalPrice -= existingItem.price;
            }

        },
        removeItem(state,action){
            const id = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === id);
            const index = state.itemsList.indexOf(existingItem);
            console.log("index",index);
            state.itemsList.splice(index,1)
        },
        
        setNameBrand(state,action){
            const value=action.payload;
            state.nameBrand=value;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;
