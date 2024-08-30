import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        scroll-behavior: smooth;

    }

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;  
        font-family: "Montserrat", sans-serif;
    }

    footer{
        position: relative;
    }

`;
