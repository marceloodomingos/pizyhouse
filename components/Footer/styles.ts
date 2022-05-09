import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--shape);
  display: flex;
  flex-shrink: 0;
  width: 100%;
  padding: 64px 24px;
  z-index: 100;
  .content {
    width: 100%;
    max-width: 1120px;
    padding: 0 24px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    .info {
      width: 40%;
      padding-right: 5%;
      color: var(--text);
      pointer-events: none;
      p {
        margin-bottom: 16px;
      }
      a {
        text-decoration: none;
        color: var(--text);
        line-height: 100%;
        &:hover {
          text-decoration: underline;
        }
      }
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
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      gap: 16px;
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
      > div div + div {
        margin-top: 24px;
      }
      @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
    @media (max-width: 950px) {
      flex-direction: column;
      align-items: center;
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
