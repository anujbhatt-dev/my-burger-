import React from "react";
import BurgerIngredient from "./burger-ingredient/burger-ingredient"
const Burger = props =>{
   const transformedIngredients = Object.keys(props.ingredients)
   .map((isKey)=>{return(
     [...Array(props.ingredients[isKey])].map((_,i)=>{return (
       <BurgerIngredient key={isKey + i} type={isKey}/>
     )})
   )})
   console.log(transformedIngredients);
  return (
    <div className="Burger">
      <BurgerIngredient type="BreadTop"/>
      {transformedIngredients}
      <BurgerIngredient type="BreadBottom"/>
    </div>
  )
}
export default Burger;
