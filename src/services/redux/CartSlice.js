import { createSlice } from "@reduxjs/toolkit";

const items =
    window.sessionStorage.getItem("cartList") !== null
        ? JSON.parse(window.sessionStorage.getItem("cartList"))
        : [];


// adding this function to prevent repeat code 
const setCartListFunc = (items) => {
    window.sessionStorage.setItem("cartList", JSON.stringify(items));
    // localStorage.setItem("cartTotal", JSON.stringify(totalAmount));
    // localStorage.setItem("cartQuantity", JSON.stringify(totalQuantity));
};
const initialState = { cart: items, }


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
            setCartListFunc(state.cart.map((item) => item))
        },
        deleteItem(state, action) {
            // payload = pizzaId
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            setCartListFunc(state.cart.map((item) => item))
        },
        increaseItemQuantity(state, action) {
            // payload = pizzaId

            const item = state.cart.find((item) => item.id === action.payload);
            setCartListFunc(state.cart.map((item) => item))
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            // payload = pizzaId
            const item = state.cart.find((item) => item.id === action.payload);
            setCartListFunc(state.cart.map((item) => item))
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
        },
        clearCart(state) {
            state.cart = [];
            setCartListFunc(state.cart.map((item) => item))
        },

    }
})

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
