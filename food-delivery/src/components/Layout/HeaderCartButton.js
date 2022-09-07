import React,{useContext, useEffect, useState} from 'react'
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

export default function HeaderCartButton(props) {
  // Since useContext is a hook, the component will be re-evaluated everytime the context managed by the provider changes value.
  const ctx = useContext(CartContext);
  const [buttonIsHighlighted,setButtonIsHighlighted] = useState(false);
  // Reduces array to a single value.
  const numberOfCartItems = ctx.items.reduce((currNumber,item) => {
    return currNumber + item.amount
  },0);
  
  const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump: ''}`
  
  const {items} = ctx;

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
        setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>
          {numberOfCartItems}
        </span>
    </button>
  )
}
