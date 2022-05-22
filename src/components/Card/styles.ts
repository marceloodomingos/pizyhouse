import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 150px;
  background: linear-gradient(to right, black, var(--primary));
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  border-left: 10px solid var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  transition: var(--transition);
  transform-origin: top;
  cursor: default;
  .name {
    text-transform: uppercase;
    max-width: 180px;
    height: 25px;
    position: absolute;
    left: 16px;
    text-overflow: clip;
    overflow: hidden;
  }
  > header {
    display: flex;
    justify-content: space-between;
    .title {
      gap: 4px;
      > span {
        font-weight: bold;
      }
    }
  }
  > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    > img {
      max-width: 24px;
      filter: invert(1);
      &:last-child {
        max-width: 16px;
      }
    }
  }
  > footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 35px;
    > svg {
      fill: var(--white);
      width: 32px;
      position: absolute;
      right: 16px;
    }
  }
`;
