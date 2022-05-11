import styled, { keyframes } from "styled-components";

export const Coin = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  height: max-content;
  padding: 40px 20px;
  max-width: 1120px;
  margin: 0px auto;
  gap: 8px;
  > .coin {
    flex-grow: 1;
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);
    background: var(--shape);
    border-radius: 4px;
    font-size: 16px;
    min-height: 150px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: var(--transition);
    > img {
      max-width: 64px;
      width: 100%;
      pointer-events: none;
    }
    > span {
      font-size: 24px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      line-height: 20px;
      margin: 8px 0;
    }
    > p {
      margin-top: 8px;
      text-transform: capitalize;
    }
    .about {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      padding: 16px 32px;
      > p {
        font-weight: bold;
        &:after {
          content: "º";
        }
      }
      img {
        max-width: 64px;
        pointer-events: none;
        border-radius: 4px;
      }
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span {
          text-align: left;
          font-weight: bold;
          font-size: 32px;
          line-height: 100%;
        }
        p {
          color: var(--text);
          text-transform: uppercase;
        }
      }
    }
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      height: 100%;
      .prices {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        > p {
          color: var(--text);
        }
        span {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--white);
          padding: 8px 16px;
          border-radius: 4px;
          text-transform: uppercase;
          font-weight: normal;
          gap: 4px;
          width: 120px;
          &.up {
            background: var(--success);
          }
          &.down {
            background: var(--error);
          }
          > img {
            max-width: 24px;
          }
        }
      }
      > button {
        background: var(--shape-light);
        height: 100%;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: var(--transition);
        i {
          border: solid var(--white);
          border-width: 0 6px 6px 0;
          border-radius: 4px;
          display: inline-block;
          padding: 12px;
          transform: rotate(-45deg) translateY(-4px);
        }
      }
    }
    &:first-child {
      flex-basis: 100%;
      min-height: 200px;
      border-radius: 4px;
      /* box-shadow: inset rgba(130, 87, 229, 0.25) 0 0 8px 0,
        rgba(153, 109, 255, 0.25) 0 0 16px 0;
      background: linear-gradient(
        to right,
        rgba(130, 87, 229, 0.1),
        transparent
      ); */
      > img {
        width: 100%;
        max-width: 128px;
      }
    }
    &:hover {
      background: linear-gradient(
        to right,
        rgba(130, 87, 229, 0.1),
        transparent
      );
      box-shadow: 0 0 0 2px var(--primary);
      button {
        background: var(--secondary);
      }
    }
    @media (max-width: 750px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .about {
        flex-direction: column;
        gap: 8px;
        > div {
          align-items: center;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        width: 100%;
        .prices {
          flex-direction: column;
          padding: 16px 0;
        }
        button {
          width: 100%;
          min-height: 60px;
          i {
            transform: rotate(45deg) translateY(-4px);
          }
        }
      }
    }
  }
`;

export const CryptoCoinsActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 40px;
  padding: 0 20px;
  gap: 16px;
  button {
    background: unset;
    color: var(--white);
    border: 1px solid var(--primary);
    min-width: 100px;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    transition: var(--transition);
    &:hover {
      background: var(--primary-lowopacity);
    }
  }
`;
