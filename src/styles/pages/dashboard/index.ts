import styled from "styled-components";

export const MainApp = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding-left: 80px;
  .container {
    padding: 60px 30px 60px 30px;
    > h1 {
      text-align: center;
      margin-bottom: 16px;
    }
  }
`;
