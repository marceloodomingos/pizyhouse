import styled, { keyframes } from "styled-components";

const worldShining = keyframes`
  0% { filter: drop-shadow(0 0 50px rgba(var(--primary), 0.8));}
  50% { filter: drop-shadow(0 0 100px var(--primary));}
  100% { filter: drop-shadow(0 0 50px rgba(var(--primary), 0.8));}
`;

const textShining = keyframes`
  0% {
    width: 0;
    left: 0;
  }
  10% {
    width: 0;
    left: 0;
  }
  35% {
    width: 100%;
  }
  65% {
    width: 100%;
  }
  90% {
    width: 0;
  }
  100% {
    width: 0;
  }
`;

export const Banner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  height: 600px;
  max-width: 1120px;
  .content {
    display: flex;
    justify-content: flex-end;
    flex: 0.5;
    animation: ${worldShining} 5s ease-in-out infinite;
    img {
      pointer-events: none;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    height: max-content;
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 0;
      span {
        font-size: 300%;
        text-align: center;
      }
      .actions {
        width: 100%;
        max-width: 400px;
      }
    }
    .content {
      width: 100%;
      max-width: 100vw;
      position: absolute;
      z-index: -1;
      opacity: 0.25;
      top: -0.5%;
      right: -50%;
    }
  }
  @media (max-width: 450px) {
    padding: 0 24px 24px;
    .info {
      span {
        font-size: 250%;
      }
    }
  }
`;

export const Features = styled.section`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: max-content;
    max-width: 1120px;
    padding: 24px 24px 0 24px;
    margin: 0 auto;
    text-align: center;
    .title {
      margin: 24px 0;
      width: 100%;
      span {
        font-size: 32px;
        line-height: 100%;
        font-weight: bold;
        b {
          position: relative;
          &:before {
            /* animation: ${textShining} 10s ease-in-out infinite; */
            content: "";
            display: block;
            position: absolute;
            background-color: var(--primary);
            width: 100%;
            height: 10%;
            bottom: 10%;
            right: 0;
            z-index: -1;
          }
        }
      }
      p {
        color: var(--text);
      }
    }
    .about {
      width: 100%;
      margin: 16px 0;
      &:nth-child(2n) .title {
        text-align: right;
        b:before {
          animation: ${textShining} 15s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          text-align: center;
        }
      }
      &:nth-child(2n + 1) .title {
        text-align: left;
        b:before {
          animation: ${textShining} 10s ease-in-out infinite;
        }
        @media (max-width: 900px) {
          text-align: center;
        }
      }
    }
    .features {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      align-items: center;
      margin: 16px 0;
      gap: 16px;
      @media (max-width: 1040px) {
        justify-content: center;
      }
      .feature {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* max-width: 320px; */
        flex-basis: 320px;
        min-height: 200px;
        height: max-content;
        gap: 8px;
        transition: var(--transition);
        cursor: default;
        .feature-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          height: calc(48px + 26px);
          margin-top: 24px;
          > span {
            font-weight: bold;
            text-transform: capitalize;
          }
          svg {
            width: 100%;
            height: 100%;
            max-height: 64px;
            color: var(--primary);
          }
        }
        > p {
          text-align: justify;
          height: max-content;
          min-height: 120px;
          margin-bottom: 24px;
          color: var(--text);
        }
        > a {
          text-align: center;
          font-size: 14px;
          line-height: 100%;
          color: var(--primary);
          margin-bottom: 24px;
          cursor: pointer;
          padding: 0 24px;
          width: 100%;
          i {
            border: solid var(--primary);
            border-width: 0 2px 2px 0;
            display: inline-block;
            padding: 2px;
            margin-left: 4px;
            transform: rotate(-45deg);
          }
          &:hover {
            text-decoration: underline;
          }
        }
        &.feature {
          p {
            padding: 0 24px;
          }
        }
        /* &:hover {
          box-shadow: 0 0 0 2px var(--primary);
          border-radius: 4px;
        } */
        /* & + .feature {
          padding-left: 24px;
          border-left-width: 1px;
          border-right-width: 0;
          border-style: solid;
          border-image: linear-gradient(
              to bottom,
              transparent,
              var(--primary),
              transparent
            )
            1 100%;
        } */
      }
    }
  }
`;

export const Advertising = styled.section`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--primary) 50%,
    transparent 100%
  );
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 100%;
  text-align: center;
  font-size: 20px;
  gap: 16px;
  padding: 24px;
  span {
    font-weight: bold;
  }
  > a {
    border: 2px solid var(--white);
    color: var(--white);
    background: unset;
    padding: 12px 38px;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
    transition: var(--transition);
    &:hover {
      background: var(--white);
      color: var(--primary);
    }
  }
  @media (max-width: 450px) {
    padding: 48px 24px;
    height: max-content;
    .phrase {
      max-width: 80%;
    }
  }
`;

export const Partners = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  max-width: 1120px;
  padding: 24px;
  margin: 0 auto;
  img {
    pointer-events: none;
    filter: grayscale(1) invert(1) brightness(100%) contrast(100%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title {
    margin: 24px 0;
    width: 100%;
    text-align: center;
    span {
      font-size: 32px;
      line-height: 100%;
      font-weight: bold;
    }
    p {
      color: var(--text);
    }
  }
  .carousel {
    display: flex;
    width: 100%;
    overflow: hidden auto;
  }
`;
