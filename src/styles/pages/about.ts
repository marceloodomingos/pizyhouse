import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 1120px;
  padding: 20px;
  margin: 16px auto;
  border-radius: 4px;
  text-align: justify;
  p {
    background: var(--shape);
    padding: 20px;
    border-radius: 4px;
    & + p {
      margin-top: 16px;
    }
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
    width: 100%;
    p {
      /* width: 80%; */
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
  .merchant {
    text-align: center;
    margin: 16px auto;
    width: 100%;
    border-radius: 4px;
    padding: 24px;
    font-weight: bold;
    background: radial-gradient(
      circle at right top,
      var(--primary),
      var(--secondary),
      var(--quartenary),
      var(--background)
    );
  }
`;

export const SloganForCreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 32px auto;
  border-radius: 4px;
  background: radial-gradient(
    circle at right top,
    var(--background),
    var(--primary),
    var(--secondary),
    var(--background)
  );
  padding: 32px 16px;
  gap: 32px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 100%;
    font-size: 24px;
    max-width: 650px;
    gap: 16px;
  }
  button {
    width: 100%;
    max-width: 300px;
  }
`;
