import styled, { css, keyframes } from "styled-components";

interface SloganAlignProps {
  centered?: boolean;
}

const bgInfinite = keyframes`
  from {
    background-position: 0%;
  }
  to {
    background-position: 150%;
  }
`;

export const SloganContainer = styled.div<SloganAlignProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0;
  flex: 1;
  text-align: justify;
  gap: 16px;
  max-width: 400px;
  ${({ centered }) =>
    centered &&
    css`
      margin: 0 auto;
    `}
  width: 100%;
  span {
    font-weight: 200;
    font-size: 54px;
    line-height: 100%;
    text-align: left;
    ${({ centered }) =>
      centered &&
      css`
        text-align: center;
      `}
    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      font-size: 3rem;
    }
  }
  p {
    color: var(--text);
    width: 100%;
    ${({ centered }) =>
      centered &&
      css`
        text-align: center;
      `}
    @media (max-width: 900px) {
      text-align: center;
    }
  }
  .actions {
    width: 100%;
    ${({ centered }) =>
      !centered &&
      css`
        max-width: 350px;
      `}
    button {
      width: 100%;
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
      text-transform: uppercase;
      transition: var(--transition);
      &:last-child {
        background: unset;
        border: 1px solid var(--primary);
        &:hover {
          background: var(--primary-lowopacity);
          box-shadow: 0 0 0 1px var(--primary);
        }
      }
    }
    @media (max-width: 900px) {
      width: 100%;
      max-width: unset;
    }
    .divider {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 32px;
      &:before,
      &:after {
        content: "";
        background: var(--shape);
        height: 1px;
        width: 100%;
      }
      &:before {
        margin-right: 8px;
      }
      &:after {
        margin-left: 8px;
      }
    }
  }
`;
