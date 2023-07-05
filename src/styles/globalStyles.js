import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
	    font-family: sans-serif;
        height: 100vh;
        background-color: #202733;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export {GlobalStyles};