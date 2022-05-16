import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import Aside from "../../components/Aside";
import FooterApp from "../../components/FooterApp";
import DashboardNavbar from "../../components/DashboardNavbar";
import { MainApp } from "../../styles/pages/dashboard";
import { auth } from "~/services/firebase";
import { useRouter } from "next/router";
import {
  OfferContainer,
  TradeActions,
  TradeContainer,
  TradeContent,
  TradeDiv,
} from "~/styles/pages/dashboard/trade";
import {
  ArrowsLeftRight,
  Clock,
  Envelope,
  IdentificationCard,
  LockKeyOpen,
  PencilCircle,
  UserCircle,
  UserFocus,
} from "phosphor-react";
import LoadingCircle from "~/components/Loading";
import { getRandomUser } from "~/api/getRandomUser";
import NothingHere from "~/components/NothingHere";

interface ProfilePageProps {
  handleLoggedChange: () => void;
}

export default function Trade({ handleLoggedChange }: ProfilePageProps) {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [randomUser, setRandomUser] = useState([]);
  const [randomUserLoading, setRandomUserLoading] = useState(false);
  const [trades, setTrades] = useState(1);

  useEffect(() => {
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

  useEffect(() => {
    if (trades >= 1) {
      const randomUserTrade = async () => {
        setRandomUserLoading(true);
        const randomUserTrade = await getRandomUser();
        setRandomUser(randomUserTrade.results);
        setRandomUserLoading(false);
      };
      randomUserTrade();
    }
  }, []);

  interface RandomUserProps {
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    name: {
      first: string;
      last: string;
    };
  }

  return (
    <>
      {user ? (
        <>
          <Head>
            <title>PIZY House · Trocas</title>
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
            {trades ? (
              <div className="container">
                <h1>Trocas</h1>
                <OfferContainer>
                  <TradeDiv itsUser>
                    <div className="avatar">
                      {user.avatar ? (
                        <div className="user">
                          <img src={user.avatar} />
                          <UserFocus />{" "}
                        </div>
                      ) : (
                        <UserCircle />
                      )}
                    </div>
                    <div className="info">
                      <div>
                        {user.name ? (
                          <>
                            <h3>{user.name}</h3>
                          </>
                        ) : (
                          <h3>Você</h3>
                        )}
                      </div>
                    </div>
                  </TradeDiv>
                  <ArrowsLeftRight id="trade-icon" />
                  <TradeDiv>
                    {!randomUserLoading ? (
                      <>
                        {randomUser.map(
                          ({ picture, name }: RandomUserProps) => {
                            return (
                              <>
                                <div className="avatar">
                                  <div className="user">
                                    <img src={picture.large} />
                                    <UserFocus />
                                  </div>
                                </div>
                                <div className="info">
                                  <div>
                                    <h3>
                                      {name.first}&nbsp;
                                      {name.last}
                                    </h3>
                                  </div>
                                </div>
                              </>
                            );
                          }
                        )}
                      </>
                    ) : (
                      <LoadingCircle />
                    )}
                  </TradeDiv>
                </OfferContainer>
                <>
                  <TradeContainer>
                    <TradeContent>
                      <h3>
                        Proposta de{" "}
                        {randomUser.map(
                          ({ picture, name }: RandomUserProps) => {
                            return (
                              <span>
                                {name.first}&nbsp;
                                {name.last}
                              </span>
                            );
                          }
                        )}
                        :
                      </h3>
                    </TradeContent>
                    <TradeActions>
                      <button onClick={() => setTrades(0)}>Aceitar</button>
                      <button onClick={() => setTrades(0)}>Recusar</button>
                    </TradeActions>
                  </TradeContainer>
                </>
              </div>
            ) : (
              <>
                <h1>Trocas</h1>
                <NothingHere
                  text={"Não há nenhuma troca até o momento."}
                  obs={"Tente voltar mais tarde."}
                />
              </>
            )}
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
