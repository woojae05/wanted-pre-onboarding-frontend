import styled from "styled-components";

export const StyledInput = styled.input < { ref: any }> `
        width: 100%;
        height: 48px;
        padding: 0 10px;
        box-sizing: border-box;
        margin-bottom: 16px;
        border-radius: 6px;
        background-color: #F8F8F8;
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
        
        ::placeholder{
            color: #D2D2D2;
        }

        &[type="submit"]{
            color: #fff;
            font-size: 16px;
            background-color: ${props => props.disabled ? "grey" : "#6A24FE"};
            margin-top: 20px;
        }
`