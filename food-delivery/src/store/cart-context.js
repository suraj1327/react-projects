import React from 'react'

// App wide state management. Put it in store instead of App.js
const CartContext = React.createContext({
    items:[], // One entry per item in the menu. Sample: {itemName:<string>,amount:<int>}
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;

