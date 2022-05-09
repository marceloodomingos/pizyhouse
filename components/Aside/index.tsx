/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";

import { AsideNavbar } from "./styles";

import PHLogo from "/assets/images/pizy.svg";
import PHLemon from "/assets/pizy/logo.svg";

import {
  ArrowsClockwise,
  Gauge,
  Stack,
  TrendUp,
  Wallet,
  Warning,
} from "phosphor-react";

export default function Aside() {
  return (
    <>
      <AsideNavbar>
        <a id="logo" href="/">
          <a>
            <Image src={PHLemon} alt="PIZY House Logo" width={64} height={46} />
          </a>
          <a>
            <Image src={PHLogo} alt="PIZY House Logo" width={80} height={64} />
          </a>
        </a>
        <div>
          <li>
            <a href="/dashboard">
              <Gauge />
              Painel de controle
            </a>
          </li>
          <li>
            <a href="/dashboard/trade">
              <ArrowsClockwise />
              Trocar
            </a>
          </li>
          <li>
            <a href="/dashboard/wallet">
              <Wallet />
              Carteira
            </a>
          </li>
          <li>
            <a href="/dashboard/analyze">
              <TrendUp />
              Analizar
            </a>
          </li>
          <li>
            <a href="/dashboard/collections">
              <Stack />
              Coleções
            </a>
          </li>
          <li>
            <a href="/dashboard/report">
              <Warning />
              Reportar
            </a>
          </li>
        </div>{" "}
        <a id="logo" href="/">
          <a>
            <Image src={PHLemon} alt="PIZY House Logo" width={64} height={46} />
          </a>
          <a>
            <Image src={PHLogo} alt="PIZY House Logo" width={80} height={64} />
          </a>
        </a>
      </AsideNavbar>
    </>
  );
}
