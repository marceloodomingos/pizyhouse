import Head from "next/head";
import React, { useContext, useEffect, useRef, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { NFTCard, NFTs, NFTsPresentation } from "../../styles/pages/nfts";
import Slogan from "../../components/Slogan";
import { BGContent } from "../../components/BGContent/styles";
import { Cards, PencilCircle, UserSwitch } from "phosphor-react";
import { getNfts } from "~/api/getNfts";
import LoadingCircle from "~/components/Loading";
import { firebase, auth } from "~/services/firebase";
import Button from "~/components/Button";
import AuthContext from "~/contexts/AuthContext";
import BackToTop from "~/components/BackToTop";

// type NFTs = Record<string, {}>;

export default function NFTS({ handleLoggedChange }: any) {
  const [page, setPage] = useState(1);
  const [nfts, setNfts] = useState([]);
  const [nftsPageLoading, setNftsPageLoading] = useState(false);
  const scrollObserve = useRef();

  const { user } = useContext(AuthContext);

  function logOutFirebase() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        confirm("Deslogado com sucesso.");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    const loadNfts = async () => {
      setNftsPageLoading(true);

      const newNfts = await getNfts(page);
      setNfts((oldNfts) => [...oldNfts, ...newNfts]);

      setNftsPageLoading(false);
    };
    loadNfts();
  }, [page]);

  useEffect(() => {
    const optionsIO = {
      threshold: 1.0,
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      if (
        entries.some(
          (entry) =>
            entry &&
            entry.isIntersecting &&
            entry.intersectionRatio >= optionsIO.threshold
        )
      ) {
        setPage((currentPage) => currentPage + 1);
      }
    }, optionsIO);

    intersectionObserver.observe(scrollObserve.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

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
      <BackToTop />
      <main>
        <NFTsPresentation>
          <h1>NFTs</h1>
          <Slogan centered>
            <span>
              Faça sua <b>coleção</b> de <b>NFTs</b> na PIZY.
            </span>
            <p>Invista conosco, invista no nosso futuro.</p>
            <div className="actions">
              {user ? (
                <>
                  <Button
                    isGlowing
                    onClick={() => {
                      window.location.href = "/dashboard";
                    }}
                  >
                    Acessar o painel de controle
                  </Button>
                  <div className="divider">ou</div>
                  <Button
                    isOutlined
                    onClick={() => {
                      logOutFirebase();
                    }}
                  >
                    Sair da conta
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    isGlowing
                    onClick={() => {
                      window.location.href = "/signup";
                    }}
                  >
                    Embarcar nessa jornada
                  </Button>
                  <div className="divider">ou</div>
                  <Button
                    isOutlined
                    onClick={() => {
                      window.location.href = "/dashboard";
                    }}
                  >
                    Entrar na sua conta
                  </Button>
                </>
              )}
            </div>
          </Slogan>
        </NFTsPresentation>
        <NFTs>
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
                        if (image_url) {
                          return (
                            <NFTCard>
                              <div className="picture">
                                <img
                                  src={image_url}
                                  alt={name}
                                  loading="lazy"
                                />
                              </div>
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
                                                      <p>
                                                        {owner.user.username}
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
                                  {(() => {
                                    if (
                                      creator != undefined ||
                                      creator != null
                                    ) {
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
                                                    creator.user.username !=
                                                    null
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
                                <button
                                  onClick={() => {
                                    window.location.href = `/nfts/${asset_contract.address}%2F${token_id}`;
                                  }}
                                >
                                  Ver Mais
                                </button>
                              </div>
                            </NFTCard>
                          );
                        }
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
        <div ref={scrollObserve} />
      </main>
      <Footer />
      <BGContent />
    </>
  );
}
