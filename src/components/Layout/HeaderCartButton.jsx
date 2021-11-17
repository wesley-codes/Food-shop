import React,{useContext,  useEffect, useState} from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
const [btnBump, setBtnBump] = useState(false)

  const cartCtx = useContext(CartContext)
  console.log(cartCtx.items);
  const {items} = cartCtx
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  console.log(numberOfCartItems );

const btnclasses = `${classes.button } ${btnBump ? classes.bump: ""}`

useEffect(() => {
  if(items.length === 0){
    return ;
  }
 setBtnBump(true)

 const timer = setTimeout(()=>{
   setBtnBump(false)
 },300)

 return ()=>{
   clearTimeout(timer)
 }
  
}, [items])
 

  return (
    <button className={btnclasses} onClick={props.onclick} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
