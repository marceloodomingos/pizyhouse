import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import { useRouter } from "next/router";
import { auth } from "~/services/firebase";
import LoadingCircle from "~/components/Loading";
import { SomeQuestions, SingleDoubt, FAQ } from "~/styles/pages/help";
import Button from "~/components/Button";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

interface ConfigurationsPageProps {
  handleLoggedChange: () => void;
}

export default function Help({ handleLoggedChange }: ConfigurationsPageProps) {
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
      <Head>
        <title>PIZY House · Ajuda</title>
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
        <h1>Ajuda</h1>
        <div className="container">
          <SomeQuestions>
            <SingleDoubt>
              <div className="container">
                <div className="info">
                  <h2>
                    É novo no mundo <span>digital</span>?
                  </h2>
                  <p>
                    Fique tranquilo! Na PIZY, para iniciar nesse mundo é simples
                    tanto quanto espremer um limão. Basta seguir os seguintes
                    passos que foram montados para o seu sucesso.
                  </p>
                </div>
                <img
                  src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/illustrations/finance-management.png"
                  alt="Finance Management"
                />
              </div>
              <ol className="steps">
                <p>Passo a passo:</p>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>Crie uma conta na PIZY House.</span>
                    <p>
                      Acesse a tela incial e selecione: "Embarque nessa
                      Jornada". Crie a conta utilizando um email ou a sua conta
                      do Google.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>Deposite a quantia desejada.</span>
                    <p>
                      Vá em Carteira e selecione: "Adicionar dinheiro". Faça
                      suas transferências por pix ou TED.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>Escolha entre Criptomoedas ou NFTs.</span>
                    <p>
                      Ambas podem ser facilmente encontradas pelo Dashboard.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>Finalize a sua compra.</span>
                    <p>
                      O dinheiro é descontado automaticamente e o produto
                      adquirido é transferido para sua Carteira.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>Fique ligado 😉!</span>
                    <p>
                      A PIZY sempre vai te notificar de vantagens e
                      exclusividades.
                    </p>
                  </div>
                </div>
                <Button
                  isGlowing
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                >
                  Começar agora
                </Button>
              </ol>
            </SingleDoubt>
            <SingleDoubt>
              <div className="container">
                <div className="info">
                  <h2>
                    Como <span>começar investir</span>?
                  </h2>
                  <p>Na PIZY, para iniciar nesse mundo é simples!</p>
                </div>
                <img
                  src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/illustrations/finance-management-discussion.png"
                  alt="Finance Management"
                />
              </div>
            </SingleDoubt>
          </SomeQuestions>
          <FAQ>
            <h1>FAQ</h1>
          </FAQ>
        </div>
      </main>
      <Footer />
    </>
  );
}
