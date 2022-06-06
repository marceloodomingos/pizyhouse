import dynamic from "next/dynamic";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import Aside from "../../components/Aside";
import FooterApp from "../../components/FooterApp";
import DashboardNavbar from "../../components/DashboardNavbar";
import { MainApp } from "../../styles/pages/dashboard";
import { useRouter } from "next/router";
import { auth } from "~/services/firebase";
import LoadingCircle from "~/components/Loading";
import { getCryptoSparkline } from "~/api/getCryptoSparkline";
import { AnalyzeContainer } from "~/styles/pages/dashboard/analyze";
import { GetStaticProps } from "next";
import { render } from "react-dom";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface SelectedCoinProps {
  id: string;
  name: string;
}

interface AnalyzePageProps {
  topcoins: any;
  handleLoggedChange: () => void;
}

export default function Dashboard({
  topcoins,
  handleLoggedChange,
}: AnalyzePageProps) {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [ohlc, setOhlc] = useState<any>([]);
  const [dataOhlc, setDataOhlc] = useState([]);
  const [sparklineLoading, setSparklineLoading] = useState(false);
  const PIZYAnalyzeCoin = localStorage.getItem("PIZY_AC");

  const [options, setOptions] = useState({
    chart: {
      id: "price-changes",
    },
    title: {
      text: `Alteração de valor de mercado`,
    },
    noData: {
      text: "Carregando...",
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [],
    },
  ]);

  useEffect(() => {
    const loadSparkline = async () => {
      setSparklineLoading(true);
      const getSparkline = await getCryptoSparkline(
        selectedCoin || PIZYAnalyzeCoin
      );
      getSparkline.slice(0, 100).forEach((coinInfo: any) => {
        const ohlcToDate = new Date(coinInfo[0]);
        const ohlcArray = [...ohlc];
        ohlcArray.push(ohlcToDate);

        const dataOhlcArray = [...dataOhlc];
        dataOhlcArray.push(coinInfo[1], coinInfo[2], coinInfo[3], coinInfo[4]);

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
      });
      setSparklineLoading(false);
      setOptions({
        chart: {
          id: "price-changes",
        },
        title: {
          text: `Alteração de valor de mercado | ${selectedCoin.toLocaleUpperCase()}`,
        },
        noData: {
          text: "Carregando...",
        },
      });
    };

    loadSparkline();
  }, [selectedCoin]);

  useEffect(() => {
    setCoins(topcoins);

    if (!PIZYAnalyzeCoin) {
      localStorage.setItem("PIZY_AC", JSON.stringify(selectedCoin));
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user;
      } else {
        router.push("/signin");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {user ? (
        <>
          <Head>
            <title>PIZY House · Analisar</title>
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

          <DashboardNavbar handleLoggedChange={handleLoggedChange} />
          <Aside />
          <MainApp>
            <div className="container">
              <h1>Analisar</h1>
              <AnalyzeContainer>
                <select
                  className="select-coin"
                  value={selectedCoin}
                  onChange={(e) => {
                    setSelectedCoin(e.target.value);
                    localStorage.setItem(
                      "PIZY_AC",
                      JSON.stringify(e.target.value)
                    );
                  }}
                >
                  {coins.map(({ id, name }: SelectedCoinProps) => {
                    return (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    );
                  })}
                </select>
                <>
                  {(() => {
                    if (sparklineLoading) {
                      return (
                        <div>
                          <LoadingCircle />
                        </div>
                      );
                    } else {
                      return (
                        <div id="candlestick-graph" className="graph">
                          <ReactApexChart
                            options={options}
                            series={series}
                            type="candlestick"
                            width="100%"
                            height="650"
                          />
                        </div>
                      );
                    }
                  })()}
                </>
              </AnalyzeContainer>
            </div>
          </MainApp>
          <FooterApp />
        </>
      ) : (
        <main className="loadingApp">
          <LoadingCircle />
        </main>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1"
  );
  const data = await response.json();

  return {
    props: {
      topcoins: data,
    },
  };
};
