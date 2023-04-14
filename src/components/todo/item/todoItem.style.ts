import styled from "styled-components";

export const Item = styled.li<{ isCompleted: boolean }>`
    width:100%;
    display:flex;
    span{
        font-size:30px;
        ${props => props.isCompleted && "text-decoration: line-through"}
    }
    input[type=text]{
        width:20px;
    }
    input[type=checkbox] {
     zoom: 2;
     margin-right: 10px;
    }
`
