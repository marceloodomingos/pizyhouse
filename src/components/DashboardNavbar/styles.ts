import styled, { keyframes } from "styled-components";

const bgInfinite = keyframes`
  from {
    background-position: 0%;
  }
  to {
    background-position: 150%;
  }
`;

export const NavbarContainer = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1049;
  width: 100%;
  padding: 0;
  height: 80px;
  transition: var(--transition-turtle);
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    #logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      cursor: pointer;
      img {
        pointer-events: none;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        & + a {
          margin-left: 16px;
        }
      }
    }
    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      height: 100%;
      position: relative;
      i {
        border: solid var(--text);
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 2px;
        margin: 0 4px;
        transform: rotate(45deg) translateY(-4px);
      }
      .dropdown {
        display: none;
        position: absolute;
        top: 80px;
        width: 100%;
        max-width: 200px;
        line-height: 100%;
        background: var(--black);
        justify-content: center;
        padding: 0;
        border-radius: 0 0 4px 4px;
        align-items: center;
        flex-direction: column;
        z-index: 1000;
        transition: var(--transition);
        > a {
          padding: 16px;
          width: 100%;
          cursor: pointer;
          &:hover,
          &:nth-child(2n + 1):hover {
            border: unset;
            background: #1e1e21;
          }
          &:nth-child(2n + 1) {
            background: var(--black-brighter);
          }
          &:last-child {
            border-radius: 0 0 4px 4px;
          }
        }
        &:hover {
          display: flex;
        }
      }
      @media (max-width: 900px) {
        display: none;
      }
      .options:hover .dropdown,
      .dropdown:hover {
        display: flex;
      }
      .options:hover {
        i {
          border: solid var(--white);
          border-width: 0 2px 2px 0;
        }
      }
    }
    .account-actions {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      > a,
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
        &.signin {
          background: transparent;
          color: var(--white);
          border: 1px solid var(--primary);
          min-width: 100px;
          &:hover {
            background: var(--primary-lowopacity);
          }
        }
        &.signup {
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
          min-width: 150px;
        }
      }
      svg {
        width: 24px;
        height: 24px;
        cursor: pointer;
        color: var(--text);
        transition: var(--transition);
        &:hover {
          color: var(--white);
        }
      }
      > p {
        @media (max-width: 500px) {
          display: none;
        }
      }
      #user-name {
        margin: 0 16px;
        cursor: default;
        pointer-events: none;
        user-select: none;
      }
      #user {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--primary);
        border: 2px solid var(--secondary);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          padding: 2px;
        }
      }
      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        position: relative;
        cursor: pointer;
        &:hover {
          background: var(--shape-dark-lowopacity);
          border-radius: 4px;
          svg {
            color: var(--white);
          }
        }
        > .dropdown {
          display: none;
          position: absolute;
          top: 55px;
          right: 0;
          width: 100%;
          min-width: 200px;
          line-height: 100%;
          background: var(--primary);
          justify-content: center;
          padding: 0;
          border-radius: 4px;
          align-items: center;
          flex-direction: column;
          z-index: 1000;
          transition: var(--transition);
          /* overflow: hidden auto; */
          li {
            width: 100%;
            height: 100%;
            min-height: 50px;
            max-height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
            border-radius: 4px;
            z-index: 2;
            > a,
            button {
              width: 100%;
              height: 100%;
              color: var(--white);
              transition: var(--transition);
              border: unset;
              background: none;
              text-align: right;
              font-size: 16px;
              font-weight: normal;
              text-transform: capitalize;
            }
            &:hover {
              background: var(--secondary);
              svg {
                color: var(--white);
              }
            }
          }
          &:before {
            content: "";
            height: 100%;
            max-height: 16px;
            width: 100%;
            max-width: 16px;
            border-radius: 4px;
            border-left: 16px solid transparent;
            border-right: 16px solid transparent;
            border-bottom: 16px solid var(--primary);
            position: absolute;
            top: -20px;
            right: 0;
            &:hover {
              ul {
                display: flex;
              }
            }
          }
          .for-mobile {
            width: 100%;
            display: none;
            @media (max-width: 500px) {
              display: block;
            }
          }
        }
        &:hover {
          ul {
            display: flex;
            align-items: space-between;
          }
        }
        &:last-child {
          padding: 0;
        }
        @media (max-width: 500px) {
          display: none;
        }
      }
      .for-mobile-shortcut {
        width: 100%;
        display: none;
        li {
          width: 40px;
          height: 40px;
          padding: 8px;
          cursor: pointer;
          svg {
            width: 100%;
            height: 100%;
          }
          &:hover {
            background: var(--shape-dark-lowopacity);
            border-radius: 4px;
            svg {
              color: var(--white);
            }
          }
        }
        @media (max-width: 500px) {
          display: flex;
        }
      }
      @media (max-width: 500px) {
        gap: 8px;
      }
    }
  }
  li {
    list-style-type: none;
    transition: var(--transition);
    > a {
      text-decoration: none;
      text-transform: capitalize;
      color: var(--support);
      padding: 26px 12px;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        color: var(--gray);
        border-bottom: 2px solid var(--primary);
      }
    }
    &.options {
      a {
        cursor: default;
      }
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: -1px;
    background: var(--shape);
    box-shadow: 0px 10px 13px -7px var(--background-navbar);
    .header {
      height: 81px;
    }
  }
`;
