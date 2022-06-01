import styled from "styled-components";

export const ProfileItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin: 32px 0;
`;

export const ProfileCard = styled.div`
  width: 100%;
  border-radius: 4px;
  background: var(--shape);
  flex-basis: 500px;
  flex-grow: 1;
  cursor: pointer;
  > header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 100%;
    padding: 24px;
    height: 100px;
    border-bottom: 1px solid var(--shape-dark);
    overflow: hidden;
    p {
      text-transform: capitalize;
    }
    span {
      text-transform: uppercase;
      color: var(--pizy-yellow);
      transition: var(--transition);
    }
    > img {
      position: absolute;
      right: 0;
      top: 0;
      height: 100px;
      pointer-events: none;
      transition: var(--transition);
      mask-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.25),
        rgba(0, 0, 0, 0)
      );
    }
    &:hover {
      /* span {
        color: var(--text);
      } */
      > img {
        transform: scale(1.15);
      }
    }
  }
  > .container {
    padding: 24px;
    color: var(--text);
  }
`;

export const QuickActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 32px 0;
`;

export const ActionCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  /* background: var(--shape); */
  background: transparent;
  border: 1px solid var(--primary);
  flex-basis: 200px;
  width: 100%;
  height: 200px;
  max-width: 200px;
  flex-grow: 1;
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px 24px;
    height: 200px;
    font-weight: bold;
    line-height: 100%;
    > svg {
      width: 40px;
      height: 40px;
    }
  }
  .bg {
    /* display: none; */
    position: absolute;
    bottom: -5px;
    right: -35%;
    transition: var(--transition);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &:hover {
    background: linear-gradient(to left, transparent, var(--primary-hover));
    > .bg {
      right: -30%;
    }
  }
  @media (max-width: 700px) {
    flex-basis: 100%;
    height: 100%;
    width: 50%;
    max-width: unset;
    .bg {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, transparent, var(--primary-hover));
      img {
        float: right;
        width: 100%;
        height: 200px;
        mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0)
        );
      }
    }
  }
`;
