import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

// import Header from "../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Monkey from "../../assets/heroes/monkey-ellipse.svg";
import { NFTCard, NFTs, NFTsPresentation } from "../../styles/pages/nfts";
import Slogan from "../../components/Slogan";
import { BGContent } from "../../components/BGContent/styles";
import { Cards, PencilCircle, UserSwitch } from "phosphor-react";
import InfiniteScroll from "../../components/InfiniteScroll";
import { getNfts } from "~/api/getNfts";
import LoadingCircle from "~/components/Loading";

// type NFTs = Record<string, {}>;

export default function NFTS({ handleLoggedChange }: any) {
  const [page, setPage] = useState(1);
  const [nfts, setNfts] = useState([]);
  const [nftsPageLoading, setNftsPageLoading] = useState(false);

  const nftRef = useRef(null);

  useEffect(() => {
    const loadNfts = async () => {
      setNftsPageLoading(true);
      const newNfts = await getNfts(page);
      setNfts((oldNfts) => [...oldNfts, ...newNfts]);
      setNftsPageLoading(false);
    };
    loadNfts();
  }, [page]);

  const handleScroll = (e: any) => {
    if (!nftRef.current) {
      return null;
    } else if (endReached(nftRef.current)) {
      setPage(page + 1);
    }
  };

  function endReached(props?: any) {
    return props.getBoundingClientRect().bottom < window.innerHeight;
  }

  window.addEventListener("scroll", handleScroll);

  interface NftsProps {
    id: number;
    collection: { is_nsfw: boolean; slug: string; name: string };
    asset_contract: { address: string };
    owner: { profile_img_url: string; user: { username: string } };
    creator: { profile_img_url: string; user: { username: string } };
    image_url: string;
    name: string;
    token_id: string;
  }

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

      <Navbar handleLoggedChange={handleLoggedChange} />
      <main>
        <NFTsPresentation>
          <h1>NFTs</h1>
          <Slogan centered>
            <span>
              Faça sua <b>coleção</b> de <b>NFTs</b> na PIZY.
            </span>
            <p>Invista conosco, invista no nosso futuro.</p>
            <div className="actions">
              <button
                onClick={() => {
                  window.location.href = "/signup";
                }}
              >
                Embarcar nessa jornada
              </button>
              <div className="divider">ou</div>
              <button
                onClick={() => {
                  window.location.href = "/dashboard";
                }}
              >
                Entrar na sua conta
              </button>
            </div>
          </Slogan>
        </NFTsPresentation>
        <NFTs ref={nftRef}>
          {nfts &&
            nfts.map(
              (
                {
                  id,
                  collection,
                  image_url,
                  name,
                  owner,
                  creator,
                  asset_contract,
                  token_id,
                }: NftsProps,
                index: number
              ) => {
                return (
                  <React.Fragment key={index}>
                    {(() => {
                      if (collection.is_nsfw == false) {
                        return (
                          <NFTCard>
                            {image_url ? (
                              <div className="picture">
                                <img src={image_url} alt={name} />
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
                                  if (name != null) {
                                    return <span>{name}</span>;
                                  } else {
                                    return (
                                      <span className="notfound">
                                        Nome não encontrado.
                                      </span>
                                    );
                                  }
                                })()}
                                <div className="about-nft">
                                  <dt>
                                    <Cards />
                                    Coleção
                                  </dt>
                                  <div>
                                    <p>{collection.name}</p>
                                  </div>
                                </div>
                                {(() => {
                                  if (owner != undefined || owner != null) {
                                    if (
                                      owner.user != undefined ||
                                      owner.user != null
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
                                                src={owner.profile_img_url}
                                                alt={owner.user.username}
                                              />
                                              {(() => {
                                                if (
                                                  owner.user.username != null
                                                ) {
                                                  return (
                                                    <p>{owner.user.username}</p>
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
                                  if (creator != undefined || creator != null) {
                                    if (
                                      creator.user != undefined ||
                                      creator.user != null
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
                                                src={creator.profile_img_url}
                                                alt={creator.user.username}
                                              />
                                              {(() => {
                                                if (
                                                  creator.user.username != null
                                                ) {
                                                  return (
                                                    <p>
                                                      {creator.user.username}
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
                                  window.location.href = `/nfts/${token_id}`;
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
              }
            )}
          {nftsPageLoading && <LoadingCircle />}
        </NFTs>
      </main>
      <Footer />
      <BGContent />
    </>
  );
}
