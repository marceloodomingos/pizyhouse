import styled from "styled-components";

export const BGContent = styled.div`
  /* display: none; */
  width: 150vw;
  height: 100vw;
  position: absolute;
  z-index: -1;
  top: -25%;
  right: 0;
  opacity: 0.5;
  background-image: url("https://raw.githubusercontent.com/gelzinn/ph-assets/main/glow.svg"),
    url("https://raw.githubusercontent.com/gelzinn/ph-assets/main/glow.svg");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 900px) {
    top: -5%;
    width: 130vw;
  }
`;
