import React,{Component} from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/burger/burger"
import BuildControls from "../../components/burger/build-controls/build-controls"
import Modal from "../../components/UI/modal/modal"
import OrderSummary from "../../components/burger/order-summary/order-summary"
const INGREDIENT_PRICE = {
  salad:0.5,
  cheese:.4,
  meat:1.3,
  bacon:0.7
}

class BurgerBuilder extends Component{
  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    purchasable:false,
    totalPrice:4,
    purchasing:false
  }

   updatePurchaseState=(ingredients)=>{
       const sum = Object.keys(ingredients)
       .map(igKey=>{
         return ingredients[igKey]
       })
       .reduce((sum,el)=>{
         return sum + el;
       },0);
       this.setState({purchasable: sum > 0})
   }

  addIngredientHandler=(type)=>{
     const oldCount= this.state.ingredients[type];
     const updatedCount = oldCount +1;
     const updatedIngredients = {
       ...this.state.ingredients
     };
     updatedIngredients[type]= updatedCount;
     const priceAddition = INGREDIENT_PRICE[type];
     const oldPrice = this.state.totalPrice;
     const newPrice = oldPrice + priceAddition;
     this.setState({
       ingredients:updatedIngredients,
       totalPrice:newPrice
     })
     this.updatePurchaseState(updatedIngredients)
  }
  removeIngredientHandler=(type)=>{
    const oldCount= this.state.ingredients[type];
    if(oldCount<=0)return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type]= updatedCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients:updatedIngredients,
      totalPrice:newPrice
    })
    this.updatePurchaseState(updatedIngredients)
  }

   purchaseHandler=()=>{
     this.setState({purchasing:true})
   }

   purchaseCancelHandler=()=>{
     this.setState({purchasing:false})
   }

   purchaseContinueHandler=()=>{
     alert("you continued");
   }

  render(){
    const disabledInfo={
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key]= (disabledInfo[key] <= 0)
    }
    console.log(disabledInfo)
    return (
      <Aux>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
         <OrderSummary
         price={this.state.totalPrice} 
         ingredients={this.state.ingredients}
         purchaseCanceled={this.purchaseCancelHandler}
         purchaseContinued={this.purchaseContinueHandler}/>
      </Modal>
       <Burger ingredients={this.state.ingredients}/>
       <BuildControls ordered={this.purchaseHandler} purchasable={this.state.purchasable} price={this.state.totalPrice} disabled={disabledInfo}  ingredientRemoved={this.removeIngredientHandler} ingredientAdded={this.addIngredientHandler}/>
     </Aux>
   )
  }
}
export default BurgerBuilder;
