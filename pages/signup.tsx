import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Banner, Features } from "../styles/pages/home";

import Bitcoin from "/assets/images/bitcoin.png";
import PizyHouse from "/assets/images/pizy-house.svg";
import { Coin } from "../styles/pages/topday";

const SignUp: NextPage = ({
  actualState,
  loggedStatus,
  handleLoggedChange,
}: any) => {
  return (
    <>
      <Head>
        <title>PIZY House · Registrar uma conta</title>
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
      <main>
        <h1>Registrar uma conta</h1>
      </main>
      <Footer />
    </>
  );
};

export default SignUp;
