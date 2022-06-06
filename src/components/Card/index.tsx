import { CardContainer } from "./styles";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";

interface PIZYCardProps {
  name: string;
  tier?: string;
}

export default function PIZYCard({ name, tier }: PIZYCardProps) {
  const [cardLevel, setCardLevel] = useState<null | string>(null);

  useEffect(() => {
    if (tier) {
      if (tier === "Starter" || tier === "" || tier === null) {
        setCardLevel(null);
      }
      if (tier === "Business" || tier === "business") {
        setCardLevel("business");
      }
      if (tier === "CEO" || tier === "ceo") {
        setCardLevel("ceo");
      }
      if (tier === "Developer" || tier === "developer") {
        setCardLevel("developer");
      }
    }
  }, [tier]);

  return (
    <Tilt style={{ width: "300px", height: "150px" }}>
      <CardContainer className={cardLevel}>
        <header>
          <div className="title">
            <span>PIZY</span>Card.
          </div>
          <p>
            {(() => {
              if (cardLevel) {
                console.log(cardLevel);
                if (cardLevel === "" || cardLevel === null) {
                  return "Starter";
                }
                if (cardLevel === "business") {
                  return "Business";
                }
                if (cardLevel === "developer") {
                  return "Developer";
                }
                if (cardLevel === "ceo") {
                  return "CEO";
                }
              }
              switch (cardLevel) {
                default:
                  return "Starter";
                case "Business":
                  return "Business";
                case "CEO":
                  return "CEO";
                case "Developer":
                  return "Developer";
              }
            })()}
          </p>
        </header>
        <div>
          <img
            src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/chip.png"
            alt="Card Chip"
          />
          <img
            src="https://raw.githubusercontent.com/gelzinn/ph-assets/main/aproximation.png"
            alt="Card Aproximation"
          />
        </div>
        <footer>
          <div className="name">{name}</div>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z" />
          </svg>
        </footer>
      </CardContainer>
    </Tilt>
  );
}
