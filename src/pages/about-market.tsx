import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface AboutMarketProps {
  handleLoggedChange: () => void;
}

export default function AboutMarket({ handleLoggedChange }: AboutMarketProps) {
  return (
    <>
      <Head>
        <title>PIZY House · Sobre o Mercado</title>
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

      <Navbar handleLoggedChange={handleLoggedChange} />
      <main>
        <h1>Sobre o Mercado</h1>
      </main>
      <Footer />
    </>
  );
}
