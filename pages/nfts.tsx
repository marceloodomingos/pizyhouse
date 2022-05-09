/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Monkey from "/assets/heroes/monkey-ellipse.svg";
import { NFTCard, NFTs, NFTsPresentation } from "../styles/pages/nfts";
import Slogan from "../components/Slogan";
import { BGContent } from "../components/BGContent/styles";

type NFTs = Record<string, {}>;

const NFTS: NextPage = ({
  actualState,
  loggedStatus,
  handleLoggedChange,
}: any) => {
  const [floatingNavbar, setFloatingNavbar] = useState(false);
  const [nfts, setNfts] = useState<[] | any>([]);

  const apiKey = "3PdTX_0UgLlHZJneAcAHOZj82zJ4PAAv";
  const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs/`;
  const ownerAddr = "0xaBA7161A7fb69c88e16ED9f455CE62B791EE4D03";

  useEffect(() => {
    const requestOptions = {
      method: "get",
      url: `${baseURL}?owner=${ownerAddr}`,
    };

    axios
      .get(requestOptions.url)
      .then((res) => setNfts(res.data))
      .catch((error) => console.log("404 API: NFTs Market", error));
  }, [baseURL]);

  const nullNft = {};
  const nftData = Object.assign(nullNft, nfts.ownedNfts);
  const nft = Object.values(nftData);

  return (
    <>
      <Head>
        <title>PIZY House · NFTs</title>
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
        <NFTsPresentation>
          <h1>NFTs</h1>
          <Slogan centered>
            <span>
              Faça sua <b>coleção</b> de <b>NFTs</b> na PIZY.
            </span>
            <p>Invista conosco, invista no nosso futuro.</p>
            <div className="actions">
              <button>Embarcar nessa jornada</button>
              <div className="divider">ou</div>
              <button>Entrar na sua conta</button>
            </div>
          </Slogan>
        </NFTsPresentation>
        <NFTs>
          {nft.map((item: any) => {
            return (
              <>
                {item.metadata.image && item.title && (
                  <NFTCard>
                    {item.metadata.image && (
                      <img src={item.metadata.image} alt={item.title} />
                    )}
                    {item.title && (
                      <>
                        <div className="info">
                          <span>{item.title}</span>
                          <p>{item.title}</p>
                          <button>Comprar</button>
                        </div>
                      </>
                    )}
                  </NFTCard>
                )}
              </>
            );
          })}
        </NFTs>
      </main>
      <Footer />
      {/* <BGContent>
        <Image src={Monkey} priority width="750" height="750" />
      </BGContent> */}
    </>
  );
};

export default NFTS;
