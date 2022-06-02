import { ArrowUp } from "phosphor-react";
import { BackTop } from "./styles";

export default function BackToTop() {
  function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <BackTop onClick={toTopFunction}>
      <ArrowUp />
    </BackTop>
  );
}
