import type { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import Aside from "../../components/Aside";
import FooterApp from "../../components/FooterApp";
import DashboardNavbar from "../../components/DashboardNavbar";
import { MainApp } from "../../styles/pages/dashboard";
import { firebase, auth } from "~/services/firebase";
import { useRouter } from "next/router";
import { AboutUser, ProfileContainer } from "~/styles/pages/dashboard/profile";
import {
  Clock,
  Envelope,
  IdentificationCard,
  LockKeyOpen,
  PencilCircle,
  UserCircle,
  UserFocus,
} from "phosphor-react";
import LoadingCircle from "~/components/Loading";

interface ProfilePageProps {
  handleLoggedChange: () => void;
}

export default function Profile({ handleLoggedChange }: ProfilePageProps) {
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

  function deleteAccount() {
    if (confirm("Deseja realmente deletar a sua conta?")) {
      firebase.auth().currentUser.delete();
      alert("Conta deletada com sucesso.");
      router.push("/");
    }
  }

  function formatDays(props: any) {
    const convertedString = props
      .replace("Mon", "Segunda-feira")
      .replace("Tue", "Terça-feira")
      .replace("Wed", "Quarta-feira")
      .replace("Thu", "Quinta-feira")
      .replace("Fri", "Sexta-feira")
      .replace("Sat", "Sábado")
      .replace("Sun", "Domingo")
      .replace("Jan", "Janeiro")
      .replace("Feb", "Fevereiro")
      .replace("Mar", "Março")
      .replace("Apr", "Abril")
      .replace("May", "Maio")
      .replace("Jun", "Junho")
      .replace("Jul", "Julho")
      .replace("Aug", "Agosto")
      .replace("Sep", "Setembro")
      .replace("Oct", "Outubro")
      .replace("Nov", "Novembro")
      .replace("Dec", "Dez")
      .replace(/,/g, " -")
      .split("");
    console.log(convertedString);

    return convertedString;
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
            <title>PIZY House · Seu perfil</title>
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
              <h1>Seu perfil</h1>
              <AboutUser>
                {user && (
                  <>
                    <ProfileContainer>
                      <div className="avatar">
                        {user.avatar ? (
                          <div className="user">
                            <img src={user.avatar} />
                            <UserFocus />{" "}
                          </div>
                        ) : (
                          <UserCircle />
                        )}
                      </div>
                      <div className="info">
                        <div>
                          {user.name && (
                            <>
                              <dt>
                                <PencilCircle />
                                Nome do usuário
                              </dt>
                              <p>{user.name}</p>
                            </>
                          )}
                          <dt>
                            <Envelope />
                            E-mail
                          </dt>
                          <p>{user.email}</p>
                        </div>
                        <button
                          onClick={() => {
                            logOutFirebase();
                            window.location.href = "/";
                          }}
                        >
                          Sair da Conta
                        </button>
                      </div>
                    </ProfileContainer>
                    <ProfileContainer>
                      <div className="info">
                        <h2>Metadados</h2>
                        <div>
                          <dt>
                            <Clock />
                            Data de criação da conta
                          </dt>
                          <p>{formatDays(user.metadata.creationTime)}</p>
                          <dt>
                            <LockKeyOpen />
                            Último login realizado
                          </dt>
                          <p>{formatDays(user.metadata.lastSignInTime)}</p>
                          <dt>
                            <IdentificationCard />
                            Seu ID
                          </dt>
                          <p>{user.id}</p>
                        </div>
                      </div>
                    </ProfileContainer>
                    <ProfileContainer danger>
                      <div className="info danger-zone">
                        <h2>Responsabilidade</h2>
                        <div className="about">
                          <p>
                            Para que a exclusão da conta seja concluída com
                            sucesso aqui na PIZY, é recomendado sair e entrar
                            novamente da mesma.
                          </p>
                          <p className="warn">
                            Deseja deletar sua conta? A ação é irreversível.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            deleteAccount();
                          }}
                        >
                          Deletar Conta
                        </button>
                      </div>
                    </ProfileContainer>
                  </>
                )}
              </AboutUser>
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
