import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--shape-light);
  position: absolute;
  padding: 1.5rem 2.3rem;
  z-index: 0;
  width: calc(100% - 80px);
  right: 0;
  height: max-content;
  transition: var(--transition);
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
  @media (max-width: 500px) {
    width: 100%;
  }
`;
