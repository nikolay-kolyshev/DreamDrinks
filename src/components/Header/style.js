import styled from "styled-components"

export const HeaderStyled = styled.header`
    background-color: white;
    min-height: 90px;
    padding: 20px 30px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: sticky;
    top: 0;
`

export const Logo = styled.div`
    cursor: pointer;
    img {
        height: 50px;
    }
`

export const Nav = styled.nav`
    display: flex;
    
    > div:not(:last-child) {
        margin-right: 20px;
    }
`

export const Login = styled.div`
    display: flex;
    align-items: center;
    
    img {
        height: 50px;
    }
    
    button {
        margin-left: 10px;
    }
`