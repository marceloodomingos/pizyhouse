import styled, { css, keyframes } from "styled-components";

interface ButtonProps {
  isOutlined?: boolean;
  isGlowing?: boolean;
}

const bgInfinite = keyframes`
  from {
    background-position: 0%;
  }
  to {
    background-position: 150%;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  border-radius: 4px;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: var(--transition);
  color: var(--white);
  background: var(--primary);
  ${({ isOutlined }) =>
    isOutlined &&
    css`
      background: unset;
      border: 1px solid var(--primary);
      &:not(:disabled):hover {
        background: var(--primary-lowopacity);
        box-shadow: 0 0 0 1px var(--primary);
      }
    `}
  ${({ isGlowing }) =>
    isGlowing &&
    css`
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
      &:not(:disabled):hover {
      }
    `}
  &:disabled {
    opacity: 0.5;
    filter: grayscale(1);
    background: var(--shape);
    &:hover {
      box-shadow: none;
    }
  }
`;
