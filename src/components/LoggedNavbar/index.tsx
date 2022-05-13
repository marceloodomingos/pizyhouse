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
  handleLoggedChange: (logged: boolean) => void;
}

export default function LoggedNavbar({ handleLoggedChange }: NavbarProps) {
  return (
    <>
      <NavbarContainer className="active">
        <div className="header">
          <div className="account-actions">
            <>
              <li>
                <Link href="/dashboard/help" passHref>
                  <Question />
                </Link>
              </li>
              <li>
                <Link href="/dashboard/configurations" passHref>
                  <Gear />
                </Link>
              </li>
              <li>
                <Link href="/dashboard/notifications" passHref>
                  <Bell />
                </Link>
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
          </div>
        </div>
      </NavbarContainer>
    </>
  );
}
