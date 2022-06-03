/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

// import Header from "../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BGContent } from "~/components/BGContent/styles";
import {
  getNftsAssetsByToken,
  getNftsAssetsByContract,
} from "~/api/getNftAssets";
import LoadingCircle from "~/components/Loading";
import { NFTsAssets } from "~/styles/pages/nfts";

export default function SignIn({ handleLoggedChange }: any) {
  const router = useRouter();
  const { type } = router.query;
  const nftAssetsRef = useRef(null);
  const [nftAssets, setNftAssets] = useState<[] | any>([]);
  const [nftAssetsLoading, setNftAssetsLoading] = useState(false);
  const assetsNft = nftAssets.assets;

  useEffect(() => {
    if (typeof window === "undefined") {
      return null;
    }

    if (router.asPath !== router.route) {
      const loadNftsAssets = async () => {
        setNftAssetsLoading(true);
        const nftInfo = await getNftsAssetsByContract(router.query.id);
        setNftAssets(nftInfo);
        console.log(nftInfo);
        setNftAssetsLoading(false);
      };
      loadNftsAssets();
    }
  }, [router]);

  interface NftsAssetsProps {
    id: number;
    collection: {
      banner_image_url: string;
      description: string;
      image_url: string;
      is_nsfw: boolean;
      name: string;
      slug: string;
    };
    creator: {
      address: string;
      profile_img_url: string;
      user: {
        username: string | null;
      };
    };
    description: string;
    name: string;
    owner: {
      profile_img_url: string;
      user: {
        username: string | null;
      };
    };
    image_preview_url: string;
    image_thumbnail_url: string;
    image_url: string;
    token_id: string;
    traits: [trait_type: any, value: any];
  }

  return (
    <>
      <Head>
        <title>PIZY House · Sobre a NFT</title>
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
        <NFTsAssets>
          {nftAssetsLoading && <LoadingCircle />}
          {!nftAssetsLoading &&
            assetsNft &&
            assetsNft.map(
              (
                {
                  id,
                  collection,
                  creator,
                  description,
                  owner,
                  name,
                  image_preview_url,
                  image_thumbnail_url,
                  image_url,
                  token_id,
                  traits,
                }: NftsAssetsProps,
                index: number
              ) => {
                return (
                  <React.Fragment key={index}>
                    {collection.banner_image_url && (
                      <section className="nft-banner">
                        <img
                          loading="lazy"
                          src={collection.banner_image_url}
                          alt={collection.name}
                        />
                      </section>
                    )}
                    <div className="content">
                      <div className="title">
                        <h1>Informações</h1>
                      </div>
                      <div className="nft-assets">
                        <div className="main-info">
                          <img src={image_url} alt={collection.name} />
                          <div className="about-nft">
                            <>
                              <div className="info">
                                <h1>{name}</h1>
                                <dt>Coleção</dt>
                                <span>{collection.name}</span>
                                {/* <dt>ID</dt>
                            <span>{collection.slug}</span> */}
                                {description && (
                                  <>
                                    <dt>Descrição</dt>
                                    <p>{description}</p>
                                  </>
                                )}
                              </div>
                              {(() => {
                                if (
                                  owner.profile_img_url != null &&
                                  owner.user.username != null
                                ) {
                                  return (
                                    <div className="owner">
                                      <dt>Proprietário</dt>
                                      <div className="avatar">
                                        <img
                                          loading="lazy"
                                          src={owner.profile_img_url}
                                          alt={owner.user.username}
                                        />
                                        <p>{owner.user.username}</p>
                                      </div>
                                    </div>
                                  );
                                }
                              })()}
                              {(() => {
                                if (
                                  creator.profile_img_url != null &&
                                  creator.user.username != null
                                ) {
                                  return (
                                    <div className="creator">
                                      <dt>Criador</dt>
                                      <div className="avatar">
                                        <img
                                          loading="lazy"
                                          src={creator.profile_img_url}
                                          alt={creator.user.username}
                                        />
                                        <p>{creator.user.username}</p>
                                      </div>
                                    </div>
                                  );
                                }
                              })()}
                            </>
                          </div>
                        </div>
                        {(() => {
                          if (traits && traits.length > 0) {
                            return (
                              <>
                                <h1>Características</h1>
                                <div className="nft-traits">
                                  {traits.map((trait, index) => {
                                    return (
                                      <div key={index}>
                                        <b>{trait.trait_type}</b>
                                        <p>{trait.value}</p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </>
                            );
                          }
                        })()}
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
            )}
        </NFTsAssets>
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
