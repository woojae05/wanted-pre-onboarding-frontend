import styled from "styled-components";

export const StyledButton = styled.button`
        border-radius:6px;
        padding:5px;
        font-size:20px;
        margin:5px;
        background-color:#6A24FE;
        color: #fff;
        border:none;

        &[type="submit"]{
            border-radius: 6px;
            cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
            width: 100%;
            height: 48px;
            color: #fff;
            font-size: 16px;
            background-color: ${props => props.disabled ? "grey" : "#6A24FE"};
        }
`