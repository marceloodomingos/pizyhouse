import styled from "styled-components";

export const AsideNavbar = styled.aside`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  transform: translateX(0);
  transition: all 0.3s ease-out;
  height: 100%;
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
      &:hover {
        border-left: 2px solid var(--primary);
        color: var(--white);
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
  }
  /* &:hover {
    width: 240px;
    > div a {
      width: 100%;
      p {
        transform: translateX(0);
        position: relative;
      }
    }
  } */
`;
