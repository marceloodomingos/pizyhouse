import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5000;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  .container {
    background: var(--black);
    color: var(--white);
    width: 100%;
    max-width: 1120px;
    height: 70%;
    padding: 0 20px;
    border-radius: 4px;
    overflow: hidden;
    @media (max-width: 1200px) {
      height: calc(100% - 140px);
      margin-top: 100px;
    }
    .close {
      position: relative;
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      outline: none;
      width: 32px;
      height: 32px;
      top: 16px;
      right: calc(-100% + 32px);
      cursor: pointer;
      &:before,
      &:after {
        left: 14.5px;
        content: " ";
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: var(--white);
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      padding: 16px 8px;
      height: 90%;
      margin-top: 16px;
      /* mask-image: linear-gradient(180deg, #000 60%, transparent);
      mask-repeat: no-repeat, no-repeat;
      mask-position: 0 0, 100% 0;
      mask-size: calc(100% - 6px) 100%, 6px 100%; */
      p {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      img {
        width: 100%;
        max-width: 64px;
      }
      @media (max-width: 1200px) {
        height: 95%;
      }
    }
  }
`;
