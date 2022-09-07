import React,{useReducer} from 'react'
import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action) => {
    if(action.type === 'ADD_ITEM'){
        // Updating a state with an immutable array via concat instead of push. Because pushing to the state array will simply modify the existing state.items and we wouldn't want to modify the previous existing state.
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;
        
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        return {items:updatedItems,totalAmount:updatedTotalAmount}
    }
    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else{
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {items:updatedItems,totalAmount:updatedTotalAmount}
    }
    return defaultCartState
};

// To manage cart context data and provide cart context to other components all in one component.
export default function CartProvider(props) {
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type:'ADD_ITEM',item:item})
    };
    const removeItemToCartHandler = id => {
        dispatchCartAction({type:'REMOVE_ITEM',id:id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler
    };
  
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
