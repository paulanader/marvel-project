import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-white: #ffffff;
    --color-yellow: #f4e427;
    --color-red: #c0392b;
    --color-dark: #121214;
    --color-dark-gray: #202024;
    --color-gray: #666666;
    --color-light-gray: #e3e3e3;
    
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-dark-gray);
    }

    body,input, textarea, button {
        font-family: 'Lato';
        color: var(--color-light-gray);
    }   

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


    .cursor-pointer { cursor: pointer; }
`;
