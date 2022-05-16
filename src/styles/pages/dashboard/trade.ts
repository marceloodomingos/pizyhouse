import styled, { css } from "styled-components";

interface ContainerProps {
  itsUser?: boolean;
}

export const OfferContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 1010px;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    #trade-icon {
      transform: rotate(90deg);
    }
  }
  > svg {
    width: 48px;
    height: 48px;
  }
`;

export const TradeDiv = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--shape);
  width: 100%;
  height: 300px;
  flex-basis: 300px;
  flex-grow: 1;
  border-radius: 4px;
  .avatar {
    position: relative;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      border: 2px solid var(--secondary);
      border-radius: 50%;
      img {
        width: 100%;
        border-radius: 50%;
        transition: var(--transition);
      }
      svg {
        position: absolute;
        display: none;
        width: 100%;
        max-width: 50px;
        height: 100%;
        max-height: 50px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: var(--transition);
      }
      &:hover {
        img {
          filter: brightness(0.6);
        }
        svg {
          display: block;
        }
      }
    }
    > svg {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px 24px;
    gap: 16px;
    .about {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    p {
      color: var(--text);
      line-height: 125%;
      &.warn {
        color: var(--white);
        background: var(--attention);
        /* border: 2px solid var(--attention); */
        padding: 12px 16px;
        border-radius: 4px;
        width: 100%;
        overflow: hidden;
        position: relative;
        &:before {
          position: absolute;
          content: "⚠";
          left: -4.5%;
          opacity: 0.35;
          font-size: 8rem;
        }
      }
      &.error {
        color: var(--white);
        background: var(--error);
        padding: 12px 16px;
        border-radius: 4px;
        width: 100%;
        overflow: hidden;
        position: relative;
        &:before {
          position: absolute;
          content: "✖";
          left: -4.5%;
          opacity: 0.35;
          font-size: 8rem;
        }
      }
      &.obs {
        color: var(--white);
        background: var(--shape-dark);
        padding: 12px 16px;
        border-radius: 4px;
        width: 100%;
        overflow: hidden;
        position: relative;
        &:before {
          position: absolute;
          content: "ℹ️";
          left: -0.5%;
          opacity: 0.35;
          font-size: 8rem;
        }
      }
    }
    > button {
      border: 1px solid var(--primary);
      background: var(--primary-lowopacity);
      width: 100%;
      padding: 8px 16px;
      border-radius: 4px;
      color: var(--white);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        filter: brightness(1.5);
      }
    }
    &.danger-zone {
      button {
        border: 1px solid var(--error);
        background: var(--error-lowopacity);
        &:hover {
          filter: brightness(1.5);
        }
      }
    }
  }
  dt {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--primary);
    font-weight: bold;
    font-size: 16px;
    text-transform: capitalize;
    line-height: 100%;
    width: 100%;
    border-image: linear-gradient(to right, var(--primary), transparent) 1;
    border-bottom: 1px solid;
    padding-bottom: 4px;
    margin: 8px 0;
    transition: var(--transition);
    svg {
      width: 20px;
      height: 20px;
    }
  }
  ${({ itsUser }) =>
    itsUser &&
    css`
      border: 1px solid var(--primary);
    `}
`;

export const TradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 1010px;
  margin: 0 auto;
`;

export const TradeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 1010px;
  margin: 32px auto;
  padding: 16px;
  background: var(--shape);
  border-radius: 4px;
  flex-basis: 100%;
  flex-grow: 1;
  span {
    color: var(--text);
  }
`;

export const TradeActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  button {
    width: 25%;
    padding: 12px 32px;
    color: var(--white);
    border-radius: 4px;
    cursor: pointer;
    transition: var(--transition);
    &:first-child {
      background: var(--primary);
      border: unset;
    }
    &:last-child {
      background: unset;
      border: 1px solid var(--primary);
      background: var(--primary-lowopacity);
    }
    &:hover {
      filter: brightness(1.25);
    }
  }
`;
