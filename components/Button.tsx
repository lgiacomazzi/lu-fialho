import styled from "styled-components";
import { space, position } from 'styled-system'

const Button = styled.button`
    ${space}
    ${position}
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    height: 32px;
    min-width: 32px;

    color: white;
    background-color: var(--interactive-dark); 
`;

export const RoundButton = styled(Button)`
    border-radius: 100px;
    height: 32px;
    width: 32px;
    
    > img {
        filter: invert(1);
    }
`;



export default Button;