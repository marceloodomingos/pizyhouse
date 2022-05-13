/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Image from "next/image";

import { AsideNavbar } from "./styles";

import PHLogo from "../../assets/images/pizy.svg";
import PHLemon from "../../assets/pizy/logo.svg";

import {
  ArrowsClockwise,
  Gauge,
  Stack,
  TrendUp,
  Wallet,
  Warning,
} from "phosphor-react";

export default function Aside() {
  const [toggleAside, setToggleAside] = useState(false);

  return (
    <>
      <AsideNavbar>
        <a id="logo" href="/dashboard">
          <Image src={PHLemon} alt="PIZY House Logo" width={64} height={46} />
        </a>
        <div>
          <li>
            <a href="/dashboard">
              <Gauge />
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="/dashboard/trade">
              <ArrowsClockwise />
              <p>Trocar</p>
            </a>
          </li>
          <li>
            <a href="/dashboard/wallet">
              <Wallet />
              <p>Carteira</p>
            </a>
          </li>
          <li>
            <a href="/dashboard/analyze">
              <TrendUp />
              <p>Analizar</p>
            </a>
          </li>
          <li>
            <a href="/dashboard/collections">
              <Stack />
              <p>Coleções</p>
            </a>
          </li>
          <li>
            <a href="/dashboard/report">
              <Warning />
              <p>Reportar</p>
            </a>
          </li>
        </div>
      </AsideNavbar>
    </>
  );
}
