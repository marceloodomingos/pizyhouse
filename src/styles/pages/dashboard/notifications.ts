import styled from "styled-components";

export const NotificationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 1010px;
  margin: 0px auto;
`;

export const NotificationItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: var(--shape);
  width: 100%;
  height: 100%;
  border-radius: 4px;
  padding: 24px;
  overflow: hidden;
  > span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
  }
  > p {
    text-align: justify;
    color: var(--text);
    width: 100%;
    padding-right: 100px;
    > a {
      color: var(--primary);
    }
    > b {
      color: var(--pizy-yellow);
    }
  }
  > i {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  &.up {
    border-left: 10px solid var(--success);
  }
  &.down {
    border-left: 10px solid var(--error);
  }
  &:hover {
    background: linear-gradient(to left, rgba(130, 87, 229, 0.1), transparent);
  }
  @media (max-width: 800px) {
    > p {
      padding: unset;
    }
    > i img {
      transform: translateX(50%);
    }
  }
`;
