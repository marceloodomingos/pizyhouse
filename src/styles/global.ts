import { createGlobalStyle, keyframes } from "styled-components";

import { Variables } from "./variables";

const loadingUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%)
  }
  to {
    opacity: 1;
    transform: translateY(0%)
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${Variables}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  html, body {
    position:relative;
    margin: 0 auto;
    overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100vw;
    height: max-content;
    overflow-x: hidden;
    background: var(--background);
    color: var(--white);
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(130, 87, 229, 0.1);
    }
    &::-webkit-scrollbar-thumb {
      background: #8257e5;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #996dff;
    }
  }
  main {
    width: 100%;
    min-height: 100vh;
    height: max-content;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    > h1, > h2, > h3, > h4 {
      text-align: center;
      text-transform: capitalize;
      line-height: 100%;
      padding: 16px;
      margin: 16px 0;
    }
    &.modelOpenned {
      position: fixed;
      top: 0;
      height: 100vh;
    }
    &.loadingApp {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100vh;
    }
    /* animation: ${loadingUp} 1s ease; */
  }
  button {
    border: unset;
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;
