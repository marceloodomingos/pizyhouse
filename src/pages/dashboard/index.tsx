import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import AuthContext from "~/contexts/AuthContext";
import Aside from "../../components/Aside";
import FooterApp from "../../components/FooterApp";
import {
  Banner,
  CardBox,
  CoinInfo,
  MainApp,
  RecentStats,
} from "../../styles/pages/dashboard";
import DashboardNavbar from "../../components/DashboardNavbar";
import { firebase, auth } from "~/services/firebase";
import { useRouter } from "next/router";
import LoadingCircle from "~/components/Loading";
import AbstractHead from "~/assets/images/abstract-head.png";
import { User } from "phosphor-react";
import PIZYCard from "~/components/Card";
import NothingHere from "~/components/NothingHere";

interface DashboardPageProps {
  topcoins: any;
  handleLoggedChange: () => void;
}

export default function Dashboard({
  topcoins,
  handleLoggedChange,
}: DashboardPageProps) {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [coins, setCoins] = useState([]);

  async function logOutFirebase() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert("Deslogado com sucesso.");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const formatterToMoney = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    setCoins(topcoins);

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
            <title>PIZY House · Painel de controle</title>
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
              <h1>Dashboard</h1>
              <Banner>
                <div className="content">
                  <div className="info">
                    <p>
                      Descubra, colete, compre e venda <span>NFTs</span>.
                    </p>
                    <div className="actions">
                      <button
                        onClick={() => {
                          window.location.href = "/nfts";
                        }}
                      >
                        Descobrir
                      </button>
                      <button
                        onClick={() => {
                          window.location.href = "/nfts";
                        }}
                      >
                        Ver mais
                      </button>
                    </div>
                  </div>
                  <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/abstract-head.png" />
                </div>
              </Banner>
              <RecentStats>
                <CardBox
                  user
                  onClick={() => {
                    window.location.href = "/dashboard/profile";
                  }}
                >
                  <header>
                    <h3>Seu perfil</h3>
                  </header>
                  <div className="container">
                    <div className="content">
                      {user.avatar ? (
                        <div className="avatar">
                          <img src={user.avatar} />
                        </div>
                      ) : (
                        <div className="avatar">
                          <User />
                        </div>
                      )}
                      {user.name ? (
                        <p>
                          Você está logado como <b>{user.name.split(" ")[0]}</b>
                          .
                        </p>
                      ) : (
                        <p>
                          Você está logado como <b>{user.email}</b>.
                        </p>
                      )}
                    </div>
                  </div>
                  <footer
                    onClick={() => {
                      logOutFirebase();
                    }}
                  >
                    <p>
                      Não é{" "}
                      {user.name ? (
                        <b>{user.name.split(" ")[0]}</b>
                      ) : (
                        <b>{user.email}</b>
                      )}
                      ? Troque de conta aqui.
                    </p>
                  </footer>
                </CardBox>
                <CardBox>
                  <header>
                    <h3>Melhores moedas do momento</h3>
                    <p
                      onClick={() => {
                        window.location.href = "/topday";
                      }}
                    >
                      Ver mais
                    </p>
                  </header>
                  <div className="container full-container">
                    <div className="coins">
                      {coins.map(
                        ({
                          id,
                          market_cap_rank,
                          symbol,
                          image,
                          name,
                          current_price,
                        }) => {
                          return (
                            <CoinInfo
                              onClick={() => {
                                window.location.href = `/coin/${id}`;
                              }}
                              key={symbol}
                            >
                              <div>
                                <span>{market_cap_rank}</span>
                                <img src={image} alt={symbol} />
                                <p>
                                  {name}
                                  <b>
                                    <svg
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="32"
                                      height="32"
                                      fill="#ffffff"
                                      viewBox="0 0 256 256"
                                    >
                                      <rect
                                        width="256"
                                        height="256"
                                        fill="none"
                                      ></rect>
                                      <line
                                        x1="40"
                                        y1="128"
                                        x2="216"
                                        y2="128"
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="16px"
                                      ></line>
                                      <polyline
                                        points="144 56 216 128 144 200"
                                        fill="none"
                                        stroke="#FFFFFF"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="16px"
                                      ></polyline>
                                    </svg>
                                  </b>
                                </p>
                              </div>
                              {formatterToMoney.format(current_price)}
                            </CoinInfo>
                          );
                        }
                      )}
                    </div>
                  </div>
                </CardBox>
                <CardBox>
                  <header>
                    <h3>Seus cartões</h3>
                  </header>
                  <div className="container">
                    {user.name ? (
                      <PIZYCard name={user.name} />
                    ) : (
                      <p>
                        Você não pode ter cartões PIZY. Para obter um, é
                        necessário um <b>nome</b>, que pode ser inserido ao
                        criar uma conta com a <i>Google</i>.
                      </p>
                    )}
                  </div>
                  <footer
                    onClick={() => {
                      window.location.href = "/dashboard/wallet";
                    }}
                  >
                    Veja seus cartões aqui.
                  </footer>
                </CardBox>
                <CardBox>
                  <header>
                    <h3>Suas melhores moedas</h3>
                  </header>
                  <div className="container">
                    <NothingHere
                      icon="Coins"
                      text="Nenhuma moeda até o momento."
                    />
                  </div>
                </CardBox>
                <CardBox>
                  <header>
                    <h3>Suas melhores nfts</h3>
                  </header>
                  <div className="container">
                    <NothingHere
                      icon="Image"
                      text="Nenhuma NFT até o momento."
                    />
                  </div>
                </CardBox>
              </RecentStats>
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
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=5&page=1"
  );
  const data = await response.json();

  return {
    props: {
      topcoins: data,
    },
  };
};
