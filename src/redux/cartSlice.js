import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: [],
};

try {
  const savedCart = localStorage.getItem("savecart");
  if (savedCart) {
    const parsed = JSON.parse(savedCart);
    initialState.cartItems = parsed.cartItems || [];
  }
} catch (e) {
  console.log("Storage blocked");
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action)=>{
            const item = action.payload;
            const existingItem = state.cartItems.find((i)=>i.id === item.id);
            if(existingItem){
                existingItem.quantity +=1;
            }else{
                state.cartItems.push({...item, quantity:1})
            }
            localStorage.setItem("savecart", JSON.stringify({cartItems:state.cartItems}));
        },
        removeFromCart:(state, action)=>{
            state.cartItems = state.cartItems.filter((i)=>i.id != action.payload);
            localStorage.setItem("savecart", JSON.stringify({cartItems:state.cartItems}));
        },
        increaseQty:(state, action)=>{
            const item = state.cartItems.find((i)=>i.id === action.payload);
            if(item)item.quantity+=1;
            localStorage.setItem("savecart", JSON.stringify({cartItems:state.cartItems}))
        },
        decreaseQty:(state, action)=>{
            const item = state.cartItems.find((i)=>i.id === action.payload);
            if(item && item.quantity>1)item.quantity-=1;
            localStorage.setItem("savecart", JSON.stringify({cartItems:state.cartItems}))
        },
    }
 });
 export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;
 export default cartSlice.reducer