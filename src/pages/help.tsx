import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";
import { useRouter } from "next/router";
import { auth } from "~/services/firebase";
import LoadingCircle from "~/components/Loading";
import {
  SomeQuestions,
  SingleDoubt,
  FAQ,
  FAQQuestion,
} from "~/styles/pages/help";
import Button from "~/components/Button";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Link from "next/link";

import FAQData from "~/data/faq_questions.json";
import { CaretDown, CaretUp } from "phosphor-react";

interface ConfigurationsPageProps {
  handleLoggedChange: () => void;
}

interface FAQData {
  open?: boolean;
  question: string;
  answer: string;
  obs?: string;
}

export default function Help({ handleLoggedChange }: ConfigurationsPageProps) {
  const router = useRouter();
  const [questionSelected, setQuestionSelected] = useState(null);
  // const [opennedFAQQuestion, setOpennedFAQQuestion] = useState(false);

  const toggleFaq = (i) => {
    if (questionSelected === i) {
      return setQuestionSelected(null);
    }
    setQuestionSelected(i);
  };

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
                  loading="lazy"
                />
              </div>
              <ol className="steps">
                <p>Passo a passo:</p>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>Crie uma conta na PIZY House.</span>
                    <p>
                      Acesse a tela incial e selecione "Embarque Nessa Jornada"
                      ou clique <Link href="/signup">aqui</Link>. Crie a conta
                      utilizando um email ou a sua conta do Google.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>Deposite a quantia desejada.</span>
                    {/* <p className="with-icons">
                      Vá em Carteira e selecione "Adicionar Dinheiro". Faça suas
                      transferências por Pix&nbsp;
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.283 18.36a3.505 3.505 0 0 0 2.493-1.032l3.6-3.6a.684.684 0 0 1 .946 0l3.613 3.613a3.504 3.504 0 0 0 2.493 1.032h.71l-4.56 4.56a3.647 3.647 0 0 1-5.156 0L4.85 18.36ZM18.428 5.627a3.505 3.505 0 0 0-2.493 1.032l-3.613 3.614a.67.67 0 0 1-.946 0l-3.6-3.6A3.505 3.505 0 0 0 5.283 5.64h-.434l4.573-4.572a3.646 3.646 0 0 1 5.156 0l4.559 4.559ZM1.068 9.422 3.79 6.699h1.492a2.483 2.483 0 0 1 1.744.722l3.6 3.6a1.73 1.73 0 0 0 2.443 0l3.614-3.613a2.482 2.482 0 0 1 1.744-.723h1.767l2.737 2.737a3.646 3.646 0 0 1 0 5.156l-2.736 2.736h-1.768a2.482 2.482 0 0 1-1.744-.722l-3.613-3.613a1.77 1.77 0 0 0-2.444 0l-3.6 3.6a2.483 2.483 0 0 1-1.744.722H3.791l-2.723-2.723a3.646 3.646 0 0 1 0-5.156" />
                      </svg>
                      &nbsp;ou TED&nbsp;
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>TED</title>
                        <path d="M0 7.664v2.223h2.43v6.449H5.1v-6.45h2.43V7.665zm7.945 0v8.672h7.31v-2.223h-4.638v-1.08h4.637v-2.066h-4.637v-1.08h4.637V7.664zm7.759 0v8.672h3.863c3.024 0 4.433-1.688 4.433-4.349 0-2.185-1.021-4.323-3.912-4.323zm2.672 2.223h.85c1.931 0 2.102 1.518 2.102 2.063 0 .815-.243 2.163-1.907 2.163h-1.045z" />
                      </svg>
                      .
                    </p> */}
                    <p>
                      Vá em Carteira e selecione "Adicionar Dinheiro". Faça suas
                      transferências por Pix ou TED .
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
                  <p>
                    Conosco, o processo é um pouco mais simples do que você
                    pensa. Não acredita? A gente te mostra! Basta conferir o que
                    preparamos para você abaixo.
                  </p>
                </div>
                <img
                  src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/illustrations/finance-management-discussion.png"
                  alt="Finance Management"
                  loading="lazy"
                />
              </div>
              <ol className="steps">
                <p>Passo a passo:</p>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>
                      Tenha em mente sua preferência - Criptomoedas ou NFTs.
                    </span>
                    <p>
                      A valorização de NFTs está relacionada com a equação entre
                      escassez e demanda que surge em torno de um token.
                    </p>
                    <p>
                      Já a das criptomoedas, dependem muito da estrutura
                      econômica do ativo - segundo Orlando Telles. Um grande
                      número de transações indica que o ativo possui alta
                      liquidez, o que é algo positivo ao reduzir o <i>spread</i>{" "}
                      — ou seja, a diferença do preço entre a compra e a venda —
                      do ativo, bem como a sua volatilidade.
                    </p>
                    <blockquote>
                      <a href="https://forbes.com.br/forbes-money/2022/02/como-analisar-criptomoedas-para-investir-veja-3-fatores-essenciais">
                        forbes.com.br
                      </a>
                    </blockquote>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>
                      Analise o quanto você quer ganhar e o quanto pode se
                      arriscar.
                    </span>
                    <p>
                      Dependendo do tipo de aplicação, ela pode estar sujeita a
                      vários riscos. Há três tipos mais comuns:
                    </p>
                    <ul>
                      <li>
                        <p>
                          <b>Risco de mercado:&nbsp;</b>
                          Está relacionado às expectativas em relação à economia
                          do país ou a eventos no exterior. É o que faz a Bolsa
                          e o dólar caírem ou subirem diariamente, com maior ou
                          menor intensidade.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Risco de crédito:&nbsp;</b>É o risco de não receber
                          seu dinheiro no futuro. Para os títulos públicos, por
                          exemplo, o risco é baixo porque a chance de o governo
                          dar calote é pequena, menor que o risco de uma empresa
                          não pagar uma dívida.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Risco de liquidez:&nbsp;</b>
                          Liquidez é a facilidade de transformar investimento em
                          dinheiro. A poupança, por exemplo, tem alta liquidez,
                          pois permite saques a qualquer momento. Alguns fundos
                          só permitem saques após 30 dias.
                        </p>
                      </li>
                    </ul>
                    <blockquote>
                      <a href="https://economia.uol.com.br/financas-pessoais/noticias/redacao/2019/09/13/quanto-maior-o-risco-maior-a-chance-de-ganho-saiba-usar-isso-a-seu-favor.htm">
                        economia.uol.com.br
                      </a>
                    </blockquote>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>
                      Comece com compras baixas para entender o mercado.
                    </span>
                    <p>
                      Não existe um banco para retirar as criptomoedas. O
                      trâmite para emissão e repasse é totalmente digital.
                      Nenhum país ou região emite essas moedas.
                    </p>
                    <p>
                      A compra e venda é bem simples de ser realizada, mas na
                      PIZY você será guiado para não acabar fazendo algo não
                      planejado. Basta somente criar uma conta gratuitamente e
                      informar o valor em reais ou a quantidade de moedas
                      virtuais desejada para comprar ou vender.
                    </p>
                    <blockquote>
                      <a href="https://financeone.com.br/o-que-e-criptomoeda-e-como-investir/">
                        financeone.com.br
                      </a>
                    </blockquote>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>Quanto maior o investimento, maior o lucro 😎.</span>
                    <p>
                      Quando for investir procure sempre analisar o retorno e o
                      risco conjuntamente. A análise apenas do retorno pode
                      levá-lo a realizar investimentos com risco superior ao que
                      estaria disposto a correr. E desconfie sempre de
                      investimentos que prometam retornos milagrosos ou muito
                      fora da realidade do mercado, pois os riscos inerentes
                      podem ser muito altos. Em alguns casos, podem ser até
                      mesmo uma fraude.
                    </p>
                    <blockquote>
                      <a href="https://www.investidor.gov.br/menu/primeiros_passos/Investindo/Conceitos_Importantes.html">
                        investidor.gov.br
                      </a>
                    </blockquote>
                  </div>
                </div>
                <div className="step">
                  <li />
                  <div className="step-info">
                    <span>
                      Fique tranquilo, tudo que você precisa fazer é apertar um
                      botão. O resto é conosco 😉.
                    </span>
                    <p>
                      A gente se preocupa com cada um de nossos clientes, ainda
                      mais com o processo de aprendizado. Portanto, na PIZY toda
                      sua trajetória está facilitada, basta seguir nossos
                      conselhos e dicas.
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
          </SomeQuestions>
          <FAQ>
            <>
              <h1>FAQ</h1>
              {FAQData.map(
                ({ open, question, answer, obs }: FAQData, index) => {
                  return (
                    <FAQQuestion key={index}>
                      <header
                        onClick={() => {
                          toggleFaq(index);
                        }}
                      >
                        <p>{question}</p>
                        {questionSelected == index ? (
                          <CaretUp weight="bold" />
                        ) : (
                          <CaretDown weight="bold" />
                        )}
                      </header>
                      {questionSelected == index && (
                        <>
                          <p>{answer}</p>
                          {obs && <span>{obs}</span>}
                        </>
                      )}
                    </FAQQuestion>
                  );
                }
              )}
              <h4>Sua dúvida não foi respondida? Entre em contato conosco.</h4>
            </>
          </FAQ>
        </div>
      </main>
      <Footer />
    </>
  );
}
