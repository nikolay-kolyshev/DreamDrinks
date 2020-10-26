import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *,
    *::before,
    *::after{
        box-sizing: inherit;
    }
    
    body{
        margin: 0;
        padding: 0;
        font-family: Comfortaa, cursive; 
        background-color: #666;
        color: #9B9180;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    h1,h2,h3,h4,h5,h6,p{
        padding: 0;
        margin: 0;
    }
    
    button {
        font-family: inherit;
        background-color: transparent;
        color: inherit;
        outline: none;
        
        &:active, &:focus{
            outline: none;
        }
    }
    
`
