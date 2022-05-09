/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ArrowUp from "/assets/images/arrow-up.svg";
import ArrowDown from "/assets/images/arrow-down.svg";
import ChartExample from "/assets/images/candlestick-basic.svg";

import { Coin, CryptoCoinsActions } from "../styles/pages/topday";
import Modal from "../components/Modal";
import useGetDay from "../hooks/useGetDay";
import { SkeletonWrapperElement, SkeletonCoin } from "../skeletons/coinTopDay";

const TopDay: NextPage = ({
  actualState,
  loggedStatus,
  handleLoggedChange,
}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [coins, setCoins] = useState<[] | null>([]);
  const [actualCoinModal, setActualCoinModal] = useState<any>(null);
  const [actualCoinModalInfo, setActualCoinModalInfo] = useState<any>([]);
  const [loadedCoins, setLoadedCoins] = useState<any>(10);

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

  useEffect(() => {
    setCoins(null);
    setTimeout(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=" +
            `${loadedCoins}` +
            "&page=1&sparkline=true"
        )
        .then((res) => {
          setCoins(res.data);
        })
        .catch((error) => alert("404 API: Crypto Market"));
    }, 1000);
  }, [loadedCoins]);

  function handleNextPage() {
    if (loadedCoins < 100) {
      setLoadedCoins(loadedCoins + 10);
    }
  }

  function handleAllPage() {
    if (loadedCoins < 100) {
      setLoadedCoins(100);
    }
  }

  function handleResetPage() {
    setLoadedCoins(10);
  }

  const day = useGetDay();

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

      <Navbar
        actualState={actualState}
        loggedStatus={loggedStatus}
        handleLoggedChange={handleLoggedChange}
      />
      <main className={modalVisible ? "modelOpenned" : ""}>
        <h1>Melhores Criptomoedas do Mercado</h1>
        <p style={{ textAlign: "center" }}>{day.dmy}</p>
        {coins ? (
          <Coin>
            {coins.map((coin: any, index: any) => {
              return (
                <>
                  <button
                    key={index}
                    className={"coin " + coin.symbol}
                    onClick={(e) => {
                      setModalVisible(!modalVisible);
                      setActualCoinModal(coin.symbol);
                      setActualCoinModalInfo(coins);
                    }}
                  >
                    <div className="about">
                      <p id="position">{coin.market_cap_rank}</p>
                      <img src={coin.image} alt={coin.name} />
                      <div>
                        <span>{coin.name}</span>
                        <p>{coin.symbol}</p>
                      </div>
                    </div>
                    <div className="info">
                      <div className="prices">
                        <p>
                          {coin.current_price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </p>
                        {(() => {
                          if (coin.price_change_percentage_24h < 0) {
                            return (
                              <>
                                <span className="down">
                                  <Image
                                    src={ArrowDown}
                                    alt="Down Arrow"
                                    width={24}
                                    height={24}
                                  />{" "}
                                  {coin.price_change_percentage_24h.toFixed(2)}%
                                </span>
                              </>
                            );
                          } else if (coin.price_change_percentage_24h === 0) {
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
                                  {coin.price_change_percentage_24h.toFixed(2)}%
                                </span>
                              </>
                            );
                          }
                        })()}
                      </div>
                      <button>
                        <i />
                      </button>
                    </div>
                  </button>
                </>
              );
            })}
          </Coin>
        ) : (
          <SkeletonWrapperElement>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n: any) => (
              <SkeletonCoin key={n} />
            ))}
          </SkeletonWrapperElement>
        )}
        {modalVisible && (
          <Modal onClose={() => setModalVisible(false)}>
            {actualCoinModalInfo.map((coin: any) => {
              if (actualCoinModal === coin.symbol) {
                return (
                  <>
                    <div className="crypto-infos">
                      <div className="info-coin">
                        <div className="coin">
                          <img src={coin.image} alt="" />
                          <span>{coin.name}</span>
                          <p>{coin.symbol}</p>
                        </div>
                        <div className="stats">
                          <dt>Geral</dt>
                          <li>
                            <span>Market cap rank</span>
                            <p className="market_cap_rank">
                              {coin.market_cap_rank}
                            </p>
                          </li>
                          <li>
                            <span>Market cap change</span>
                            <p className="market_cap_change">
                              {coin.market_cap_change_percentage_24h.toFixed(2)}
                            </p>
                          </li>
                          <dt>Nas últimas 24 horas</dt>
                          <li>
                            <span>Valor mais alto</span>
                            <p>
                              {coin.high_24h.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </p>
                          </li>
                          <li>
                            <span>Valor mais baixo</span>
                            <p>
                              {coin.low_24h.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </p>
                          </li>
                          <dt>Outras informações</dt>
                          <li>
                            <span>Volume total</span>
                            <p>{abbreviate(coin.total_volume)}</p>
                          </li>
                        </div>
                      </div>
                      <div className="graph">
                        <Image
                          src={ChartExample}
                          alt="Chart Example"
                          objectFit="fill"
                        />
                      </div>
                    </div>
                  </>
                );
              } else {
                null;
              }
            })}
          </Modal>
        )}
        <CryptoCoinsActions>
          {loadedCoins < 100 ? (
            <>
              <button onClick={handleNextPage}>Carregar mais</button>
              <button onClick={handleAllPage}>Carregar tudo</button>
            </>
          ) : null}
          {loadedCoins > 10 ? (
            <button onClick={handleResetPage}>Reiniciar</button>
          ) : null}
        </CryptoCoinsActions>
      </main>
      {!modalVisible && <Footer />}
    </>
  );
};

export default TopDay;
