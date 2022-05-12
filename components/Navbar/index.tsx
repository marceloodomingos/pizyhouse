/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Image from "next/image";

import { NavbarContainer } from "./styles";

import PHLogo from "/assets/images/pizy.svg";
import PHLemon from "/assets/pizy/logo.svg";
import Link from "next/link";
import {
  Bell,
  Gear,
  PencilSimple,
  Question,
  SignOut,
  User,
} from "phosphor-react";

interface NavbarProps {
  actualState: boolean;
  loggedStatus: boolean;
  handleLoggedChange: (logged: boolean) => void;
}

export default function Navbar({
  actualState,
  loggedStatus,
  handleLoggedChange,
}: NavbarProps) {
  return (
    <>
      <NavbarContainer className={actualState ? "active" : ""}>
        <div className={actualState ? "header app" : "header"}>
          {!loggedStatus && (
            <a id="logo" href="/">
              <div>
                <Image
                  src={PHLemon}
                  alt="PIZY House Logo"
                  width={64}
                  height={46}
                />
              </div>
              <div>
                <Image
                  src={PHLogo}
                  alt="PIZY House Logo"
                  width={80}
                  height={64}
                />
              </div>
            </a>
          )}
          {!loggedStatus && (
            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/topday">Melhores do dia</Link>
              </li>
              <li>
                <Link href="/nfts/">NFTs</Link>
              </li>
              <li className="options">
                <a>
                  Sobre
                  <i />
                </a>
                <ul className="dropdown">
                  <Link href="/about-us">Sobre a PIZY</Link>
                  <Link href="/about-market">Sobre o Mercado</Link>
                </ul>
              </li>
            </ul>
          )}
          <div className="account-actions">
            {/* {!loggedStatus ? (
              <>
                <button
                  onClick={() => {
                    window.location.href = "/dashboard";
                    handleLoggedChange(true);
                  }}
                  className="signin"
                >
                  Entrar
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                  className="signup"
                >
                  Criar conta
                </button>
              </>
            ) : (
              <>
                <li>
                  <Question />
                </li>
                <li>
                  <Gear />
                </li>
                <li>
                  <Bell />
                </li>
                <li>
                  <User id="user" />
                  <ul className="dropdown">
                    <li>
                      <PencilSimple weight="bold" />
                      <Link href="/dashboard/profile">Perfil</Link>
                    </li>
                    <li>
                      <SignOut weight="bold" />
                      <button
                        onClick={() => {
                          handleLoggedChange(false);
                          window.location.href = "/";
                        }}
                      >
                        Sair
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            )} */}
            {!loggedStatus && (
              <>
                <button
                  onClick={() => {
                    window.location.href = "/dashboard";
                    handleLoggedChange(true);
                  }}
                  className="signin"
                >
                  Entrar
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                  className="signup"
                >
                  Criar conta
                </button>
              </>
            )}
          </div>
        </div>
      </NavbarContainer>
    </>
  );
}
