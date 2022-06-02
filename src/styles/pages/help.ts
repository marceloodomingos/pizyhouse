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
  gap: 32px;
  width: 100%;
  max-width: 1120px;
  margin: 32px auto;
`;
