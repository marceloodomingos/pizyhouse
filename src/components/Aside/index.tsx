/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useRef, useState } from "react";
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
  const currentUrl = location.pathname;
  const [toggleAside, setToggleAside] = useState(false);
  const mobileMenu = useRef(null);

  return (
    <>
      <AsideNavbar className={toggleAside ? "open" : ""}>
        <nav>
          <a id="logo" href="/dashboard">
            <Image src={PHLemon} alt="PIZY House Logo" width={64} height={46} />
          </a>
          <div>
            <li>
              <a
                title="Painel de Controle"
                className={currentUrl == "/dashboard" ? "active" : ""}
                href="/dashboard"
              >
                <Gauge />
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a
                title="Trocas"
                className={currentUrl == "/dashboard/trade" ? "active" : ""}
                href="/dashboard/trade"
              >
                <ArrowsClockwise />
                <p>Trocar</p>
              </a>
            </li>
            <li>
              <a
                title="Carteira"
                className={currentUrl == "/dashboard/wallet" ? "active" : ""}
                href="/dashboard/wallet"
              >
                <Wallet />
                <p>Carteira</p>
              </a>
            </li>
            <li>
              <a
                title="Analizar"
                className={currentUrl == "/dashboard/analyze" ? "active" : ""}
                href="/dashboard/analyze"
              >
                <TrendUp />
                <p>Analizar</p>
              </a>
            </li>
            <li>
              <a title="Coleções" className="disabled">
                <Stack />
                <p>Coleções</p>
              </a>
            </li>
          </div>
        </nav>
        <button
          onClick={() => {
            setToggleAside(!toggleAside);
          }}
          ref={mobileMenu}
          className="mobile-menu"
        >
          <div />
        </button>
      </AsideNavbar>
    </>
  );
}
