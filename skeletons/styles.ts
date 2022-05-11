import styled, { keyframes } from "styled-components";

const loadingSkeleton = keyframes`
  0% { transform: translateX(-150%) }
  100% { transform: translateX(150%) }
`;

export const SkeletonWrapper = styled.div`
  max-width: 1120px;
  margin: auto;
  padding: 40px 20px;
`;

export const SkeletonElement = styled.div`
  background: var(--shape);
  margin: 4px;
  border-radius: 4px;
  height: 100px;
  width: 100%;
  &.text {
    width: 100%;
    height: 12px;
  }
  &.coin-position {
    background: var(--shape-light);
    width: 24px;
    height: 24px;
  }
  &.coin-img {
    width: 80px;
    height: 80px;
    background: var(--shape-light);
    border-radius: 50%;
  }
  &.coin-name {
    background: var(--shape-light);
    width: 250px;
    height: 24px;
  }
  &.coin-symbol {
    background: var(--shape-light);
    width: 100px;
    height: 24px;
  }
  &.coin-price {
    background: var(--shape-light);
    width: 180px;
    height: 24px;
  }
  &.coin-variation {
    background: var(--shape-light);
    width: 120px;
    height: 40px;
  }
  &.coin-button {
    background: var(--shape-light);
    width: 86.42px;
    height: 100%;
    margin: 0;
  }
`;

export const SkeletonCoinElement = styled.div`
  background: var(--shape);
  margin-top: 8px;
  border-radius: 4px;
  height: 150px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  .coin-skeleton {
    width: 100%;
    padding: 0 6px 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      .info {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .stats {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  &:first-child {
    height: 200px;
    margin-top: 0;
  }
`;

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${loadingSkeleton} 2s ease infinite;
`;

export const ShimmerLoading = styled.div`
  width: 50%;
  height: 100%;
  background: var(--shape-light-lowopacity);
  transform: skewX(-20deg);
`;
