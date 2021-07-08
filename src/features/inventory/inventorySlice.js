import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'inventory',
  initialState: [
    {
        id: 0,
        label: 'mouse',
        price: 10,
        stock: 15,
    },
    {
        id: 1,
        label: 'keyboard',
        price: 15,
        stock: 1,
    },
    {   
        id: 2,
        label: 'headphones',
        price: 60,
        stock: 0,
    },
    {
        id: 3,
        label: 'laptop',
        price: 250,
        stock: 5,
    },
    {
        id: 4,
        label: 'cuffie',
        price: 200,
        stock: 3,
    },
    {
        id: 5,
        label: 'sedia',
        price: 40,
        stock: 7,
    },
],
  reducers: {
    addProductToInventory: (state, action) => {
      const product = action.payload.product;
      state.push(product)
      console.log("state", state.cart)
      console.log("action payload", action.payload.product)
    },
    removeProductFromInventory: (state, action) => {
      const product = action.payload.product;
      state[product.id].stock--;
    }
  },
});

export const { addProductToInventory, removeProductFromInventory } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectInventory = state => state.inventory;

export default slice.reducer;
