/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CryptoInfos } from "../../styles/pages/coin";
import { BGContent } from "~/components/BGContent/styles";
import { getCryptoSparkline } from "~/api/getCryptoSparkline";
import LoadingCircle from "~/components/Loading";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

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
    id: string;
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
      sparkline_7d: {
        price: [];
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
  const [ohlc, setOhlc] = useState<any>([]);
  const [dataOhlc, setDataOhlc] = useState([]);
  const [sparklineLoading, setSparklineLoading] = useState(false);

  const [options, setOptions] = useState({
    chart: {
      id: "price-changes",
    },
    title: {
      text: `Alteração de valor de mercado | ${coindata.name}`,
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [],
      // data: [
      //   {
      //     x: new Date(1538778600000),
      //     y: [6629.81, 6650.5, 6623.04, 6633.33],
      //   },
      //   {
      //     x: new Date(1538780400000),
      //     y: [6632.01, 6643.59, 6620, 6630.11],
      //   },
      //   {
      //     x: new Date(1538782200000),
      //     y: [6630.71, 6648.95, 6623.34, 6635.65],
      //   },
      //   {
      //     x: new Date(1538784000000),
      //     y: [6635.65, 6651, 6629.67, 6638.24],
      //   },
      //   {
      //     x: new Date(1538785800000),
      //     y: [6638.24, 6640, 6620, 6624.47],
      //   },
      //   {
      //     x: new Date(1538787600000),
      //     y: [6624.53, 6636.03, 6621.68, 6624.31],
      //   },
      //   {
      //     x: new Date(1538789400000),
      //     y: [6624.61, 6632.2, 6617, 6626.02],
      //   },
      //   {
      //     x: new Date(1538791200000),
      //     y: [6627, 6627.62, 6584.22, 6603.02],
      //   },
      //   {
      //     x: new Date(1538793000000),
      //     y: [6605, 6608.03, 6598.95, 6604.01],
      //   },
      //   {
      //     x: new Date(1538794800000),
      //     y: [6604.5, 6614.4, 6602.26, 6608.02],
      //   },
      //   {
      //     x: new Date(1538796600000),
      //     y: [6608.02, 6610.68, 6601.99, 6608.91],
      //   },
      //   {
      //     x: new Date(1538798400000),
      //     y: [6608.91, 6618.99, 6608.01, 6612],
      //   },
      //   {
      //     x: new Date(1538800200000),
      //     y: [6612, 6615.13, 6605.09, 6612],
      //   },
      //   {
      //     x: new Date(1538802000000),
      //     y: [6612, 6624.12, 6608.43, 6622.95],
      //   },
      //   {
      //     x: new Date(1538803800000),
      //     y: [6623.91, 6623.91, 6615, 6615.67],
      //   },
      //   {
      //     x: new Date(1538805600000),
      //     y: [6618.69, 6618.74, 6610, 6610.4],
      //   },
      //   {
      //     x: new Date(1538807400000),
      //     y: [6611, 6622.78, 6610.4, 6614.9],
      //   },
      //   {
      //     x: new Date(1538809200000),
      //     y: [6614.9, 6626.2, 6613.33, 6623.45],
      //   },
      //   {
      //     x: new Date(1538811000000),
      //     y: [6623.48, 6627, 6618.38, 6620.35],
      //   },
      //   {
      //     x: new Date(1538812800000),
      //     y: [6619.43, 6620.35, 6610.05, 6615.53],
      //   },
      //   {
      //     x: new Date(1538814600000),
      //     y: [6615.53, 6617.93, 6610, 6615.19],
      //   },
      //   {
      //     x: new Date(1538816400000),
      //     y: [6615.19, 6621.6, 6608.2, 6620],
      //   },
      //   {
      //     x: new Date(1538818200000),
      //     y: [6619.54, 6625.17, 6614.15, 6620],
      //   },
      //   {
      //     x: new Date(1538820000000),
      //     y: [6620.33, 6634.15, 6617.24, 6624.61],
      //   },
      //   {
      //     x: new Date(1538821800000),
      //     y: [6625.95, 6626, 6611.66, 6617.58],
      //   },
      //   {
      //     x: new Date(1538823600000),
      //     y: [6619, 6625.97, 6595.27, 6598.86],
      //   },
      //   {
      //     x: new Date(1538825400000),
      //     y: [6598.86, 6598.88, 6570, 6587.16],
      //   },
      //   {
      //     x: new Date(1538827200000),
      //     y: [6588.86, 6600, 6580, 6593.4],
      //   },
      //   {
      //     x: new Date(1538829000000),
      //     y: [6593.99, 6598.89, 6585, 6587.81],
      //   },
      //   {
      //     x: new Date(1538830800000),
      //     y: [6587.81, 6592.73, 6567.14, 6578],
      //   },
      //   {
      //     x: new Date(1538832600000),
      //     y: [6578.35, 6581.72, 6567.39, 6579],
      //   },
      //   {
      //     x: new Date(1538834400000),
      //     y: [6579.38, 6580.92, 6566.77, 6575.96],
      //   },
      //   {
      //     x: new Date(1538836200000),
      //     y: [6575.96, 6589, 6571.77, 6588.92],
      //   },
      //   {
      //     x: new Date(1538838000000),
      //     y: [6588.92, 6594, 6577.55, 6589.22],
      //   },
      //   {
      //     x: new Date(1538839800000),
      //     y: [6589.3, 6598.89, 6589.1, 6596.08],
      //   },
      //   {
      //     x: new Date(1538841600000),
      //     y: [6597.5, 6600, 6588.39, 6596.25],
      //   },
      //   {
      //     x: new Date(1538843400000),
      //     y: [6598.03, 6600, 6588.73, 6595.97],
      //   },
      //   {
      //     x: new Date(1538845200000),
      //     y: [6595.97, 6602.01, 6588.17, 6602],
      //   },
      //   {
      //     x: new Date(1538847000000),
      //     y: [6602, 6607, 6596.51, 6599.95],
      //   },
      //   {
      //     x: new Date(1538848800000),
      //     y: [6600.63, 6601.21, 6590.39, 6591.02],
      //   },
      //   {
      //     x: new Date(1538850600000),
      //     y: [6591.02, 6603.08, 6591, 6591],
      //   },
      //   {
      //     x: new Date(1538852400000),
      //     y: [6591, 6601.32, 6585, 6592],
      //   },
      //   {
      //     x: new Date(1538854200000),
      //     y: [6593.13, 6596.01, 6590, 6593.34],
      //   },
      //   {
      //     x: new Date(1538856000000),
      //     y: [6593.34, 6604.76, 6582.63, 6593.86],
      //   },
      //   {
      //     x: new Date(1538857800000),
      //     y: [6593.86, 6604.28, 6586.57, 6600.01],
      //   },
      //   {
      //     x: new Date(1538859600000),
      //     y: [6601.81, 6603.21, 6592.78, 6596.25],
      //   },
      //   {
      //     x: new Date(1538861400000),
      //     y: [6596.25, 6604.2, 6590, 6602.99],
      //   },
      //   {
      //     x: new Date(1538863200000),
      //     y: [6602.99, 6606, 6584.99, 6587.81],
      //   },
      //   {
      //     x: new Date(1538865000000),
      //     y: [6587.81, 6595, 6583.27, 6591.96],
      //   },
      //   {
      //     x: new Date(1538866800000),
      //     y: [6591.97, 6596.07, 6585, 6588.39],
      //   },
      //   {
      //     x: new Date(1538868600000),
      //     y: [6587.6, 6598.21, 6587.6, 6594.27],
      //   },
      //   {
      //     x: new Date(1538870400000),
      //     y: [6596.44, 6601, 6590, 6596.55],
      //   },
      //   {
      //     x: new Date(1538872200000),
      //     y: [6598.91, 6605, 6596.61, 6600.02],
      //   },
      //   {
      //     x: new Date(1538874000000),
      //     y: [6600.55, 6605, 6589.14, 6593.01],
      //   },
      //   {
      //     x: new Date(1538875800000),
      //     y: [6593.15, 6605, 6592, 6603.06],
      //   },
      //   {
      //     x: new Date(1538877600000),
      //     y: [6603.07, 6604.5, 6599.09, 6603.89],
      //   },
      //   {
      //     x: new Date(1538879400000),
      //     y: [6604.44, 6604.44, 6600, 6603.5],
      //   },
      //   {
      //     x: new Date(1538881200000),
      //     y: [6603.5, 6603.99, 6597.5, 6603.86],
      //   },
      //   {
      //     x: new Date(1538883000000),
      //     y: [6603.85, 6605, 6600, 6604.07],
      //   },
      //   {
      //     x: new Date(1538884800000),
      //     y: [6604.98, 6606, 6604.07, 6606],
      //   },
      // ],
    },
  ]);

  useEffect(() => {
    const loadSparkline = async () => {
      setSparklineLoading(true);
      const getSparkline = await getCryptoSparkline(coindata.id);
      getSparkline.slice(0, 100).forEach((coinInfo: any) => {
        const ohlcToDate = new Date(coinInfo[0]);
        const ohlcArray = [...ohlc];
        ohlcArray.push(ohlcToDate);
        setOhlc((oldOhlcArray: any) => [...oldOhlcArray, ...ohlcArray]);

        const dataOhlcArray = [...dataOhlc];
        dataOhlcArray.push(coinInfo[1], coinInfo[2], coinInfo[3], coinInfo[4]);
        setDataOhlc((oldDataOhlcArray) => [
          ...oldDataOhlcArray,
          ...dataOhlcArray,
        ]);

        setSeries((oldValue) => [
          ...oldValue,
          {
            name: "series-1",
            data: [
              {
                x: ohlcArray.map((item) => {
                  return item;
                }),
                y: dataOhlcArray.map((item) => {
                  return item;
                }),
              },
            ],
          },
        ]);

        setSparklineLoading(false);
      });
    };

    loadSparkline();
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
        <h1>{coindata.name}</h1>
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
          {sparklineLoading ? (
            <div>
              <LoadingCircle />
            </div>
          ) : (
            <div id="candlestick-graph" className="graph">
              <ReactApexChart
                options={options}
                series={series}
                type="candlestick"
                width="100%"
                height="650"
              />
            </div>
          )}
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
