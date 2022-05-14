import styled, { keyframes } from "styled-components";

const bgInfinite = keyframes`
  from {
    background-position: 0%;
  }
  to {
    background-position: 150%;
  }
`;

export const Sign = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  margin: 0px auto;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
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
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
  }
  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 32px;
    margin: 24px 0;
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
  .google {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;
    svg {
      width: 24px;
      height: 24px;
      fill: white;
      margin-right: 16px;
    }
    &:hover {
      filter: brightness(0.75);
    }
  }
`;

export const SignForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  > svg {
    width: 100px;
    height: 100px;
  }
  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: stretch;
    align-content: center;
    text-align: center;
    line-height: 100%;
    margin-top: 8px;
    gap: 8px;
    color: var(--text);
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  > .inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    > div {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #8257e5;
      border-radius: 4px;
      svg {
        width: 24px;
        height: 24px;
        margin: 0 16px;
      }
    }
  }

  input {
    width: 100%;
    background: unset;
    border: unset;
    height: 100%;
    color: var(--white);
    &:focus {
      outline: none;
    }
  }
  button {
    width: 100%;
  }
`;
