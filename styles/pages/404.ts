import styled, { keyframes } from "styled-components";

const bgInfinite = keyframes`
  from {
    background-position: 0%;
  }
  to {
    background-position: 150%;
  }
`;

export const Container404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 120px);
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 600px;
    height: 100%;
    min-height: 350px;
    max-height: 350px;
    gap: 16px;
    z-index: 5;
    span {
      font-size: 54px;
      font-weight: bold;
      line-height: 100%;
    }
    .phrases {
      width: 100%;
      color: var(--text);
    }
    a {
      border-radius: 4px;
      padding: 12px 24px;
      animation: ${bgInfinite} 2s linear infinite;
      background-size: 300% 100%;
      background-image: linear-gradient(
        to right,
        var(--primary),
        var(--secondary),
        var(--tertiary),
        var(--secondary),
        var(--primary)
      );
      color: var(--white);
      cursor: pointer;
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      text-decoration: none;
      transition: var(--transition);
    }
  }
  .galaxy {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    height: 100%;
    max-height: 500px;
    min-height: 350px;
  }
`;
