import type { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BGContent } from "~/components/BGContent/styles";
import { Sign, SignForm } from "~/styles/pages/sign";
import { EnvelopeSimple, Lock, UserSwitch } from "phosphor-react";
import { firebase, auth } from "~/services/firebase";
import AuthContext from "~/contexts/AuthContext";
import Link from "next/link";

interface SignInProps {
  handleLoggedChange: () => void;
}

export default function SignIn({ handleLoggedChange }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const value = useContext(AuthContext);

  useEffect(() => {
    if (value.user) {
      window.location.href = "/dashboard";
    }
  }, []);

  async function loginWithEmail() {
    await auth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        if (error.code == "auth/wrong-password") {
          alert("E-mail ou senha incorretos.");
        }
      });
    window.location.href = "/dashboard";
  }

  async function loginWithGoogle() {
    await value.signInWithGoogle();
    window.location.href = "/dashboard";
  }

  return (
    <>
      <Head>
        <title>PIZY House · Entrar na sua conta</title>
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
        <h1>Entre na sua conta</h1>
        <Sign>
          <SignForm onSubmit={(e) => e.preventDefault()}>
            <UserSwitch />
            <div className="inputs">
              <div>
                <EnvelopeSimple />
                <input
                  type="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <Lock />
                <input
                  type="password"
                  placeholder="Senha"
                  autoComplete="on"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button onClick={() => loginWithEmail()}>Entrar</button>
            </div>
            <section className="options">
              <p>Não tem uma conta na PIZY House?</p>
              <Link href="/signup">
                Crie uma conta agora e dê seus primeiros passos no mercado
                digital com nossa ajuda!
              </Link>
            </section>
          </SignForm>
          <div className="divider">ou</div>
          <button className="google" onClick={() => loginWithGoogle()}>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google</title>
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            Entrar com o Google
          </button>
        </Sign>
      </main>
      <Footer />
      <BGContent />
    </>
  );
}
