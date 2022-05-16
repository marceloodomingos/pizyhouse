import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Banner, Features } from "../styles/pages/home";

import Bitcoin from "/assets/images/bitcoin.png";
import PizyHouse from "/assets/images/pizy-house.svg";
import { Coin } from "../styles/pages/topday";
import { BGContent } from "~/components/BGContent/styles";
import {
  EnvelopeSimple,
  Eye,
  EyeSlash,
  Lock,
  UserCirclePlus,
} from "phosphor-react";
import { Sign, SignForm } from "~/styles/pages/sign";
import { auth } from "~/services/firebase";
import AuthContext from "~/contexts/AuthContext";
import Link from "next/link";

interface SignUpProps {
  handleLoggedChange: () => void;
}

export default function SignUp({ handleLoggedChange }: SignUpProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const value = useContext(AuthContext);

  async function createUserFirebase() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        if (error.code == "auth/email-already-in-use") {
          alert("Este e-mail já está registrado.");
        } else if (error.code == "auth/invalid-email") {
          alert("O e-mail é invalido.");
        } else if (error.code == "auth/operation-not-allowed") {
          alert("Operação não permitida.");
        } else if (error.code == "auth/weak-password") {
          alert("A senha é muito fraca. Preencha novamente.");
        }
      })
      .then(async () => {
        alert("Conta criada com sucesso");
        await auth
          .signInWithEmailAndPassword(email, password)
          .catch(function (error) {
            if (error.code == "auth/wrong-password") {
              alert("E-mail ou senha incorretos.");
            }
          })
          .then(() => {
            window.location.href = "/dashboard";
          });
      });
  }

  async function loginWithGoogle() {
    await value.signInWithGoogle();
    auth.onAuthStateChanged(function (user) {
      if (user) {
        window.location.href = "/dashboard";
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim().length !== 0) {
      if (password.trim().length === 0) {
        alert("Preencha a senha.");
      }
      if (confirmPassword.trim().length === 0) {
        alert("Confirme a senha.");
      }
      if (password == confirmPassword) {
        createUserFirebase();
      } else {
        alert("As senhas não conferem.");
      }
    } else {
      alert("Preencha o email.");
    }
  }

  return (
    <>
      <Head>
        <title>PIZY House · Registrar uma conta</title>
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
        <h1>Crie sua conta</h1>
        <Sign>
          <SignForm onSubmit={handleSubmit}>
            <UserCirclePlus />
            <div className="inputs">
              <div>
                <EnvelopeSimple />
                <input
                  type="email"
                  placeholder="Insira seu e-mail"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <Lock />
                {!viewPassword ? (
                  <>
                    <input
                      type="password"
                      placeholder="Senha"
                      autoComplete="on"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <Eye
                      onClick={() => {
                        setViewPassword(!viewPassword);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Senha"
                      autoComplete="on"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <EyeSlash
                      onClick={() => {
                        setViewPassword(!viewPassword);
                      }}
                    />
                  </>
                )}
              </div>
              <div>
                <Lock />
                {!viewPassword ? (
                  <>
                    <input
                      type="password"
                      placeholder="Confirme sua senha"
                      required
                      autoComplete="on"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                    <Eye
                      onClick={() => {
                        setViewPassword(!viewPassword);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Confirme sua senha"
                      required
                      autoComplete="on"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                    <EyeSlash
                      onClick={() => {
                        setViewPassword(!viewPassword);
                      }}
                    />
                  </>
                )}
              </div>
              <button type="submit">Criar Conta</button>
            </div>
            <section className="options">
              <p>Já tem uma conta na PIZY House?</p>
              <Link href="/signin">Entre aqui!</Link>
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
