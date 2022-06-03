import { useRouter } from "next/router";
import { Coins, FileX, Image, Link, LinkBreak, Money } from "phosphor-react";
import { NothingContainer } from "./styles";

interface NothingProps {
  text: string;
  obs?: string;
  more?: boolean;
  icon?: string;
}

export default function NothingHere({ text, obs, more, icon }: NothingProps) {
  const router = useRouter();

  return (
    <>
      <NothingContainer>
        <div>
          {(() => {
            switch (icon) {
              default:
                return <FileX />;
              case "Link":
                return <Link />;
              case "LinkBreak":
                return <LinkBreak />;
              case "Coins":
                return <Coins />;
              case "Image":
                return <Image />;
              case "Money":
                return <Money />;
            }
          })()}
          <p>
            <b>{text}</b>
          </p>
          <p>{obs}</p>
          {more && (
            <>
              <span className="divider">ou</span>
              <button onClick={() => router.reload()}>Atualize a página</button>
            </>
          )}
        </div>
      </NothingContainer>
    </>
  );
}
