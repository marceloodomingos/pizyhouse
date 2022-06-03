import styled from "styled-components";

export const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 32px auto;
  padding: 24px;
  width: 100%;
  max-width: 1120px;
`;

export const TeamMember = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 300px;
  border-radius: 4px;
  flex-basis: 300px;
  background: var(--shape);
  overflow: hidden;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-weight: bold;
    padding: 16px;
    img {
      position: relative;
      min-width: 250px;
      width: 100%;
      max-width: 250px;
      min-height: 250px;
      height: 100%;
      max-height: 250px;
      border-radius: 50%;
      background: linear-gradient(
        to top right,
        var(--primary),
        var(--background)
      );
      padding: 8px;
      object-fit: cover;
      pointer-events: none;
    }
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 16px 0;
    svg {
      width: 42px;
      height: 42px;
      padding: 8px;
      fill: var(--white);
      color: var(--white);
      transition: var(--transition);
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: var(--shape-dark);
      }
    }
    a {
      width: 100%;
      height: 100%;
      max-height: 42px;
      position: relative;
      & + a {
        display: flex;
        &:before {
          content: "";
          display: inline-flex;
          border-image: linear-gradient(
              to top,
              transparent 0%,
              var(--shape-dark) 25%,
              var(--shape-dark) 75%,
              transparent 100%
            )
            1;
          border-left: 1px solid;
          box-sizing: border-box;
          line-height: 0;
          cursor: default;
          pointer-events: none;
          position: absolute;
          left: -8px;
          width: 2px;
          height: 100%;
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--shape-dark);
    padding: 24px;
    width: 100%;
    > span {
      font-weight: bold;
      text-transform: capitalize;
    }
  }
`;
