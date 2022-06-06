import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { MobileMenu, NavbarContainer, UserLinks } from "./styles";

import PHLogo from "../../assets/images/pizy.svg";
import PHLemon from "../../assets/pizy/logo.svg";
import Link from "next/link";
import {
  Bell,
  Gauge,
  Gear,
  PencilSimple,
  Question,
  SignOut,
  User,
} from "phosphor-react";
import { firebase, auth } from "~/services/firebase";
import AuthContext from "~/contexts/AuthContext";
import { useRouter } from "next/router";

interface NavbarProps {
  handleLoggedChange: (logged: boolean) => void;
}

export default function Navbar({ handleLoggedChange }: NavbarProps) {
  const dropdownUL = useRef(null);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  const mobileMenu = useRef(null);
  const currentUrl = location.pathname;

  function logOutFirebase() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        confirm("Deslogado com sucesso.");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const clickedOutside = (e) => {
    if (dropdownUL.current && !dropdownUL.current.contains(e.target)) {
      dropdownUL.current.classList.remove("dropdown-open");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, []);

  return (
    <>
      <NavbarContainer className={toggleMenu ? "open" : ""}>
        <div className="header">
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
              <button
                onClick={() => {
                  dropdownUL.current.classList.toggle("dropdown-open");
                }}
                aria-haspopup="listbox"
                aria-labelledby="exp_elem exp_button"
              >
                Sobre
                <i />
              </button>
              <ul ref={dropdownUL} className="dropdown">
                <Link href="/about-us">Sobre a PIZY</Link>
                <Link href="/about-market">Sobre o mercado</Link>
                <Link href="/our-team">Nossa equipe</Link>
              </ul>
            </li>
          </ul>
          <div
            className={
              user ? "account-actions" : "account-actions account-buttons"
            }
          >
            <>
              {!user ? (
                <>
                  <button
                    onClick={() => {
                      window.location.href = "/signin";
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
                    Criar Conta
                  </button>
                </>
              ) : (
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
                  <li id="user">
                    {user.avatar ? <img src={user.avatar} /> : <User />}
                    <ul className="dropdown">
                      <li
                        onClick={() => {
                          window.location.href = "/dashboard";
                        }}
                      >
                        <Gauge weight="bold" />
                        <Link href="/dashboard">Dashboard</Link>
                      </li>
                      <li
                        onClick={() => {
                          window.location.href = "/dashboard/profile";
                        }}
                      >
                        <PencilSimple weight="bold" />
                        <Link href="/dashboard/profile">Perfil</Link>
                      </li>
                      <li
                        onClick={() => {
                          logOutFirebase();
                        }}
                      >
                        <SignOut weight="bold" />
                        <a
                          onClick={() => {
                            logOutFirebase();
                          }}
                        >
                          Sair
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </>
          </div>
          <button
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            ref={mobileMenu}
            className="mobile-menu"
          >
            <div />
          </button>
        </div>
        <MobileMenu className={toggleMenu ? "open" : ""}>
          <ul>
            <li
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <a href="/">Início</a>
            </li>
            <li
              onClick={() => {
                window.location.href = "/topday";
              }}
            >
              <a href="/topday">Melhores do dia</a>
            </li>
            <li
              onClick={() => {
                window.location.href = "/nfts/";
              }}
            >
              <a href="/nfts/">NFTs</a>
            </li>
            <li
              onClick={() => {
                window.location.href = "/about-us";
              }}
            >
              <a href="/about-us">Sobre a PIZY</a>
            </li>
            <li
              onClick={() => {
                window.location.href = "/about-market";
              }}
            >
              <a href="/about-market">Sobre o Mercado</a>
            </li>
            <li
              onClick={() => {
                window.location.href = "/our-team";
              }}
            >
              <a href="/our-team">Nossa Equipe</a>
            </li>
            <div className="divider" />
            <UserLinks>
              {/* <h3>Usuário</h3> */}
              {!user ? (
                <>
                  <button
                    onClick={() => {
                      window.location.href = "/signin";
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
                    Criar Conta
                  </button>
                </>
              ) : (
                <>
                  <div className="user-actions">
                    <li
                      id="user"
                      onClick={() => {
                        window.location.href = "/dashboard";
                      }}
                    >
                      {user.avatar ? <img src={user.avatar} /> : <User />}
                    </li>
                    <div>
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
                        onClick={() => {
                          window.location.href = "/dashboard/notifications";
                        }}
                      >
                        <Link href="/dashboard/notifications" passHref>
                          <Bell />
                        </Link>
                      </li>
                    </div>
                  </div>
                </>
              )}
            </UserLinks>
          </ul>
        </MobileMenu>
      </NavbarContainer>
    </>
  );
}
