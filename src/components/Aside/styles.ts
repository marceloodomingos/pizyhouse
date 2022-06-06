import styled from "styled-components";

export const AsideNavbar = styled.aside`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100%;
  z-index: 1050;
  transition: var(--transition);
  nav {
    width: 80px;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(0);
    transition: var(--transition);
    z-index: 1050;
    background: var(--shape);
    box-shadow: inset -1px 0 0 var(--shape-hover);
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: var(--text);
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: calc(100% - 240px);
      li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        text-align: left;
        text-transform: capitalize;
        letter-spacing: 0.01em;
        padding: 0 16px;
        transition: var(--transition);
        overflow: hidden;
        position: relative;
        p {
          transition: var(--transition);
          transform: translateX(80px);
          position: absolute;
          width: 100%;
          max-width: 100px;
        }
        svg {
          width: 100%;
          min-width: 32px;
          max-width: 32px;
          height: 100%;
          min-height: 32px;
          max-height: 32px;
        }
        &.disabled {
          background: var(--shape-light);
          cursor: not-allowed;
          > svg {
            opacity: 0.5;
          }
        }
        &:not(.disabled):hover,
        &.active {
          border-left: 2px solid var(--primary);
          color: var(--white);
        }
        &.active {
          background: var(--shape-dark);
        }
      }
      @media (max-height: 720px) {
        height: 100%;
        li,
        a {
          height: 100%;
        }
      }
    }
    #logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
      width: 100%;
      cursor: pointer;
      gap: 16px;
      @media (max-height: 720px) {
        display: none;
      }
    }
    @media (max-width: 500px) {
      transform: translateX(-100%);
      &.open {
        transform: translateX(0);
      }
    }
  }
  .mobile-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    /* padding-bottom: 40px; */
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
      /* transform: translateY(20px); */
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
  }
  @media (max-width: 500px) {
    &.open {
      transform: translateX(100%);
      nav {
        box-shadow: 5px 0 8px -7px var(--background-navbar);
      }
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
  }
  @media (min-width: 500px) {
    transform: translateX(0);
    .mobile-menu {
      display: none;
    }
  }
`;
