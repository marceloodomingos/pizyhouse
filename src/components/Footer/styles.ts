import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--shape);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  padding: 0 24px;
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
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    padding: 0 24px;
    margin: 16px auto;
    svg {
      width: 100%;
      max-width: 42px;
      padding: 8px;
      fill: var(--white);
      transition: var(--transition);
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: var(--shape-dark);
      }
    }
  }
`;

export const WarnAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: var(--text);
  background: var(--shape-hover);
  text-align: center;
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
`;
