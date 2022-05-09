import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Icon404 from "/assets/images/404.svg";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container404 } from "../styles/pages/404";
import Link from "next/link";

const Error404: NextPage = ({
  actualState,
  loggedStatus,
  handleLoggedChange,
}: any) => {
  return (
    <>
      <Head>
        <title>PIZY House · Erro 404</title>
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

      <Navbar
        actualState={actualState}
        loggedStatus={loggedStatus}
        handleLoggedChange={handleLoggedChange}
      />
      <Container404>
        <div className="info">
          <span>O que você está fazendo aqui?!</span>
          <div className="phrases">
            <p>
              Que estranho! Parece que esse rumo não é tão fácil quanto os
              propósitos da PIZY, não é? Que tal tentar voltar ao início?
            </p>
          </div>
          <Link href="/">Voltar ao início</Link>
        </div>
        <div className="galaxy">
          <Image
            src={Icon404}
            alt="404 Galaxy Image"
            width="1000"
            height="550"
            layout="fixed"
          />
        </div>
      </Container404>
    </>
  );
};

export default Error404;
