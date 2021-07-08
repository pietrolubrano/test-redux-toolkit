import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/cart/cartSlice'
import inventoryReducer from '../features/inventory/inventorySlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    inventory: inventoryReducer
  },
})