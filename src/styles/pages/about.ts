import styled from "styled-components";

export const AboutContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 32px auto;
  padding: 0 24px;
  text-align: justify;
  p {
    margin: 8px 0;
  }
  b,
  a,
  abbr {
    color: var(--primary);
  }
  abbr {
    cursor: help;
    text-underline-offset: 2px;
    @media (max-width: 900px) {
      cursor: default;
      text-decoration: none;
      &:after {
        content: " - " attr(title) ".";
      }
      &:hover {
        pointer-events: none;
      }
    }
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      width: 80%;
      &:nth-child(2n) {
        padding-left: 24px;
      }
      &:nth-child(2n + 1) {
        padding-right: 24px;
      }
    }
    @media (max-width: 700px) {
      flex-wrap: wrap;
      justify-content: center;
      p {
        width: 100%;
        &:nth-child(2n) {
          padding-left: 0;
        }
        &:nth-child(2n + 1) {
          padding-right: 0;
        }
      }
    }
  }
`;

export const SloganForCreateAccount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 650px;
  margin: 32px auto;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    text-align: left;
    line-height: 100%;
  }
`;
