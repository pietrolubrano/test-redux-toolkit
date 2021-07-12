import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
/* import { Products } from "../../app/database"; */

export const getProducts = createAsyncThunk('inventory/getProducts', async () => {
  return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
})

export const slice = createSlice({
  name: "inventory",
  initialState: {
      list : [],
      status: null
  },
  reducers: {
    addProductToInventory: (state, action) => {
      const product = action.payload.product;
      state.list.push(product);
    },
    removeProductFromInventory: (state, action) => {
      const product = action.payload;
      const index = state.list.findIndex(
        item => item.id === product.id
      )
      if(index >= 0) {
        state.list[index].stock -= product.quantity;
      }
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.list.map( product => {
        return product.stock = Math.floor(Math.random() * 10);
      })
      state.status = 'success'
    },
    [getProducts.rejected]: (state, action) => {
      state.status = 'failed'
    },
  }
});

export const { addProductToInventory, removeProductFromInventory } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectInventory = (state) => state.inventory;

export default slice.reducer;
