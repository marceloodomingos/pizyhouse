import React, { useContext } from "react";
import { firebase, auth } from "~/services/firebase";

import { NavbarContainer } from "./styles";

import Link from "next/link";
import {
  Bell,
  Gear,
  House,
  PencilSimple,
  Question,
  SignOut,
  User,
} from "phosphor-react";
import AuthContext from "~/contexts/AuthContext";

interface NavbarProps {
  handleLoggedChange: (logged: boolean) => void;
}

export default function DashboardNavbar({ handleLoggedChange }: NavbarProps) {
  const { user } = useContext(AuthContext);
  const currentUrl = location.pathname;

  function logOutFirebase() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        confirm("Deslogado com sucesso.");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <NavbarContainer className="active">
        <div className="header">
          <div className="account-actions">
            <>
              <li
                onClick={() => {
                  window.location.href = "/help";
                }}
              >
                <Link href="/help" passHref>
                  <Question />
                </Link>
              </li>
              <li
                onClick={() => {
                  window.location.href = "/dashboard/configurations";
                }}
              >
                <Link href="/dashboard/configurations" passHref>
                  <Gear />
                </Link>
              </li>
              <li
                className={
                  currentUrl == "/dashboard/notifications" ? "" : "warn"
                }
                onClick={() => {
                  window.location.href = "/dashboard/notifications";
                }}
              >
                <Link href="/dashboard/notifications" passHref>
                  <Bell />
                </Link>
              </li>
              {user.name && (
                <p id="user-name">
                  Olá, <b>{user.name.split(" ")[0]}</b>!
                </p>
              )}
              <div className="for-mobile-shortcut">
                <li
                  onClick={() => {
                    window.location.href = "/dashboard/configurations";
                  }}
                >
                  <Link href="/dashboard/configurations" passHref>
                    <Gear />
                  </Link>
                </li>
                <li
                  className={
                    currentUrl == "/dashboard/notifications" ? "" : "warn"
                  }
                  onClick={() => {
                    window.location.href = "/dashboard/notifications";
                  }}
                >
                  <Link href="/dashboard/notifications" passHref>
                    <Bell />
                  </Link>
                </li>
              </div>
              <li id="user" className={user.name ? "user-name" : ""}>
                {user.avatar ? <img src={user.avatar} /> : <User />}
                <ul className="dropdown">
                  <li
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  >
                    <House weight="bold" />
                    <Link href="/">Início</Link>
                  </li>
                  <li
                    onClick={() => {
                      window.location.href = "/dashboard/profile";
                    }}
                  >
                    <PencilSimple weight="bold" />
                    <Link href="/dashboard/profile">Perfil</Link>
                  </li>
                  <div className="for-mobile">
                    <li
                      onClick={() => {
                        window.location.href = "/help";
                      }}
                    >
                      <Question weight="bold" />
                      <Link href="/help">Ajuda</Link>
                    </li>
                  </div>
                  <li
                    onClick={() => {
                      logOutFirebase();
                      window.location.href = "/";
                    }}
                  >
                    <SignOut weight="bold" />
                    <button
                      onClick={() => {
                        logOutFirebase();
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
