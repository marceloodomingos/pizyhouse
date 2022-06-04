import styled from "styled-components";

export const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  margin: 0 auto;
  padding: 24px;
  width: 100%;
  max-width: 1120px;
  @media (max-width: 1010px) {
    margin-top: -64px;
  }
  @media (max-width: 679px) {
    margin: 0 auto;
  }
`;

export const TeamMember = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-basis: 300px;
  height: 100%;
  overflow: visible;
  padding-top: 4%;
  @media (max-width: 1010px) {
    padding-top: 14%;
  }
  @media (max-width: 500px) {
    padding-top: 16%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    font-weight: bold;
    position: relative;
    width: 100%;
    padding-top: 100%;
    height: 100%;
    /* max-height: 320px; */
    overflow: visible;
    background: var(--shape);
    border-radius: 4px 4px 0 0;
    background: radial-gradient(
      circle at right top,
      var(--primary),
      var(--secondary),
      var(--tertiary),
      var(--shape)
    );
    img {
      height: max-content;
      /* max-height: 650px; */
      padding-top: 0.5rem;
      width: 100%;
      object-fit: cover;
      pointer-events: none;
      user-select: none;
      position: absolute;
      bottom: 0;
    }
  }
  .social {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    svg {
      width: 36px;
      height: 36px;
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
      max-width: 36px;
      height: 100%;
      max-height: 36px;
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
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--shape-dark);
    background: var(--shape-light);
    padding: 16px;
    width: 100%;
    height: 100%;
    /* gap: 8px; */
    border-radius: 0 0 4px 4px;
    .about {
      line-height: 125%;
      > span {
        font-weight: bold;
        text-transform: capitalize;
      }
    }
    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      .about {
        text-align: center;
        margin-bottom: 16px;
      }
    }
  }
  &:nth-child(2n + 1) .info {
    background: radial-gradient(
      circle at right top,
      var(--primary),
      var(--secondary),
      var(--quartenary),
      var(--shape)
    );
  }
`;
