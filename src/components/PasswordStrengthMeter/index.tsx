import React from "react";
import zxcvbn from "zxcvbn";
import { AboutPassword, ProgressBar, ShowProgress } from "./styles";

export default function PasswordStrengthMeter({ password }: any) {
  const testStrenght = zxcvbn(password);
  const scorePassword = (testStrenght.score * 100) / 4;

  const progressColor = () => {
    switch (testStrenght.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const progressWarn = () => {
    switch (testStrenght.score) {
      case 0:
        return "Muito fraca";
      case 1:
        return "Fraca";
      case 2:
        return "Boa";
      case 3:
        return "Forte";
      case 4:
        return "Excelente";
      default:
        return "";
    }
  };

  const changePasswordInfo = () => ({
    width: `${scorePassword}%`,
    background: progressColor(),
  });

  return (
    <AboutPassword>
      <ProgressBar>
        <ShowProgress style={changePasswordInfo()} />
      </ProgressBar>
      <p style={{ color: progressColor() }}>{progressWarn()}</p>
    </AboutPassword>
  );
}
