import styled from "styled-components";

export const NothingContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--text);
  gap: 16px;
  svg {
    color: var(--primary);
    width: 100px;
    height: 100px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 125%;
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
  button {
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    transition: var(--transition);
    background: transparent;
    color: var(--white);
    border: 1px solid var(--primary);
    width: 100%;
    &:hover {
      background: var(--primary-lowopacity);
    }
  }
  @media (max-width: 350px) {
    padding: 12px;
  }
`;
