import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './services/redux/CartSlice';
import userReducer from './services/redux/userSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    },
});

export default store;
