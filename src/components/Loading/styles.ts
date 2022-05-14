import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingShining = keyframes`
  0% { filter: drop-shadow(0 0 10px rgba(var(--primary), 0.5));}
  50% { filter: drop-shadow(0 0 25px var(--primary));}
  100% { filter: drop-shadow(0 0 10px rgba(var(--primary), 0.5));}
`;

export const LoadingRing = styled.div`
  margin: 16px auto;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid var(--primary);
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${loading} 1s linear infinite, ${loadingShining} 3s ease infinite;
`;
