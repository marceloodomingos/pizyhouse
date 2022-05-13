import React from "react";
import Image from "next/image";

import { SloganContainer } from "./styles";

import PHLogo from "../../assets/images/pizy.svg";
import Link from "next/link";

interface SloganProps {
  centered?: boolean;
  children: React.ReactNode;
}

const Slogan = ({ children, ...props }: SloganProps) => {
  return (
    <>
      <SloganContainer {...props}>{children}</SloganContainer>
    </>
  );
};

export default Slogan;
