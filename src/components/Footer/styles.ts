import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--shape);
  display: flex;
  flex-direction: column-reverse;
  flex-shrink: 0;
  width: 100%;
  padding: 24px;
  z-index: 100;
  > h3 {
    text-align: center;
    margin: 16px 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
    gap: 16px;
    width: 100%;
    color: var(--text);
    pointer-events: none;
    line-height: 100%;
    text-align: center;
    @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
      text-align: center;
      width: 100%;
    }
  }
  .navbar {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    text-align: center;
    margin: 16px auto;
    width: 100%;
    max-width: 1120px;
    gap: 16px;
    > div {
      flex-basis: 200px;
    }
    span {
      font-weight: bold;
      color: var(--primary);
      cursor: default;
    }
    li {
      text-transform: capitalize;
      list-style-type: none;
      line-height: 125%;
      width: 100%;
    }
    a {
      text-decoration: none;
      color: var(--text);
      line-height: 100%;
      width: 250px;
      &:hover {
        text-decoration: underline;
      }
    }
    ul {
      width: 100%;
      max-width: 300px;
      li {
        padding: 4px 0;
        /* & + li {
            border-top: 1px dashed var(--shape-dark);
          } */
      }
    }
    @media (max-width: 950px) {
      justify-content: center;
    }
  }
`;

export const BottomContent = styled.div`
  display: flex;
  width: 100%;
  background: var(--shape);
  color: var(--text);
  text-align: center;
  padding: 24px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1120px;
    margin: 0 auto;
    @media (max-width: 850px) {
      flex-direction: column-reverse;
      justify-content: center;
      .follow-us > p {
        display: none;
      }
    }
  }
  a {
    transition: var(--transition);
    color: var(--text);
    &:hover {
      color: var(--primary);
    }
  }
  p {
    max-width: 1120px;
  }
  abbr {
    transition: var(--transition);
    cursor: help;
    &:hover {
      color: var(--primary);
    }
  }
  .follow-us {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    svg {
      width: 42px;
      height: 42px;
      padding: 8px;
      fill: var(--white);
      transition: var(--transition);
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: var(--shape-dark);
      }
    }
    a {
      width: 100%;
      height: 100%;
      max-height: 42px;
      position: relative;
      & + a {
        display: flex;
        &:before {
          content: "";
          display: inline-flex;
          border-image: linear-gradient(
              to top,
              transparent 0%,
              var(--shape-dark) 25%,
              var(--shape-dark) 75%,
              transparent 100%
            )
            1;
          border-left: 1px solid;
          box-sizing: border-box;
          line-height: 0;
          cursor: default;
          pointer-events: none;
          position: absolute;
          left: -8px;
          width: 2px;
          height: 100%;
        }
      }
    }
  }
`;
