import styled from "styled-components";

export const BackTop = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 100%;
  max-width: 48px;
  height: 100%;
  max-height: 48px;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  > svg {
    font-size: 24px;
  }
`;
