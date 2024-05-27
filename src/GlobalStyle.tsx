import { createGlobalStyle } from "styled-components";
import Galmuri11 from "./fonts/Galmuri11.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Galmuri11';
        src: local('Galmuri11'), local('Galmuri11');
        font-style: normal;
        src: url(${Galmuri11}) format('woff2');
  }

    html {
      --color-red : #BF2020;
      --color-beige : #EAEBDB;
      --color-green : #6BB05D;
      --color-grey : #3c3c3c;
    }

    body {
        background-color: #EAEBDB;
        margin: 0;
        color: var(--color-grey);
    }

    div {
        margin: 0;
        padding: 0;
    }
    p {
        margin: 0;
        padding: 0;
    }
`;
