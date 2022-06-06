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
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100vw;
    height: max-content;
    overflow-x: hidden;
    background: var(--background);
    color: var(--white);
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(130, 87, 229, 0.1);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      transition: var(--transition);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--tertiary);
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
    > .title {
      text-align: center;
      margin-bottom: 64px;
      padding: 0 32px;
      @media (max-width: 500px) {
        margin-bottom: 32px;
      }
      &:nth-child(2n) {
        margin: 32px 0;
      }
      &.no-spacing {
        margin-bottom: unset;
        margin: 32px 0;
      }
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
