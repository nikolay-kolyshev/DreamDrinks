import React from "react"
import {HeaderStyled, Login, Logo, Nav} from "./style";
import logo from "../../assets/images/logo.svg"
import user from "../../assets/images/user.svg"
import {Button} from "../../style/style";
import Basket from "./components/Basket/Basket";

const Header = () => (
    <HeaderStyled>
        <Logo>
            <img src={logo}/>
        </Logo>
        <Nav>
            <Basket/>
            <Login>
                <img src={user}/>
                <Button>Войти</Button>
            </Login>
        </Nav>
    </HeaderStyled>
)


export default Header