import React from "react"
import basket from "../../../../assets/images/basket.svg";
import {StyledBasket, TotalCost} from "./style";

const Basket = props => (
    <StyledBasket>
        <img src={basket}/>
        <TotalCost>{`${props.totalCost.currency}${props.totalCost.count}`}</TotalCost>
    </StyledBasket>
)

export default Basket