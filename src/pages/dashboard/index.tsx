import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import AuthContext from "~/contexts/AuthContext";
import Aside from "../../components/Aside";
import FooterApp from "../../components/FooterApp";
import {
  Banner,
  CardBox,
  MainApp,
  RecentStats,
} from "../../styles/pages/dashboard";
import DashboardNavbar from "../../components/DashboardNavbar";
import { firebase, auth } from "~/services/firebase";
import { useRouter } from "next/router";
import LoadingCircle from "~/components/Loading";
import AbstractHead from "~/assets/images/abstract-head.png";
import { User } from "phosphor-react";

interface DashboardPageProps {
  handleLoggedChange: () => void;
}

export default function Dashboard({ handleLoggedChange }: DashboardPageProps) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  async function logOutFirebase() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert("Deslogado com sucesso.");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;
      } else {
        router.push("/signin");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {user ? (
        <>
          <Head>
            <title>PIZY House · Painel de controle</title>
            <meta
              name="description"
              content="A empresa tem como foco a criação de novos investidores que no futuro podem influenciar no mercado de ações com a utilização de moedas criptografadas e tudo sobre esse novo mundo tecnológico."
            />
            <link rel="icon" href="/favicon.png" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            ></meta>
          </Head>

          <DashboardNavbar handleLoggedChange={handleLoggedChange} />
          <Aside />
          <MainApp>
            <div className="container">
              <h1>Dashboard</h1>
              <Banner>
                <div className="content">
                  <div className="info">
                    <p>
                      Descubra, colete, compre e venda <span>NFTs</span>.
                    </p>
                    <div className="actions">
                      <button
                        onClick={() => {
                          window.location.href = "/nfts";
                        }}
                      >
                        Descobrir
                      </button>
                      <button
                        onClick={() => {
                          window.location.href = "/nfts";
                        }}
                      >
                        Ver mais
                      </button>
                    </div>
                  </div>
                  <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/abstract-head.png" />
                </div>
              </Banner>
              <RecentStats>
                <CardBox
                  user
                  onClick={() => {
                    window.location.href = "/dashboard/profile";
                  }}
                >
                  <div className="container">
                    <h3>Seu perfil</h3>
                    <div className="content">
                      {user.avatar ? (
                        <div className="avatar">
                          <img src={user.avatar} />
                        </div>
                      ) : (
                        <div className="avatar">
                          <User />
                        </div>
                      )}
                      {user.name ? (
                        <p>
                          Você está logado como <b>{user.name.split(" ")[0]}</b>
                          .
                        </p>
                      ) : (
                        <p>
                          Você está logado como <b>{user.email}</b>.
                        </p>
                      )}
                    </div>
                  </div>
                  <footer
                    onClick={() => {
                      logOutFirebase();
                    }}
                  >
                    <p>
                      Não é{" "}
                      {user.name ? (
                        <b>{user.name.split(" ")[0]}</b>
                      ) : (
                        <b>{user.email}</b>
                      )}
                      ? Troque de conta aqui.
                    </p>
                  </footer>
                </CardBox>
                <CardBox>
                  <div className="container">
                    <h3>Crescimento da plataforma</h3>
                  </div>
                </CardBox>
                <CardBox>
                  <div className="container">
                    <h3>Crescimento da plataforma</h3>
                  </div>
                </CardBox>
                <CardBox>
                  <div className="container">
                    <h3>Crescimento da plataforma</h3>
                  </div>
                </CardBox>
              </RecentStats>
            </div>
          </MainApp>
          <FooterApp />
        </>
      ) : (
        <main className="loadingApp">
          <LoadingCircle />
        </main>
      )}
    </>
  );
}
