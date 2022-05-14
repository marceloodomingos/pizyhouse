import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--shape);
  width: 100%;
  max-width: 500px;
  padding: 24px 12px;
  border-radius: 4px;
  margin: 0 auto;
  .avatar {
    position: relative;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    .user {
      img {
        width: 100%;
        border-radius: 50%;
      }
      svg {
        position: absolute;
        display: none;
        width: 50px;
        height: 50px;
      }
      &:hover {
        svg {
          display: block;
        }
      }
    }
    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;
