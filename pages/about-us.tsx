import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PHLemon from "/assets/pizy/logo.svg";
import { AboutUS } from "../styles/pages/about-us";
import Link from "next/link";

const AboutUs: NextPage = ({
  actualState,
  loggedStatus,
  handleLoggedChange,
}: any) => {
  return (
    <>
      <Head>
        <title>PIZY House · Sobre a PIZY</title>
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
        <h1>Sobre a PIZY</h1>
        <AboutUS>
          <p>
            A <b>PIZY House</b> nasceu na FATEC de Jahu - uma faculdade de
            tecnologia - a partir de uma conversa entre cinco amigos. De início
            era apenas uma brincadeira, um passa-tempo, um sonho e ficção, mas
            algum tempo depois, o grupo que havia discutido a ideia enxergou um
            possível futuro negócio não tão distante. Daí em diante, a PIZY
            House começou a ter um formato.
          </p>
          <div>
            <Image
              src={PHLemon}
              alt="PIZY House Logo"
              width={64 * 3}
              height={46 * 3}
            />
            <p>
              O grupo começou a pensar sobre ideias de nomenclatura, pois sabiam
              que seriam acima da média. Afinal, esse mundo era novo e poucos
              haviam estudado ou se aprofundado sobre. Veio então - tomando como
              base a expressão norte-americana “<i>Easy Peasy Lemon Squeeze</i>”
              - PIZY House. A ideia era passar um sensação mais jovem, mais
              simples e acessível para todos e, principalmente para os jovens,
              para que se tornassem futuramente novos investidores profissionais
              e estratégicos.
            </p>
          </div>
          <p>
            No início do processo, todos tinham apenas um foco: ganhar dinheiro:
            afinal, que jovem entre 16 a 19 anos não gostaria de uma renda
            extra? Com um tempo de experiência na área, o grupo PIZY percebeu
            que além de fazer dinheiro entre si, eles poderiam ajudar a todos
            para que consigam sua renda própria.
          </p>
          <div>
            <p>
              Anos depois de luta e sonho, começamos nosso projeto:{" "}
              <abbr title="Futuros Novos Investidores">FNI</abbr>. Espalhamos
              nossos conhecimentos para ajudar todos que acreditavam em nós,
              para todos que acreditavam num futuro melhor, para que surgissem
              novos investidores.
            </p>
            <Image
              src={PHLemon}
              alt="PIZY House Logo"
              width={64 * 3}
              height={46 * 3}
              style={{ transform: "scaleX(-1)" }}
            />
          </div>
          <p>
            Nosso princípio é simples e direto:{" "}
            <b>não deixar o mercado de ações perder relevância ou poder</b>.
            Caso queira saber mais sobre como nosso processo funciona ou se você
            quer aprender algo sobre esse novo mundo digital, de criptomoedas e
            NFTs, <Link href="/">clique aqui</Link>.
          </p>
        </AboutUS>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
