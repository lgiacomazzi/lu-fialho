import styled from "styled-components";
import { space, position, zIndices } from 'styled-system'
import { variant } from 'styled-system'

const Button = styled.button`
    ${space};
    ${position};
    ${zIndices};
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: inherit;
    font-size: inherit;
    font-weight: bold;

    border: none;
    border-radius: 100px;

    padding: 10px 20px;

    color: white;
    background-color: var(--interactive-dark);

    > img {
        filter: invert(1);
        margin-left: .5em;
    }
`;

export const OutlineButton = styled(Button)`
    background: var(--ui-light);
    color: var(--interactive-dark);
    border: 1px solid var(--interactive-dark);
`

export const RoundButton = styled(Button)`
    border-radius: 100px;
    padding: 0px;
    height: 32px;
    width: 32px;

    > img {
        filter: invert(1);
    }
`;



export default Button;