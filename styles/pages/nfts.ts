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
  margin: 0 auto;
  gap: 48px;
  margin-bottom: 32px;
`;

export const NFTs = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px;
  gap: 16px;
`;

export const NFTCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-basis: 500px;
  flex-grow: 1;
  height: 400px;
  background: var(--shape);
  border-radius: 4px;
  transition: var(--transition);
  overflow: hidden;
  .notloaded-picture {
    width: 100%;
    max-width: 40%;
    height: 100%;
    transition: var(--transition);
    background: linear-gradient(to bottom, var(--primary), rgba(0, 0, 0, 0.25));
    position: relative;
    &:after {
      content: "Imagem não encontrada.";
      position: absolute;
      top: 45%;
      left: 3.5%;
      line-height: 100%;
      text-align: center;
    }
  }
  .info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    width: 100%;
    gap: 8px;
    > span {
      font-weight: bold;
      font-size: 24px;
      text-transform: capitalize;
      line-height: 100%;
      height: 100%;
      max-height: 48px;
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
        text-align: justify;
      }
      & + div {
        margin-top: 8px;
      }
    }
    > dt {
      color: var(--primary);
      font-weight: bold;
      font-size: 16px;
      text-transform: capitalize;
      line-height: 100%;
      border-image: linear-gradient(to right, var(--primary), transparent) 1;
      border-bottom: 1px solid;
      padding-bottom: 4px;
      margin: 8px 0;
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
      color: var(--primary);
      font-weight: bold;
      font-size: 16px;
      text-transform: capitalize;
      line-height: 100%;
      border-image: linear-gradient(to right, var(--primary), transparent) 1;
      border-bottom: 1px solid;
      padding-bottom: 4px;
      margin: 8px 0;
    }
    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      color: var(--text);
    }
  }
  > img {
    width: 100%;
    max-width: 40%;
    height: 100%;
    border-radius: 0 4px 4px 0;
    pointer-events: none;
    object-fit: cover;
    transition: var(--transition);
    /* mask-image: linear-gradient(to left, transparent 0%, var(--black) 100%); */
  }
  a {
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
  @media (max-width: 600px) {
    flex-direction: column;
    height: max-content;
    > img {
      width: 100%;
      max-width: unset;
    }
  }
  &:hover {
    box-shadow: 0 0 0 2px var(--primary);
  }
`;
