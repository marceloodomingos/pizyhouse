import styled from "styled-components";

export const AnchorLink = styled.a`
  display: inline-block;
  height: 5vh;
  margin-top: -5vh;
`;

export const DocsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 1120px;
  padding: 20px;
  margin: 0 auto;
  > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 100%;
    background: var(--shape);
    border-radius: 4px;
    cursor: default;
    overflow: hidden;
    user-select: none;
    color: var(--text);
    > p {
      margin: 16px 0;
    }
    > span {
      text-align: center;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      padding: 24px;
      min-height: 64px;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > p {
        height: max-content;
      }
      & + div {
        border-top: 1px solid var(--shape-dark);
      }
      @media (max-width: 700px) {
        flex-direction: column;
      }
    }
  }
  .acknowledgments {
    text-align: justify;
    > p {
      padding: 24px;
    }
    > span {
      padding: 24px;
      background: var(--shape-dark);
      width: 100%;
      height: 100%;
      min-height: 64px;
    }
  }
`;
