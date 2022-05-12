/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";

// import Header from "../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SignIn({
  nftdata,
  actualState,
  loggedStatus,
  handleLoggedChange,
}: any) {
  console.log(nftdata);

  return (
    <>
      <Head>
        <title>PIZY House · Entrar na sua conta</title>
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
        <h1>{JSON.stringify(nftdata)}</h1>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `https://api.opensea.io/api/v1/bundles?limit=500&offset=0`
  );
  const data = await response.json();

  // const paths = data.map((nft: any) => {
  //   return { params: { address: nft.address } };
  // });

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { address }: any = context.params;

  const response = await fetch(
    `https://api.opensea.io/api/v1/bundles?asset_contract_address=${address}&limit=20&offset=0`
  );
  const data = await response.json();

  return {
    props: {
      nftdata: data,
    },
    revalidate: 5,
  };
};
