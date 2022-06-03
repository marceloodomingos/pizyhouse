import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PHLemon from "../assets/pizy/logo.svg";
import { BGContent } from "~/components/BGContent/styles";
import { AboutContainer, SloganForCreateAccount } from "~/styles/pages/about";
import Link from "next/link";

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
        <AboutContainer>
          <p>
            Dinheiro virtual. Investimento. Reserva de valor. Muitos termos
            podem ser usados para definir as criptomoedas. Desde que o bitcoin
            surgiu, lá no fim de 2008, esse mercado vem crescendo e está cada
            vez mais popular. E, com o aumento do interesse pelos ativos
            digitais, muitas pessoas querem entender como investir em
            criptomoedas.
          </p>
          <p>
            Investir em criptomoedas sozinho é possível, mas, assim como em
            qualquer outro investimento, exige muito estudo e cautela. É preciso
            entender como as criptomoedas funcionam, quais as particularidades
            de cada projeto e como escolher uma corretora especializada nesse
            tipo de transação.
          </p>
          <p>
            As criptomoedas podem ser utilizadas para compras seguras na
            internet ou como uma forma de investimento. A compra e venda de
            criptomoedas é tão simples quanto espremer um limão.
          </p>
          <div className="merchant">
            Você acessa a PIZY House, cria uma conta e compra a moeda desejada,
            simples né?
          </div>
          <p>
            Diversos lugares estão aceitando essas moedas como forma de
            pagamento, por isso seu valor está em constante crescimento.
          </p>
          <SloganForCreateAccount>
            <div>
              Não perca tempo, entre para esse novo mundo e faça dinheiro
              conosco.
              <Image
                src={PHLemon}
                alt="PIZY House Logo"
                width={64 * 3}
                height={46 * 3}
              />
            </div>
            <button></button>
          </SloganForCreateAccount>
        </AboutContainer>
      </main>
      <Footer />
      <BGContent />
    </>
  );
}
