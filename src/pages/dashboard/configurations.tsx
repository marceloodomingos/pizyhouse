import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import Aside from "../../components/Aside";
import FooterApp from "../../components/FooterApp";
import DashboardNavbar from "../../components/DashboardNavbar";
import { MainApp } from "../../styles/pages/dashboard";
import { useRouter } from "next/router";
import { auth } from "~/services/firebase";
import LoadingCircle from "~/components/Loading";

interface ConfigurationsPageProps {
  handleLoggedChange: () => void;
}

export default function Configurations({
  handleLoggedChange,
}: ConfigurationsPageProps) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

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
            <title>PIZY House · Configurações</title>
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
              <h1>Configurações</h1>
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
