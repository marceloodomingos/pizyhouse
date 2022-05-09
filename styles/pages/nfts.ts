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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-basis: calc(100% / 3.1);
  /* flex-grow: 1; */
  /* min-height: 400px; */
  /* height: max-content; */
  height: 450px;
  background: var(--shape);
  border-radius: 4px;
  transition: var(--transition);
  .info {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    gap: 8px;
    span {
      font-weight: bold;
      font-size: 16px;
      line-height: 100%;
    }
    p {
      text-align: justify;
      font-size: 14px;
      height: 100%;
      width: 100%;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--text);
    }
  }
  > img {
    width: 100%;
    height: 100%;
    min-height: 300px;
    /* max-height: 300px; */
    border-radius: 4px 4px 0 0;
    pointer-events: none;
    object-fit: cover;
    transition: var(--transition);
    /* mask-image: linear-gradient(to top, transparent 2.5%, black 100%); */
  }
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
  &:hover {
    box-shadow: 0 0 0 2px var(--primary);
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(12),
  &:nth-child(14),
  &:nth-child(27),
  &:nth-child(28),
  &:nth-child(29),
  &:nth-child(30),
  &:nth-child(31),
  &:nth-child(32) {
    display: none;
  }
`;
