import styled from "styled-components";

export const SomeQuestions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 1120px;
  padding: 20px;
  margin: 0 auto;
`;

export const SingleDoubt = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--shape);
  padding: 24px;
  border-radius: 4px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 920px) {
      flex-wrap: wrap;
      img {
        width: 100%;
      }
    }
  }
  .info {
    padding: 24px;
    display: flex;
    flex-direction: column;
    line-height: 150%;
    width: 100%;
    > h2 {
      margin: 16px 0;
      > span {
        color: var(--primary);
      }
    }
    @media (max-width: 920px) {
      > h2 {
        text-align: center;
      }
      text-align: justify;
    }
  }
  .steps {
    display: flex;
    flex-direction: column;
    /* padding: 24px; */
    width: 100%;
    > p {
      line-height: 100%;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      &:before,
      &:after {
        margin: 0 16px;
        content: "";
        background: var(--shape-dark);
        height: 1px;
        width: 30%;
      }
    }
    a {
      color: var(--primary);
    }
    .step {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 24px;
      .step-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        line-height: 150%;
        text-align: justify;
        span {
          font-weight: bold;
          text-transform: uppercase;
        }
        p {
          & + p {
            margin-top: 8px;
          }
        }
        ul {
          padding-left: 24px;
          margin: 16px 0;
          text-align: justify;
          li {
            list-style-type: disc;
            margin: 8px 0;
          }
        }
        .with-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            width: 100%;
            max-width: 16px;
            fill: var(--white);
            pointer-events: none;
            &:last-child {
              max-width: 24px;
            }
          }
        }
        blockquote {
          margin-top: 16px;
          font-size: 12px;
          &:before {
            content: "Fonte:";
            font-weight: bold;
            margin-right: 4px;
            color: var(--pizy-yellow);
          }
          &:after {
            content: ".";
          }
          > a {
            color: var(--text);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
          @media (max-width: 920px) {
            text-align: right;
            width: 100%;
          }
        }
      }
      > li {
        margin: 0 12px 0 24px;
        font-size: 32px;
        color: var(--primary);
      }
    }
    > button {
      width: calc(100% - 24px);
      margin: 0 auto;
    }
  }
  img {
    width: 50%;
    pointer-events: none;
  }
  &:nth-child(2n) {
    .container {
      flex-direction: row-reverse;
      text-align: right;
    }
    img {
      transform: scaleX(-1);
    }
  }
  @media (max-width: 500px) {
    padding: 12px;
  }
`;

export const FAQ = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 1120px;
  padding: 20px;
  margin: 0 auto;
  > h4 {
    text-align: center;
    line-height: 125%;
    margin: 32px 0;
  }
`;

export const FAQQuestion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--shape);
  border-radius: 4px;
  overflow: hidden;
  text-align: justify;
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: bold;
    text-transform: capitalize;
    padding: 24px;
    background-color: var(--shape-dark);
    cursor: pointer;
    p {
      width: 80%;
      line-height: 125%;
      text-align: left;
    }
    svg {
      margin: 0 8px;
    }
  }
  > p {
    width: 100%;
    height: 100%;
    padding: 24px;
    color: var(--text);
  }
  > span {
    width: 100%;
    height: 100%;
    padding: 0 24px 24px;
  }
`;
