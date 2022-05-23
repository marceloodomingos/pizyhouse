/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

// import Header from "../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CryptoInfos } from "../../styles/pages/coin";
import { BGContent } from "~/components/BGContent/styles";
import LoadingCircle from "~/components/Loading";

function abbreviate(num: any) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol
    : "0";
}

const formatterToMoney = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

interface CoinPageProps {
  coindata: {
    image: {
      large: string;
    };
    name: string;
    symbol: string;
    market_cap_rank: number;
    market_data: {
      current_price: {
        brl: number;
      };
      market_cap_change_percentage_24h: number;
      high_24h: {
        brl: number;
      };
      low_24h: {
        brl: number;
      };
      total_supply: number;
    };
  };
  handleLoggedChange: () => void;
}

interface ChartProps {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function Coin({ coindata, handleLoggedChange }: CoinPageProps) {
  const [chartInfo, setChartInfo] = useState([]);

  useEffect(() => {
    const coinNameToFetch = coindata.name.toLowerCase();

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinNameToFetch}/ohlc?vs_currency=brl&days=7`
    )
      .then((res) => res.json())
      .then((data) => {
        setChartInfo(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>PIZY House · Informações sobre {coindata.name}</title>
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
        <h1>Informações sobre {coindata.name}</h1>
        <CryptoInfos>
          <div className="info-coin">
            <div className="coin">
              <img src={coindata.image.large} alt={coindata.name} />
              <span>{coindata.name}</span>
              <p>{coindata.symbol}</p>
              <div className="current-price">
                <span>Valor Atual:</span>
                <p>
                  {formatterToMoney.format(
                    coindata.market_data.current_price.brl
                  )}
                </p>
              </div>
            </div>
            <div className="stats">
              <dt>Geral</dt>
              <li>
                <span>Classificação de capitalização de mercado</span>
                <p className="market_cap_rank">{coindata.market_cap_rank}</p>
              </li>
              <li>
                <span>Alteração do valor de mercado</span>
                <p className="market_cap_change">
                  {coindata.market_data.market_cap_change_percentage_24h.toFixed(
                    2
                  )}
                </p>
              </li>
              <dt>Nas últimas 24 horas</dt>
              <li>
                <span>Valor mais alto</span>
                <p>
                  {formatterToMoney.format(coindata.market_data.high_24h.brl)}
                </p>
              </li>
              <li>
                <span>Valor mais baixo</span>
                <p>
                  {formatterToMoney.format(coindata.market_data.low_24h.brl)}
                </p>
              </li>
              <dt>Outras informações</dt>
              <li>
                <span>Volume total</span>
                <p>{abbreviate(coindata.market_data.total_supply)}</p>
              </li>
            </div>
          </div>
          <div id="candlestick-graph" className="graph"></div>
        </CryptoInfos>
      </main>
      <Footer />
      <BGContent />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/`);
  const data = await response.json();

  const paths = data.map((coin: any) => {
    return { params: { id: coin.id } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id }: any = context.params;

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`
  );
  const data = await response.json();

  return {
    props: {
      coindata: data,
    },
    revalidate: 5,
  };
};
