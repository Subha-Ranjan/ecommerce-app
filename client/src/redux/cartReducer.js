import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //   state.push(action.payload)
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        // item.quantity +=1 //not necessary qty hs to increased by 1 only: Not the Correct way
        // suppose firstly, we are adding "hat" to the cart with 2 qty, then in the addToCart page "hat" item will be there with 2 qty.
        // if seceond time we are ading hat with 3 qty, then thses 3 has to bae added with the previous 2 hats in the addToCart page.
        // So finally in the addToCArt Page thre will be total that "hat" item with 5 hats
        //item.quantity = item.quantity + action.payload.quantity;
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      //remove the item with the particaularID from "state.products"
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
