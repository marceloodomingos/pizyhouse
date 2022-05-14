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
import { ProfileContainer } from "~/styles/pages/dashboard/profile";
import { UserCircle, UserFocus } from "phosphor-react";

interface ProfilePageProps {
  handleLoggedChange: () => void;
}

export default function Profile({ handleLoggedChange }: ProfilePageProps) {
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
      {user && (
        <>
          <Head>
            <title>PIZY House · Seu perfil</title>
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
              <h1>Seu perfil</h1>
              {user && (
                <ProfileContainer>
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
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </ProfileContainer>
              )}
            </div>
          </MainApp>
          <FooterApp />
        </>
      )}
    </>
  );
}
