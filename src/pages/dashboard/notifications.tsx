import type { NextPage } from "next";
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
import {
  NotificationItem,
  NotificationsWrapper,
} from "~/styles/pages/dashboard/notifications";

interface NotificationPageProps {
  handleLoggedChange: () => void;
}

export default function Notification({
  handleLoggedChange,
}: NotificationPageProps) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

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

  return (
    <>
      {user ? (
        <>
          <Head>
            <title>PIZY House · Notificações</title>
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
              <h1>Notificações</h1>
              <NotificationsWrapper>
                <NotificationItem className="up">
                  <span>Alta</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/up-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="down">
                  <span>Queda</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/down-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="up">
                  <span>Alta</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/up-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="up">
                  <span>Alta</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/up-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="down">
                  <span>Queda</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/down-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="down">
                  <span>Queda</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/down-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="up">
                  <span>Alta</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/up-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="up">
                  <span>Alta</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/up-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="down">
                  <span>Queda</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/down-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="up">
                  <span>Alta</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/up-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="up">
                  <span>Alta</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/up-arrow.svg" />
                  </i>
                </NotificationItem>
                <NotificationItem className="down">
                  <span>Queda</span>
                  <p>
                    A moeda <b>Bitcoin</b> está em alta! Aproveite enquanto
                    pode. Caso queira saber mais, vá na aba de{" "}
                    <a href="/topday">Melhores do dia</a> e clique na respectiva
                    moeda. Todas as informações estarão lá, detalhadamente.
                  </p>
                  <i>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/da27cd11c79e16c96b9755e06d8a5ef19660a930/icons/down-arrow.svg" />
                  </i>
                </NotificationItem>
              </NotificationsWrapper>
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
