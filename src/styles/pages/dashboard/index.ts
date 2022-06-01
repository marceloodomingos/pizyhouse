import styled, { css, keyframes } from "styled-components";

const floatingImage = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(2.5%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const bannerInfinite = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
`;

export const MainApp = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding-left: 80px;
  > .container {
    padding: 0 30px 60px 30px;
    > h1 {
      text-align: center;
      margin-bottom: 16px;
    }
  }
  @media (max-width: 500px) {
    padding-left: 0;
    > .container {
      padding: 0 30px 60px 30px;
      margin-top: 100px;
    }
  }
`;

export const Banner = styled.section`
  display: flex;
  animation: ${bannerInfinite} 5s ease-in-out infinite;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to bottom left,
    var(--background) -20%,
    var(--primary) 25%,
    var(--tertiary) 50%,
    var(--primary) 75%,
    var(--background) 120%
  );
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 32px;
  width: 100%;
  height: 300px;
  position: relative;
  overflow: visible;
  padding: 24px;
  .content {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 750px) {
      justify-content: center;
      flex-direction: column;
    }
  }
  img {
    animation: ${floatingImage} 5s ease-in-out infinite;
    position: absolute;
    object-fit: cover;
    width: 100%;
    max-width: 200px;
    bottom: 16px;
    right: 0;
    pointer-events: none;
    @media (max-width: 750px) {
      right: -16px;
      top: unset;
      bottom: unset;
      max-width: unset;
      z-index: 0;
      opacity: 0.35;
    }
    @media (max-width: 500px) {
      animation: unset;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    font-size: 32px;
    width: 100%;
    max-width: 400px;
    line-height: 100%;
    gap: 16px;
    z-index: 1;
    span {
      color: var(--pizy-yellow);
      font-weight: bold;
    }
    .actions {
      display: flex;
      gap: 8px;
      button {
        width: 100%;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: var(--transition);
        &:first-child {
          background: var(--pizy-yellow);
          border: unset;
          &:hover {
            filter: brightness(0.75);
          }
        }
        &:last-child {
          border: 1px solid var(--pizy-yellow);
          color: var(--pizy-yellow);
          background: unset;
          &:hover {
            background: var(--pizy-yellow-lowopacity);
          }
        }
      }
    }
    @media (max-width: 750px) {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  @media (max-width: 750px) {
    overflow: hidden;
  }
  @media (max-width: 500px) {
    padding: 24px 12px;
  }
`;

export const RecentStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

interface CardsProps {
  user?: boolean;
}

export const CardBox = styled.div<CardsProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--shape);
  width: 100%;
  /* height: max-content; */
  min-height: 250px;
  flex-basis: 500px;
  flex-shrink: 1;
  flex-grow: 1;
  /* padding: 24px; */
  border-radius: 4px;
  transition: var(--transition);
  overflow: hidden;
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    text-transform: capitalize;
    line-height: 100%;
    position: relative;
    > p {
      color: var(--text);
      cursor: pointer;
      /* &:hover {
        text-decoration: underline;
        text-underline-offset: 1px;
      } */
    }
    @media (max-width: 600px) {
      padding: 16px;
      > p {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        text-align: right;
        color: transparent;
        position: relative;
        &:before {
          position: absolute;
          right: 4px;
          width: 4px;
          max-width: 4px;
          height: 100%;
          max-height: 4px;
          content: "";
          border: solid var(--primary);
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(-45deg);
        }
      }
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 24px;
    &.full-container {
      padding: unset;
    }
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }
    .coins {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      flex: 1;
    }
  }
  .content {
    width: 100%;
  }
  > footer {
    width: 100%;
    text-align: center;
    background: var(--shape-dark);
    padding: 12px 24px;
    line-height: 120%;
    /* border-radius: 0 0 4px 4px; */
    cursor: pointer;
    &:hover {
      background: var(--primary);
    }
  }
  ${({ user }) =>
    user &&
    css`
      width: 100%;
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin: 16px 0;
        .avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-basis: 100px;
          flex-shrink: 0;
          flex-grow: 0;
          width: 100px;
          min-width: 100px;
          max-width: 100px;
          height: 100px;
          background: var(--shape-dark);
          border-radius: 50%;
          /* box-shadow: 0 0 12px 0 var(--primary); */
          svg {
            width: 32px;
            height: 32px;
          }
          img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            padding: 2px;
          }
        }
        @media (max-width: 950px) {
          flex-wrap: wrap;
          text-align: center;
        }
        @media (max-width: 500px) {
          flex-direction: column;
        }
        > p {
          line-height: 120%;
          /* width: 100%; */
        }
      }
      &:hover {
        cursor: pointer;
        /* box-shadow: 0 0 0 2px var(--shape-dark); */
        background: linear-gradient(
          to bottom,
          rgba(130, 87, 229, 0.1),
          transparent
        );
        box-shadow: 0 0 0 2px var(--primary);
        footer {
          background: var(--primary);
        }
      }
    `}
`;

export const CoinInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 12px 24px;
  gap: 8px;
  transition: var(--transition);
  background: var(--shape-hover);
  cursor: pointer;
  &:nth-child(2n + 1) {
    background: var(--shape-dark);
  }
  > div {
    display: flex;
    gap: 16px;
    > span {
      display: flex;
      justify-content: flex-end;
      min-width: 24px;
      width: 24px;
      max-width: 24px;
      height: 24px;
      &:after {
        content: "º";
      }
    }
    > p {
      width: 100%;
      position: relative;
      > b {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        top: 0;
        right: 0;
        transform: translateX(100px);
        width: 100%;
        max-width: 24px;
        height: 100%;
        max-height: 24px;
        transition: var(--transition-medium);
        svg {
          width: 100%;
          max-width: 24px;
          height: 100%;
          max-height: 24px;
          pointer-events: none;
        }
      }
    }
  }
  img {
    width: 100%;
    max-width: 24px;
    height: 100%;
    max-height: 24px;
    pointer-events: none;
  }
  &:hover {
    background: linear-gradient(to right, rgba(130, 87, 229, 0.5), transparent);
    > div > p > b {
      opacity: 1;
      visibility: visible;
      transform: translateX(32px);
    }
  }
  @media (max-width: 500px) {
    padding: 12px 16px;
    > div {
      gap: 8px;
    }
  }
`;
