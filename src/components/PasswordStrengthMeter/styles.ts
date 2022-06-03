import styled from "styled-components";

export const AboutPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProgressBar = styled.div`
  height: 10px;
  width: 100%;
  max-width: 500px;
  display: block;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
  background: var(--shape);
`;

export const ShowProgress = styled.div`
  height: 10px;
  width: 100%;
  display: block;
  transition: var(--transition-low);
`;
