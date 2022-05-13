/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import moment from "moment";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ArrowUp from "../assets/images/arrow-up.svg";
import ArrowDown from "../assets/images/arrow-down.svg";

import { Coin } from "../styles/pages/topday";
import useGetDay from "../hooks/useGetDay";
import { SkeletonWrapperElement, SkeletonCoin } from "../skeletons/coinTopDay";

interface TopDayPageProps {
  topcoins: any;
  handleLoggedChange: () => void;
}

export default function TopDay({
  topcoins,
  handleLoggedChange,
}: TopDayPageProps) {
  const formatSparkline = (numbers: any) => {
    const sevenDaysAgo = moment().subtract(7, "days").unix();

    let formattedSparkline = numbers.map((item: any, index: any) => {
      return {
        x: sevenDaysAgo + (index + 1) * 360,
        y: item,
      };
    });

    return formatSparkline;
  };
  const day = useGetDay();

  const formatterToMoney = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  interface CoinProps {
    id: string;
    name: string;
    image: string;
    symbol: string;
    market_cap_rank: string;
    current_price: number;
    price_change_percentage_24h: number;
  }

  return (
    <>
      <Head>
        <title>PIZY House · Melhores Moedas do Dia</title>
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
        <h1>Melhores Criptomoedas do Mercado</h1>
        <p style={{ textAlign: "center" }}>{day.dmy}</p>
        {topcoins ? (
          <Coin>
            {topcoins.map(
              ({
                id,
                name,
                image,
                symbol,
                market_cap_rank,
                current_price,
                price_change_percentage_24h,
              }: CoinProps) => {
                return (
                  <div
                    key={id}
                    className={"coin " + symbol}
                    onClick={() => {
                      window.location.href = `/coin/${id}`;
                    }}
                  >
                    <div className="about">
                      <p id="position">{market_cap_rank}</p>
                      <img src={image} alt={name} />
                      <div>
                        <span>{name}</span>
                        <p>{symbol}</p>
                      </div>
                    </div>
                    <div className="info">
                      <div className="prices">
                        <p>{formatterToMoney.format(current_price)}</p>
                        {(() => {
                          if (price_change_percentage_24h < 0) {
                            return (
                              <>
                                <span className="down">
                                  <Image
                                    src={ArrowDown}
                                    alt="Down Arrow"
                                    width={24}
                                    height={24}
                                  />{" "}
                                  {price_change_percentage_24h.toFixed(2)}%
                                </span>
                              </>
                            );
                          } else if (price_change_percentage_24h === 0) {
                            return null;
                          } else {
                            return (
                              <>
                                <span className="up">
                                  <Image
                                    src={ArrowUp}
                                    alt="Up Arrow"
                                    width={24}
                                    height={24}
                                  />{" "}
                                  {price_change_percentage_24h.toFixed(2)}%
                                </span>
                              </>
                            );
                          }
                        })()}
                      </div>
                      <a>
                        <i />
                      </a>
                    </div>
                  </div>
                );
              }
            )}
          </Coin>
        ) : (
          <SkeletonWrapperElement>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n: any) => (
              <SkeletonCoin key={n} />
            ))}
          </SkeletonWrapperElement>
        )}
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=9&page=1&sparkline=true"
  );
  const data = await response.json();

  return {
    props: {
      topcoins: data,
    },
  };
};
