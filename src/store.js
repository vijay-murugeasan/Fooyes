import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice';
import userReducer from './services/userSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    },
});

export default store;
