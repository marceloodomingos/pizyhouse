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
    .crypto-infos {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 8px;
      @media (max-width: 1200px) {
        height: max-content;
        overflow: hidden auto;
        flex-direction: column;
        > div {
          flex: 1;
        }
        .info-coin {
          max-width: unset;
        }
      }
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
    .info-coin {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 300px;
      height: 100%;
      background: var(--shape);
      border-radius: 4px;
      padding: 16px 8px;
      .coin {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 100%;
        width: 100%;
        height: 100%;
        gap: 8px;
        /* border-bottom: 1px solid;
        border-image: linear-gradient(
            to right,
            transparent,
            var(--shape-dark),
            transparent
          )
          1; */
        span {
          font-size: 24px;
        }
        p {
          text-transform: lowercase;
          color: var(--text);
        }
        img {
          width: 100%;
          max-width: 100px;
          border-radius: 4px;
        }
      }
      .stats {
        width: 100%;
        padding: 16px 8px;
        dt {
          text-align: left;
          width: 100%;
          margin: 16px auto;
          padding-bottom: 4px;
          font-weight: bold;
          text-transform: capitalize;
          color: var(--primary);
          border-image: linear-gradient(to right, var(--primary), transparent) 1;
          border-bottom: 1px solid;
        }
        li {
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: none;
          span {
            width: 60%;
            text-transform: capitalize;
            text-align: left;
            color: var(--white);
            line-height: 100%;
          }
          p {
            position: relative;
            width: 40%;
            text-align: right;
            color: var(--text);
            &.market_cap_rank {
              padding-right: 8px;
              &:before {
                content: "º";
                position: absolute;
                right: 0;
              }
            }
            &.market_cap_change {
              padding-right: 12px;
              &:before {
                content: "%";
                position: absolute;
                right: 0;
              }
            }
          }
        }
      }
    }
    .graph {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: var(--shape);
      border-radius: 4px;
      padding: 8px;
      img {
        object-fit: cover;
        pointer-events: none;
      }
    }
  }
`;
