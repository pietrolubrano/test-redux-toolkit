import { createSlice } from '@reduxjs/toolkit';
import {
  addProductToInventory,
  removeProductFromInventory
} from '../../features/inventory/inventorySlice';
/* import { Cart } from './Cart'; */

export const slice = createSlice({
  name: 'cart',
  initialState : [],
  reducers: {
    addproduct: (state, action) => {
      const product = {...action.payload.product};
      var alredyInTheCart = false
      for (let i = 0; i < state.length && !alredyInTheCart; i++) {
        if(state[i].id === product.id) {
          alredyInTheCart = true;
          state[i].quantity++;
        }
      }

      if(!alredyInTheCart) {
        product.quantity = 1;
        state.push(product)
      }
    },
    removeproduct: (state, action) => {
      const product = action.payload.product;
      for (let i = 0; i < state.length; i++) {
        const cart = state;
        if(cart[i].id === product.id){
          cart.splice(i,1);
        }
      }
      console.log(action.payload)
      /* state = action.payload; */
    }
  },
});

export const { addproduct, removeproduct } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
/* export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
}; */

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = state => state.cart;

export default slice.reducer;
