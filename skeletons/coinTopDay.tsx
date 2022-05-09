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
        <Skeleton type="position" />
        <Skeleton type="img" />
        <div>
          <Skeleton type="coin-name" />
          <Skeleton type="coin-symbol" />
        </div>
        <Shimmer />
      </SkeletonCoinElement>
    </>
  );
};
