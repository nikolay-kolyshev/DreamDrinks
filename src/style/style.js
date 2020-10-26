import styled from "styled-components"

export const Button = styled.button`
    font-size: 18px;
    border: 2px solid #9B9180;
    border-radius: 18px;
    padding: 8px 20px;
    cursor: pointer;
    transition: color ease .3s,
                border-color ease .3s;
    
    &:hover{
        color: #FFA000;
        border-color: #FFA000;
    }
`