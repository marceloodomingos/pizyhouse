import styled from "styled-components";

export const MainApp = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding-left: 80px;
  .container {
    padding: 0 30px 60px 30px;
    > h1 {
      text-align: center;
      margin-bottom: 16px;
    }
  }
  @media (max-width: 500px) {
    padding-left: 0;
    .container {
      padding: 0 30px 60px 30px;
      margin-top: 100px;
    }
  }
`;
