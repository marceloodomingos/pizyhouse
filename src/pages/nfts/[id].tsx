/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BGContent } from "~/components/BGContent/styles";
import { getNftsAssets } from "~/api/getNftAssets";
import LoadingCircle from "~/components/Loading";
import { NFTsAssets } from "~/styles/pages/nfts";

export default function SignIn({ handleLoggedChange }: any) {
  const nftAssetsRef = useRef(null);
  const [nftAssets, setNftAssets] = useState<[] | any>([]);
  const [nftAssetsLoading, setNftAssetsLoading] = useState(false);
  const assetsNft = nftAssets.assets;

  useEffect(() => {
    const loadNftsAssets = async () => {
      setNftAssetsLoading(true);
      const nftInfo = await getNftsAssets(
        "1470458287109684028356284762360621888459186479768557181417937033998012252161"
      );
      setNftAssets(nftInfo);
      setNftAssetsLoading(false);
    };
    console.log(assetsNft);
    loadNftsAssets();
  }, []);

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
        username?: string;
      };
    };
    owner: {
      profile_img_url: string;
      user: {
        username?: string;
      };
    };
    image_preview_url: string;
    image_thumbnail_url: string;
    image_url: string;
    token_id: string;
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
                  owner,
                  image_preview_url,
                  image_thumbnail_url,
                  image_url,
                  token_id,
                }: NftsAssetsProps,
                index: number
              ) => {
                return (
                  <React.Fragment key={index}>
                    <section className="nft-banner">
                      <img
                        src={collection.banner_image_url}
                        alt={collection.name}
                      />
                    </section>
                    <div className="nft-assets">
                      <img src={image_url} alt={collection.name} />
                      <div className="about-nft">
                        <div className="info">
                          <h1>{collection.name}</h1>
                          <dt>ID</dt>
                          <span>{collection.slug}</span>
                          <dt>Descrição</dt>
                          <p>{collection.description}</p>
                        </div>
                        {owner.user.username && owner.profile_img_url && (
                          <>
                            <div className="owner">
                              <dt>Proprietário</dt>
                              <div className="avatar">
                                <p>{owner.user.username}</p>
                                <img
                                  src={owner.profile_img_url}
                                  alt={owner.user.username}
                                />
                              </div>
                            </div>
                          </>
                        )}
                        {creator.user.username && creator.profile_img_url && (
                          <>
                            <div className="creator">
                              <dt>Criador</dt>
                              <div className="avatar">
                                <p>{creator.user.username}</p>
                                <img
                                  src={creator.profile_img_url}
                                  alt={creator.user.username}
                                />
                              </div>
                            </div>
                          </>
                        )}
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
