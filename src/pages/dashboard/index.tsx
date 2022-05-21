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
                  <h3>Seu perfil</h3>
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
                  <h3>Melhores moedas do momento</h3>
                  <div className="container">
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
                                <p>{name}</p>
                              </div>
                              {formatterToMoney.format(current_price)}
                            </CoinInfo>
                          );
                        }
                      )}
                    </div>
                  </div>
                </CardBox>
                {user.name && (
                  <CardBox>
                    <h3>Seus cartões</h3>
                    <div className="container">
                      <div className="card">
                        <header>
                          <div className="title">
                            <span>PIZY</span>Card.
                          </div>
                          <p>
                            Starter
                            {/* {(() => {
                              switch (post) {
                                default:
                                  return "Starter";
                                case "Business":
                                  return "Business";
                                case "CEO":
                                  return "CEO";
                                case "Developer":
                                  return "Developer";
                              }
                            })()} */}
                          </p>
                        </header>
                        <div>
                          <img
                            src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/chip.png"
                            alt="Card Chip"
                          />
                          <img
                            src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/aproximation.png"
                            alt="Card Aproximation"
                          />
                        </div>
                        <footer>
                          <div className="name">{user.name}</div>
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z" />
                          </svg>
                        </footer>
                      </div>
                    </div>
                    <footer
                      onClick={() => {
                        window.location.href = "/dashboard/wallet";
                      }}
                    >
                      Veja seus cartões aqui.
                    </footer>
                  </CardBox>
                )}
                {/* <CardBox>
                  <h3>Crescimento da plataforma</h3>
                  <div className="container"></div>
                </CardBox> */}
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
