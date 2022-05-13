import React from "react";
import Skeleton from ".";
import Shimmer from "./shimmer";
import { SkeletonCoinElement, SkeletonWrapper } from "./styles";

export const SkeletonWrapperElement = ({ children }: any) => {
  return <SkeletonWrapper>{children}</SkeletonWrapper>;
};

export const SkeletonCoin = () => {
  return (
    <>
      <SkeletonCoinElement>
        <div className="coin-skeleton">
          <div>
            <div className="info">
              <Skeleton type="coin-position" />
              <Skeleton type="coin-img" />
            </div>
            <div className="stats">
              <Skeleton type="coin-name" />
              <Skeleton type="coin-symbol" />
            </div>
          </div>
          <div>
            <Skeleton type="coin-price" />
            <Skeleton type="coin-variation" />
          </div>
        </div>
        <Skeleton type="coin-button" />
        <Shimmer />
      </SkeletonCoinElement>
    </>
  );
};
