/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Monkey from "/assets/heroes/monkey-ellipse.svg";
import { NFTCard, NFTs, NFTsPresentation } from "../../styles/pages/nfts";
import Slogan from "../../components/Slogan";
import { BGContent } from "../../components/BGContent/styles";
import Link from "next/link";

type NFTs = Record<string, {}>;

export default function NFTS({
  actualState,
  loggedStatus,
  handleLoggedChange,
}: any) {
  const [nfts, setNfts] = useState<[] | any>([]);

  useEffect(() => {
    axios
      .get("https://api.opensea.io/api/v1/assets?format=json&limit=150")
      .then((res) => setNfts(res.data))
      .catch((error) => console.log("404 API: NFTs Market", error));
  }, []);

  console.log(nfts.assets);

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
          {nfts.assets?.map((nft: any) => {
            return (
              <>
                <NFTCard key={nft.id}>
                  {nft.image_url ? (
                    <img src={nft.image_url} alt={nft.name} />
                  ) : (
                    <div className="notloaded-picture" />
                  )}
                  <div className="info">
                    <span>{nft.name}</span>
                    <div className="about-nft">
                      <dt>Informações</dt>
                      <div>
                        <span>Coleção: </span>
                        <p>{nft.collection.name}</p>
                      </div>
                      <div>
                        <span>ID: </span>
                        <p>{nft.collection.slug}</p>
                      </div>
                    </div>
                    {(() => {
                      if (nft.owner != undefined || nft.owner != null) {
                        if (
                          nft.owner.user != undefined ||
                          nft.owner.user != null
                        ) {
                          return (
                            <>
                              <div className="about-owner">
                                <dt>Atual dono</dt>
                                <div>
                                  <img
                                    src={nft.owner.profile_img_url}
                                    alt={nft.owner.user.username}
                                  />
                                  <p>{nft.owner.user.username}</p>
                                </div>
                              </div>
                            </>
                          );
                        }
                      }
                    })()}
                    {(() => {
                      if (nft.creator != undefined || nft.creator != null) {
                        if (
                          nft.creator.user != undefined ||
                          nft.creator.user != null
                        ) {
                          return (
                            <>
                              <div className="about-creator">
                                <dt>Criador</dt>
                                <div>
                                  <img
                                    src={nft.creator.profile_img_url}
                                    alt={nft.creator.user.username}
                                  />
                                  <p>{nft.creator.user.username}</p>
                                </div>
                              </div>
                            </>
                          );
                        }
                      }
                    })()}
                    {/* <Link href={nft.permalink} passHref>
                      Adquirir
                    </Link> */}
                    <Link href={nft.permalink} passHref>
                      Ver Mais
                    </Link>
                  </div>
                </NFTCard>
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
}

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await fetch(
//     "https://api.opensea.io/api/v1/assets?format=json"
//   );
//   const data = await response.text();

//   return {
//     props: {
//       nftsdata: data,
//     },
//     revalidate: 100,
//   };
// };
