import React from "react";
import Image from "next/image";

import { FooterContainer, WarnAbout } from "./styles";

import PHLogo from "../../assets/images/pizy.svg";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <div className="content">
          <div className="info">
            <Image src={PHLogo} alt="PIZY House Logo" width={128} height={64} />
            <p>
              © 2022 PIZY House.
              <br />
              Todos os direitos reservados.
            </p>
          </div>
          <div className="navbar">
            <div>
              <span>Empresa</span>
              <ul>
                <li>
                  <a href="">Sobre</a>
                </li>
                <li>
                  <a href="">Carreiras</a>
                </li>
                <li>
                  <a href="">Afiliados</a>
                </li>
                <li>
                  <a href="">Termos e privacidade</a>
                </li>
                <li>
                  <a href="">Política de Cookies</a>
                </li>
                <li>
                  <a href="">Preferências de cookies</a>
                </li>
              </ul>
            </div>
            <div>
              <span>Ajuda</span>
              <ul>
                <li>
                  <a href="">Central de ajuda</a>
                </li>
                <li>
                  <a href="">Fale conosco</a>
                </li>
                <li>
                  <a href="">Criar conta</a>
                </li>
                <li>
                  <a href="">Informações da conta</a>
                </li>
                <li>
                  <a href="">Formas de pagamento</a>
                </li>
                <li>
                  <a href="">Criptomoedas aceitas</a>
                </li>
                <li>
                  <a href="">Acesso à conta</a>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <span>Indivíduos</span>
                <ul>
                  <li>
                    <a href="">Comprar e vender</a>
                  </li>
                  <li>
                    <a href="">Carteira</a>
                  </li>
                  <li>
                    <a href="">NFTs</a>
                  </li>
                </ul>
              </div>
              <div>
                <span>Links</span>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/gelzinn/PIZY-House"
                    >
                      Projeto no GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/gelzinn/PIZY-House#equipe-family_man_man_boy_boy"
                    >
                      Membros da Equipe
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/gelzinn/PIZY-House#tecnologias-utilizadas-man_technologist"
                    >
                      Tecnologias Utilizadas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </FooterContainer>
      <WarnAbout>
        <p>
          Uma realização &lsquo;&lsquo;
          <a
            target="_blank"
            href="https://github.com/gelzinn/PIZYHouse#equipe-family_man_man_boy_boy"
            rel="noreferrer"
          >
            PIZY House
          </a>
          &rsquo;&rsquo;. Este projeto é um produto original e próprio dos
          membros da PIZY.
        </p>
        <p>
          A cópia dele ou o reenvio do mesmo resultará em grandes implicações ao
          seu projeto. Cópia é{" "}
          <abbr
            title=" Caracteriza-se como plágio a cópia parcial, integral ou conceitual
            de uma obra sem a apresentação da fonte original ou quando os
            créditos do trabalho são dados a outra pessoa sem a permissão
            explícita do autor(a) inicial. - www.educamaisbrasil.com.br"
          >
            plágio
          </abbr>
          .
        </p>
      </WarnAbout>
    </>
  );
}
