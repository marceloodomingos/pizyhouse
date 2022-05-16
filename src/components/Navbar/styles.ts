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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  box-shadow: inset 0 -1px 0 var(--shape-hover);
  color: var(--white);
  width: 100%;
  z-index: 100;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
    max-width: 1120px;
    height: 100%;
    padding: 0 20px;
    position: relative;
    #logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      cursor: pointer;
      z-index: 2;
      img {
        pointer-events: none;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        & + div {
          margin-left: 16px;
        }
      }
      @media (max-width: 500px) {
        div:last-child {
          display: none;
        }
      }
    }
    #user {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--primary);
      border: 2.5px solid var(--secondary);
      border-radius: 50%;
      width: 48px;
      height: 48px;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        padding: 2px;
      }
    }
    > ul {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
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
        &.dropdown-open {
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
      gap: 12px;
      z-index: 2;
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
      #user {
        background: var(--primary);
        border: 2.5px solid var(--secondary);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        padding: 8px;
      }
      > li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        position: relative;
        cursor: pointer;
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
            width: 12px;
            height: 12px;
            background: var(--primary);
            position: absolute;
            top: -4px;
            right: 18px;
            transform: rotate(45deg);
            &:hover {
              ul {
                display: flex;
              }
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
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
    .mobile-menu {
      width: 80px;
      height: 80px;
      padding-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: unset;
      div {
        background: var(--primary);
        width: 32px;
        height: 3px;
        position: relative;
        transition: background 10ms 300ms ease;
        transform: translateY(20px);
        &:before,
        &:after {
          transition: top 300ms 350ms ease, transform 300ms 50ms ease;
          position: absolute;
          background: var(--primary);
          width: 100%;
          height: 3px;
          content: "";
        }
        &:before {
          top: 8px;
          left: 0;
        }
        &:after {
          bottom: 8px;
          left: 0;
        }
      }
      @media (min-width: 900px) {
        display: none;
      }
    }
  }
  li {
    list-style-type: none;
    transition: var(--transition);
    a {
      text-decoration: none;
      text-transform: capitalize;
      color: var(--support);
      padding: 26px 12px;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        color: var(--white);
        border-bottom: 2px solid var(--primary);
      }
    }
    &.options {
      a {
        cursor: default;
      }
      button {
        border: unset;
        background: unset;
        height: 100%;
        padding: 26px 12px;
        font-size: 16px;
        color: var(--support);
      }
    }
  }
  &.open {
    top: 0;
    height: 80px;
    position: fixed;
    background: var(--background);
    .mobile-menu div {
      background: transparent;
      &:before,
      &:after {
        transition: top 300ms 50ms ease, transform 300ms 350ms ease;
        top: 0;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }
`;

export const MobileMenu = styled.div`
  display: block;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  z-index: 1050;
  transition: var(--transition);
  transform: translateX(100%);
  background: var(--background);
  box-shadow: inset -1px 0 0 var(--shape-hover);
  > ul {
    display: none;
  }
  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 1px;
    background: var(--shape);
    margin: 16px 0;
  }
  @media (max-width: 900px) {
    &.open {
      transform: translateX(0%);
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        height: 100%;
        padding: 24px 12px;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          cursor: pointer;
          border-radius: 4px;
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            width: 100%;
            height: 100%;
            &:hover {
              border: unset;
            }
          }
          &:hover {
            background: var(--shape-dark);
          }
        }
      }
      #user {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--primary);
        border: 2.5px solid var(--secondary);
        border-radius: 50%;
        width: 48px;
        height: 48px;
        img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          padding: 2px;
        }
      }
    }
  }
`;

export const UserLinks = styled.div`
  /* display: none; */
  width: 100%;
  margin: 16px auto;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
