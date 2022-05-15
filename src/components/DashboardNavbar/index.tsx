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

  function logOutFirebase() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        confirm("Deslogado com sucesso");
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
              {user.name && (
                <p>
                  Olá, <b>{user.name.split(" ")[0]}</b>!
                </p>
              )}
              <li id="user">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} />
                ) : (
                  <User />
                )}
                <ul className="dropdown">
                  <li>
                    <House weight="bold" />
                    <Link href="/">Início</Link>
                  </li>
                  <li>
                    <PencilSimple weight="bold" />
                    <Link href="/dashboard/profile">Perfil</Link>
                  </li>
                  <li>
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
