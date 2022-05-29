import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Banner, Features, Advertising, Partners } from "../styles/pages/home";

import World from "../assets/images/world.png";
import PartnersOne from "../assets/brand/partners.png";

import Link from "next/link";
import Slogan from "../components/Slogan";
import {
  CircleWavyCheck,
  Clock,
  Database,
  EyeSlash,
  GraduationCap,
  HandPointing,
  Handshake,
  Medal,
  Shield,
} from "phosphor-react";
import { BGContent } from "~/components/BGContent/styles";
import Button from "~/components/Button";

interface HomePageProps {
  handleLoggedChange: () => void;
}

export default function Home({ handleLoggedChange }: HomePageProps) {
  return (
    <>
      <Head>
        <title>PIZY House · Invista no nosso futuro, invista conosco!</title>
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
        <Banner>
          <Slogan>
            <span>
              Faça sua <b>coleção</b> de <b>criptomoedas</b> na PIZY.
            </span>
            <p>Invista conosco, invista no nosso futuro.</p>
            <div className="actions">
              <Button
                isGlowing
                onClick={() => {
                  window.location.href = "/signup";
                }}
              >
                Embarcar nessa jornada
              </Button>
              <div className="divider">ou</div>
              <Button
                isOutlined
                onClick={() => {
                  window.location.href = "/dashboard";
                }}
              >
                Entrar na sua conta
              </Button>
            </div>
          </Slogan>
          <div className="content">
            <Image src={World} alt="Bitcoin" />
          </div>
        </Banner>
        <Features>
          <div className="content">
            <div className="about">
              <div className="title">
                <span>
                  Na PIZY o investimento é <b>simples</b>.
                </span>
                <p>Tão simples quanto espremer um limão</p>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="feature-info">
                    <CircleWavyCheck />
                    <span>Empresa Aprovada</span>
                  </div>
                  <p>
                    Somos aprovados por muitos especialistas, apesar do pouco
                    tempo que estamos no mercado. Estamos aqui pra você e pelo
                    nosso futuro.
                  </p>
                </div>
                <div className="feature">
                  <div className="feature-info">
                    <Medal />
                    <span>Somos Pioneiros</span>
                  </div>
                  <p>
                    A PIZY é pioneira na revelação de novos investidores nesse
                    cenário digital recente. Tanto como em criptomoedas, como em
                    NFTs.
                  </p>
                </div>
                <div className="feature">
                  <div className="feature-info">
                    <Clock />
                    <span>Empresa Facilitadora</span>
                  </div>
                  <p>
                    Em pouquíssimo tempo você estará apto para investir. Nossa
                    plataforma é totalmente simples, jovem e acessível para
                    todos os públicos.
                  </p>
                </div>
              </div>
            </div>
            <div className="about">
              <div className="title">
                <span>
                  Temos uma <b>segurança</b> fora da curva.
                </span>
                <p>Suas informações estão totalmente protegidas</p>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="feature-info">
                    <Shield />
                    <span>Armazenamento Seguro</span>
                  </div>
                  <p>
                    A PIZY House armazena grande parte dos ativos offline, em
                    segurança, enquanto os dados armazenados online são
                    guardados por servidores de confiança.
                  </p>
                  <a>
                    Saiba como seus fundos são totalmente protegidos
                    <i />
                  </a>
                </div>
                <div className="feature">
                  <div className="feature-info">
                    <Database />
                    <span>Seguro Digital</span>
                  </div>
                  <p>
                    Em caso de acidentes com a infraestrutura da PIZY House,
                    todos as perdas são cobertas pela FDIC - Federal Deposit
                    Insurance Corporation.
                  </p>
                  <a>
                    Saiba como suas criptomoedas são protegidas
                    <i />
                  </a>
                </div>
                <div className="feature">
                  <div className="feature-info">
                    <EyeSlash />
                    <span>Criptografia de Ponta</span>
                  </div>
                  <p>
                    Todas as transações são protegidas e criptografadas antes de
                    serem concluidas.
                  </p>
                  <a>
                    Saiba como empregamos as melhores práticas para segurança
                    <i />
                  </a>
                </div>
              </div>
            </div>
            <div className="about">
              <div className="title">
                <span>
                  Por que <b>investir</b> com a PIZY?
                </span>
                <p>Saiba vantagens sobre esse mundo tecnológico</p>
              </div>
              <div className="features">
                <div className="feature">
                  <div className="feature-info">
                    <GraduationCap />
                    <span>Experiência</span>
                  </div>
                  <p>
                    Estamos no mercado há quase 10 anos, e juntos fundamos a
                    PIZY House com o intuito de tornar mais simples o
                    investimento.
                  </p>
                </div>
                <div className="feature">
                  <div className="feature-info">
                    <HandPointing />
                    <span>Comprometimento</span>
                  </div>
                  <p>
                    Nossos sócios e funcionarios trabalham 24 horas por dia para
                    melhorar a sua experiência com nosso site.
                  </p>
                </div>
                <div className="feature">
                  <div className="feature-info">
                    <Handshake />
                    <span>Confiança</span>
                  </div>
                  <p>
                    A PIZY House é mais do que uma empresa de investimentos, é
                    uma casa onde você pode contar com a gente para facilitar
                    seu caminho até o sucesso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Features>
        <Advertising>
          <div className="phrase">
            <span>Entre nesse mundo digital com a PIZY.</span>
            <p>Invista no nosso futuro, invista conosco.</p>
          </div>
          <Link href="/signup">Criar Conta</Link>
        </Advertising>
        <Partners>
          <div className="title">
            <span>Fazem a PIZY funcionar.</span>
            <p>
              Conheçam nossos parceiros que investem em nosso projeto e
              acreditam em um futuro melhor
            </p>
          </div>
          <Image src={PartnersOne} alt="Partners One" objectFit="cover" />
        </Partners>
      </main>
      <Footer />
      <BGContent />
    </>
  );
}
