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
import { AnchorLink, DocsWrapper } from "~/styles/pages/docs";

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
        <div className="title no-spacing">
          <h1>Documentação</h1>
          <p>Todo o material base para a criação da PIZY House.</p>
        </div>
        <DocsWrapper>
          <AnchorLink id="used-techs" />
          <h1>Tecnologias Utilizadas</h1>
          <div className="used-techs">
            <div>
              <b>Layout</b>
              <p>Figma</p>
            </div>
            <div>
              <b>Logo Design</b>
              <p>Adobe Illustrator</p>
            </div>
            <div>
              <b>Front-end</b>
              <p>Next JS | TypeScript</p>
            </div>
            <div>
              <b>Estilização</b>
              <p>Styled Components</p>
            </div>
            <div>
              <b>Autenticação</b>
              <p>Google Firebase</p>
            </div>
          </div>
          <AnchorLink id="credits" />
          <h1>Creditos</h1>
          <div className="credits">
            <div>
              <b>Marcelo Augusto Domingos</b>
              <p>Programação, Design e Layout</p>
            </div>
            <div>
              <b>Daniel Lima de Souza</b>
              <p>Design, Layout e Slides</p>
            </div>
            <div>
              <b>Leonardo Antônio de Araújo</b>
              <p>Layout e Contato ao Usuário</p>
            </div>
            <div>
              <b>Luan Daniel Da Silva Fabri</b>
              <p>FAQ, Perguntas e Trajetória do Usuário</p>
            </div>
            <div>
              <b>Fabrício Silva Cabral</b>
              <p>História e Sobre o Mercado</p>
            </div>
          </div>
          <h1>Obrigado!</h1>
          <div className="acknowledgments">
            <p>
              A equipe <b>PIZY House</b> agradece por sua presença e
              preferência. Esperamos que num futuro próximo você possa se tornar
              o próximo Elon Musk 🥳.
            </p>
            <span>💜 Investir é tão simples, quanto espremer um limão. 🍋</span>
          </div>
        </DocsWrapper>
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
