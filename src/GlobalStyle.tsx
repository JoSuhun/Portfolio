import { createGlobalStyle } from "styled-components";
import Galmuri11 from "./fonts/Galmuri11.woff2";
import Galmuri11Bold from "./fonts/Galmuri11-Bold.woff2";
import PretendardExtraLight from "./fonts/Pretendard-ExtraLight.woff2";
import PretendardLight from "./fonts/Pretendard-Light.woff2";
import Pretendard from "./fonts/Pretendard-Regular.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Galmuri11';
        src: local('Galmuri11'), local('Galmuri11');
        font-style: normal;
        src: url(${Galmuri11}) format('woff2');
    }
    @font-face {
        font-family: 'Galmuri11-Bold';
        src: local('Galmuri11Bold'), local('Galmuri11Bold');
        font-style: bold;
        src: url(${Galmuri11Bold}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard-ExtraLight';
        src: local('Pretendard-ExtraLight'), local('Pretendard-ExtraLight');
        font-style: light;
        src: url(${PretendardExtraLight}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard-Light';
        src: local('Pretendard-Light'), local('Pretendard-Light');
        font-style: light;
        src: url(${PretendardLight}) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        src: local('Pretendard'), local('Pretendard');
        font-style: normal;
        src: url(${Pretendard}) format('woff2');
    }

    html {
      --color-red : #BF2020;
      --color-beige : #EAEBDB;
      --color-green : #2b9915;
      --color-grey : #3c3c3c;
      --color-lightgrey : #5b5b5b;
      --card-background : #cfcfcf3c;
      --card-shadow : 5px 5px 10px #bebebe4e, -5px -5px 10px #f0f0f02a;
    }

    body {
        background-color: #EAEBDB;
        margin: 0;
        color: var(--color-grey);
        word-break: keep-all;
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
