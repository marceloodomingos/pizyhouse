/* eslint-disable react-hooks/exhaustive-deps */
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
import { Cards, PencilCircle, UserSwitch } from "phosphor-react";
import InfiniteScroll from "../../components/InfiniteScroll";

type NFTs = Record<string, {}>;

export default function NFTS({
  actualState,
  loggedStatus,
  handleLoggedChange,
}: any) {
  const [nfts, setNfts] = useState<[] | any>([]);
  const [nftAmount, setNftAmount] = useState(9);

  const loadMoreNft = async () => {
    const response = await fetch(
      `https://api.opensea.io/api/v1/assets?format=json&limit=${nftAmount}&order_direction=desc`
    );
    const data = await response.json();
    const notFungibleTokens: any[] = [];
    data.assets.forEach((nftItem: any) => notFungibleTokens.push(nftItem));
    setNfts((oldNotFungibleTokens: any) => [
      ...oldNotFungibleTokens,
      ...notFungibleTokens,
    ]);
    setNftAmount(nftAmount + 3);
  };

  useEffect(() => {
    loadMoreNft();
  }, []);

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
          {nfts.map((nft: any, index: number) => {
            return (
              <React.Fragment key={index}>
                {(() => {
                  if (nft.collection.is_nsfw == false) {
                    return (
                      <NFTCard>
                        {nft.image_url ? (
                          <div className="picture">
                            <img src={nft.image_url} alt={nft.name} />
                          </div>
                        ) : (
                          <div className="picture notloaded">
                            <b>Imagem não encontrada.</b>
                            <p>Por favor, tente novamente.</p>
                          </div>
                        )}
                        <div className="info">
                          <>
                            {(() => {
                              if (nft.name != null) {
                                return <span>{nft.name}</span>;
                              } else {
                                return (
                                  <span className="notfound">
                                    Nome não encontrado.
                                  </span>
                                );
                              }
                            })()}
                            {/* <div className="about-nft">
                              <dt>Informações</dt>
                              <div>
                                <span>Coleção: </span>
                                <p>{nft.collection.name}</p>
                              </div>
                              <div>
                                <span>ID: </span>
                                <p>{nft.collection.slug}</p>
                              </div>
                            </div> */}
                            <div className="about-nft">
                              <dt>
                                <Cards />
                                Coleção
                              </dt>
                              <div>
                                <p>{nft.collection.name}</p>
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
                                        <dt>
                                          <UserSwitch />
                                          Atual dono
                                        </dt>
                                        <div>
                                          <img
                                            src={nft.owner.profile_img_url}
                                            alt={nft.owner.user.username}
                                          />
                                          {(() => {
                                            if (
                                              nft.owner.user.username != null
                                            ) {
                                              return (
                                                <p>{nft.owner.user.username}</p>
                                              );
                                            } else {
                                              return (
                                                <p className="notfound">
                                                  Nome não encontrado.
                                                </p>
                                              );
                                            }
                                          })()}
                                        </div>
                                      </div>
                                    </>
                                  );
                                }
                              }
                            })()}
                            {(() => {
                              if (
                                nft.creator != undefined ||
                                nft.creator != null
                              ) {
                                if (
                                  nft.creator.user != undefined ||
                                  nft.creator.user != null
                                ) {
                                  return (
                                    <>
                                      <div className="about-creator">
                                        <dt>
                                          <PencilCircle />
                                          Criador
                                        </dt>
                                        <div>
                                          <img
                                            src={nft.creator.profile_img_url}
                                            alt={nft.creator.user.username}
                                          />
                                          {(() => {
                                            if (
                                              nft.creator.user.username != null
                                            ) {
                                              return (
                                                <p>
                                                  {nft.creator.user.username}
                                                </p>
                                              );
                                            } else {
                                              return (
                                                <p className="notfound">
                                                  Nome não encontrado.
                                                </p>
                                              );
                                            }
                                          })()}
                                        </div>
                                      </div>
                                    </>
                                  );
                                }
                              }
                            })()}
                          </>
                          {/* <Link href={nft.permalink} passHref>
                            Adquirir
                          </Link> */}
                          <button
                            onClick={() => {
                              window.location.href = `/nfts/${nft.asset_contract.address}`;
                            }}
                          >
                            Ver Mais
                          </button>
                        </div>
                      </NFTCard>
                    );
                  } else {
                    null;
                  }
                })()}
              </React.Fragment>
            );
          })}
        </NFTs>
        {nfts && (
          <InfiniteScroll
            fetchMore={() => {
              loadMoreNft();
            }}
          />
        )}
      </main>
      <Footer />
      {/* <BGContent>
        <Image src={Monkey} priority width="750" height="750" />
      </BGContent> */}
    </>
  );
}
