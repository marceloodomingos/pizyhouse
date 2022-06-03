import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AuthContext from "~/contexts/AuthContext";
import Aside from "../../components/Aside";
import FooterApp from "../../components/FooterApp";
import { CardBox, MainApp, RecentStats } from "../../styles/pages/dashboard";
import DashboardNavbar from "../../components/DashboardNavbar";
import { auth } from "~/services/firebase";
import { useRouter } from "next/router";
import LoadingCircle from "~/components/Loading";
import PIZYCard from "~/components/Card";
import NothingHere from "~/components/NothingHere";
import {
  ActionCard,
  ProfileCard,
  ProfileItems,
  QuickActions,
} from "~/styles/pages/dashboard/wallet";
import {
  Bank,
  CurrencyDollar,
  Handshake,
  Receipt,
  Shield,
} from "phosphor-react";

interface WalletPageProps {
  handleLoggedChange: () => void;
}

export default function Wallet({ handleLoggedChange }: WalletPageProps) {
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
            <title>PIZY House · Carteira</title>
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
              <h1>Carteira</h1>
              <RecentStats>
                <CardBox>
                  <header>
                    <h3>Seu saldo</h3>
                  </header>
                  <div className="container">
                    <NothingHere
                      icon="Money"
                      text="Saldo zerado até o momento."
                    />
                  </div>
                </CardBox>
                <CardBox>
                  <header>
                    <h3>Seus cartões</h3>
                  </header>
                  <div className="container">
                    {user.name ? (
                      <div className="row">
                        <PIZYCard name={user.name} />
                      </div>
                    ) : (
                      <p>
                        Você não pode ter cartões PIZY. Para obter um, é
                        necessário um <b>nome</b>, que pode ser inserido ao
                        criar uma conta com a <i>Google</i>.
                      </p>
                    )}
                  </div>
                </CardBox>
              </RecentStats>
              <ProfileItems>
                <ProfileCard>
                  <header>
                    <div className="title">
                      <p>Suas</p>
                      <span>Moedas</span>
                    </div>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/bitcoin.png" />
                  </header>
                  <div className="container">
                    <p>
                      Confira todas as suas <b>criptomoedas</b> e todas suas
                      respectivas informações.
                    </p>
                  </div>
                </ProfileCard>
                <ProfileCard>
                  <header>
                    <div className="title">
                      <p>Suas</p>
                      <span>Nfts</span>
                    </div>
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/nft-example.png" />
                  </header>
                  <div className="container">
                    <p>
                      Confira todas as suas <b>NFTs</b> e todas suas respectivas
                      informações.
                    </p>
                  </div>
                </ProfileCard>
              </ProfileItems>
              <QuickActions>
                <ActionCard>
                  <div className="container">
                    <Shield />
                    <p>Seguros</p>
                  </div>
                  <div className="bg">
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/0325fe7e33c7b3da523a4e05681a91bff8d06bf7/gradient/shield.svg" />
                  </div>
                </ActionCard>
                <ActionCard>
                  <div className="container">
                    <CurrencyDollar />
                    <p>Sacar</p>
                  </div>
                  <div className="bg">
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/0325fe7e33c7b3da523a4e05681a91bff8d06bf7/gradient/currencydollar.svg" />
                  </div>
                </ActionCard>
                <ActionCard>
                  <div className="container">
                    <Receipt />
                    <p>Extrato</p>
                  </div>
                  <div className="bg">
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/0325fe7e33c7b3da523a4e05681a91bff8d06bf7/gradient/receipt.svg" />
                  </div>
                </ActionCard>
                <ActionCard>
                  <div className="container">
                    <Bank />
                    <p>Adicionar Dinheiro</p>
                  </div>
                  <div className="bg">
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/0325fe7e33c7b3da523a4e05681a91bff8d06bf7/gradient/bank.svg" />
                  </div>
                </ActionCard>
                <ActionCard>
                  <div className="container">
                    <Handshake />
                    <p>Transferir</p>
                  </div>
                  <div className="bg">
                    <img src="https://raw.githubusercontent.com/gelzinn/ph-assets/0325fe7e33c7b3da523a4e05681a91bff8d06bf7/gradient/handshake.svg" />
                  </div>
                </ActionCard>
              </QuickActions>
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
