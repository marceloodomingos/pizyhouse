import { useRouter } from "next/router";
import { FileX, LinkBreak, XCircle } from "phosphor-react";
import { NothingContainer } from "./styles";

interface NothingProps {
  text: string;
  obs?: string;
  more?: boolean;
}

export default function NothingHere({ text, obs, more }: NothingProps) {
  const router = useRouter();

  return (
    <>
      <NothingContainer>
        <div>
          <FileX />
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
