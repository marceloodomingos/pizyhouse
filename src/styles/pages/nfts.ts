import styled, { keyframes } from "styled-components";

const bgInfinite = keyframes`
  from {
    background-position: 0%;
  }
  to {
    background-position: 150%;
  }
`;

export const NFTsPresentation = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 16px auto 0;
  gap: 48px;
  margin-bottom: 32px;
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    text-align: center;
    span {
      font-size: 300%;
      text-align: center;
    }
    .actions {
      width: 100%;
      max-width: 400px;
    }
  }
  @media (max-width: 500px) {
    padding: 0 24px;
    margin: 16px auto 0;
    text-align: center;
    > div {
      span {
        font-size: 250%;
      }
    }
  }
`;

export const NFTs = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px;
  gap: 16px;
  /* @media (max-width: 660px) {
    flex-direction: column;
  } */
`;

export const NFTCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-basis: 340px;
  flex-grow: 1;
  min-height: 30rem;
  height: 100%;
  background: var(--shape);
  border-radius: 4px;
  transition: var(--transition);
  overflow: hidden;
  .picture {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 350px;
    /* max-width: 350px; */
    width: 100%;
    min-height: 350px;
    max-height: 350px;
    height: 100%;
    line-height: 100%;
    text-transform: capitalize;
    overflow: hidden;
    transition: var(--transition-turtle);
    img {
      min-width: 350px;
      /* max-width: 350px; */
      width: 100%;
      min-height: 500px;
      max-height: 500px;
      height: 100%;
      border-radius: 4px 4px 0 0;
      object-fit: cover;
      pointer-events: none;
      transition: var(--transition-turtle);
    }
    &.notloaded {
      background: linear-gradient(
        to bottom,
        var(--primary),
        rgba(0, 0, 0, 0.25)
      );
    }
  }
  .info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 350px;
    height: max-content;
    width: 100%;
    gap: 8px;
    span {
      font-weight: bold;
      font-size: 16px;
      text-transform: capitalize;
      line-height: 100%;
      /* height: 100%;
      max-height: 48px;
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; */
    }
    .notfound {
      font-style: italic;
      color: var(--text);
    }
  }
  .about-nft {
    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2px;
      span {
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 100%;
        color: var(--white);
      }
      p {
        color: var(--text);
        font-size: 16px;
        height: max-content;
        width: 100%;
        line-height: 100%;
        text-align: left;
      }
      & + div {
        margin-top: 8px;
      }
    }
    > dt {
      display: flex;
      align-items: center;
      gap: 4px;
      color: var(--primary);
      font-weight: bold;
      font-size: 16px;
      text-transform: capitalize;
      line-height: 100%;
      border-image: linear-gradient(to right, var(--primary), transparent) 1;
      border-bottom: 1px solid;
      padding-bottom: 4px;
      margin: 8px 0;
      transition: var(--transition);
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .about-creator,
  .about-owner {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    gap: 4px;
    img {
      border-radius: 50%;
      width: 100%;
      max-width: 24px;
      height: 100%;
      max-height: 24px;
    }
    > dt {
      display: flex;
      align-items: center;
      gap: 4px;
      color: var(--primary);
      font-weight: bold;
      font-size: 16px;
      text-transform: capitalize;
      line-height: 100%;
      border-image: linear-gradient(to right, var(--primary), transparent) 1;
      border-bottom: 1px solid;
      padding-bottom: 4px;
      margin: 8px 0;
      transition: var(--transition);
      svg {
        width: 20px;
        height: 20px;
      }
    }
    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      color: var(--text);
    }
  }
  /* > img {
    min-width: 350px;
    max-width: 350px;
    width: 100%;
    min-height: 350px;
    max-height: 350px;
    height: 100%;
    border-radius: 4px 4px 0 0;
    pointer-events: none;
    object-fit: cover;
    overflow: hidden;
    transition: var(--transition);
    mask-image: linear-gradient(to top, transparent 0%, var(--primary) 100%);
  } */
  a,
  button {
    padding: 8px 16px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
    transition: var(--transition);
    animation: ${bgInfinite} 2s linear infinite;
    background-size: 300% 100%;
    background-image: linear-gradient(
      to right,
      var(--primary),
      var(--secondary),
      var(--tertiary),
      var(--secondary),
      var(--primary)
    );
    color: var(--white);
    min-width: 150px;
  }
  @media (max-width: 972px) {
    > img {
      width: 100%;
      max-width: unset;
    }
  }
  @media (max-width: 660px) {
    flex-direction: column;
    height: max-content;
    .picture,
    .picture > img {
      min-width: 350px;
      max-width: unset;
      width: 100%;
      min-height: 350px;
      max-height: unset;
      height: 100%;
    }
  }
  &:hover {
    /* box-shadow: 0 0 0 2px var(--white); */
    background: linear-gradient(to top, var(--primary), var(--black));
    .picture img {
      transform: scale(1.025);
      transform-origin: center;
    }
    dt {
      color: var(--white);
      border-image: linear-gradient(to right, var(--white), transparent) 1;
    }
    p {
      color: var(--white);
    }
    button {
      filter: contrast(1) grayscale(1);
    }
  }
`;
