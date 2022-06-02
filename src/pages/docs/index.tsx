/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

// import Header from "../components/Header";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { BGContent } from "~/components/BGContent/styles";
import { getNftsAssetsByContract } from "~/api/getNftAssets";
import LoadingCircle from "~/components/Loading";
import { NFTsAssets } from "~/styles/pages/nfts";
import { CaretDown, CaretUp } from "phosphor-react";
import Button from "~/components/Button";
import { getNftCollection } from "~/api/getNftCollection";
import { AnchorLink } from "~/styles/pages/docs";

export default function SignIn({ handleLoggedChange }: any) {
  useEffect(() => {
    history.replaceState(null, "", "/docs");
  }, []);

  return (
    <>
      <Head>
        <title>PIZY House · Documentação</title>
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
        <h1>Documentação</h1>
        <AnchorLink id="used-techs" />
        {/* <h1>Tecnologias Utilizadas</h1> */}
        <AnchorLink id="credits" />
        {/* <h1>Creditos</h1> */}
      </main>
      <Footer />
      <BGContent />
    </>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const { query } = useRouter();
//   const routerParams: any = query.id;

//   return {
//     props: {
//       nftAssetsParams: routerParams,
//     },
//   };
// };
