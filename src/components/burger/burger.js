import React from "react";
import BurgerIngredient from "./burger-ingredient/burger-ingredient"
const Burger = props =>{
   let transformedIngredients = Object.keys(props.ingredients)
   .map((isKey)=>{return(
     [...Array(props.ingredients[isKey])].map((_,i)=>{return (
       <BurgerIngredient key={isKey + i} type={isKey}/>
     )})
   )})
   .reduce((arr,el)=>{
     return arr.concat(el);
   })
   if(transformedIngredients.length===0){
     transformedIngredients = <p>please start adding ingredients</p>
   }
  return (
    <div className="Burger">
      <BurgerIngredient type="BreadTop"/>
      {transformedIngredients}
      <BurgerIngredient type="BreadBottom"/>
    </div>
  )
}
export default Burger;
