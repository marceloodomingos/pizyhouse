import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BGContent } from "~/components/BGContent/styles";
import Link from "next/link";

interface OurTeamProps {
  handleLoggedChange: () => void;
}

export default function OurTeam({ handleLoggedChange }: OurTeamProps) {
  return (
    <>
      <Head>
        <title>PIZY House · Nossa Equipe</title>
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
        <h1>Nossa Equipe</h1>
      </main>
      <Footer />
      <BGContent />
    </>
  );
}
