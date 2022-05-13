import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import FooterApp from "../../components/FooterApp";
import LoggedNavbar from "../../components/LoggedNavbar";
import { MainApp } from "../../styles/pages/dashboard";

interface ProfilePageProps {
  handleLoggedChange: () => void;
}

export default function Profile({ handleLoggedChange }: ProfilePageProps) {
  return (
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

      <LoggedNavbar handleLoggedChange={handleLoggedChange} />
      <Aside />
      <MainApp>
        <div className="container">
          <h1>Seu perfil</h1>
        </div>
      </MainApp>
      <FooterApp />
    </>
  );
}
