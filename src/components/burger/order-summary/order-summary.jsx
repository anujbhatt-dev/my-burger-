import React from "react"
import Aux from "../../../hoc/Auxilary"
import Button from "../../UI/button/button"

class OrderSummary extends React.Component{

  componentDidUpdate(){
    console.log("[OrderSummary did update]");
  }



  render(){
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey=>{
      return <li key={igKey}><span style={{textTransform:"capitalize"}}>{igKey}</span>:{this.props.ingredients[igKey]}</li>
    })

    return(
        <Aux>
             <h3>Your order</h3>
             <p>a delicious burger with the following ingredients</p>
             <ul>
               {ingredientSummary}
             </ul>
             <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
             <p>continue to checkout</p>
             <Button btnType="danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
             <Button btnType="success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
       </Aux>
    )
  }
}



export default OrderSummary;