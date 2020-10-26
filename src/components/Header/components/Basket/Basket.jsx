import React from "react"
import basket from "../../../../assets/images/basket.svg";
import {StyledBasket, TotalCost} from "./style";

const Basket = props => (
    <StyledBasket>
        <img src={basket}/>
        <TotalCost>₽1500</TotalCost>
    </StyledBasket>
)

export default Basket