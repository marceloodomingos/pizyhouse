import React from "react";
import { SkeletonElement } from "./styles";

interface SkeletonProps {
  type: string;
}

const Skeleton = ({ type }: SkeletonProps) => {
  return <SkeletonElement className={type && type} />;
};

export default Skeleton;
