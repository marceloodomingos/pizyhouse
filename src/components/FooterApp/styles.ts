import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--shape-light);
  position: absolute;
  /* padding: 1.5rem 2.5rem; */
  z-index: 0;
  width: calc(100% - 80px);
  right: 0;
  height: max-content;
  transition: var(--transition);
  > footer {
    background: var(--shape-light);
  }
  > div {
    display: none;
  }
  @media (max-width: 500px) {
    width: 100%;
    /* padding: 1.5rem 0.5rem; */
  }
`;
