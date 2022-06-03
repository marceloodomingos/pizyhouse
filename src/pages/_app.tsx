import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { GlobalStyles } from "../styles/global";

import "../services/firebase";
import { firebase, auth } from "../services/firebase";

import { AuthContextProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {!isSSR && (
        <>
          <AuthContextProvider>
            <GlobalStyles />
            <Component
              {...pageProps}
              loggedStatus={isLogged}
              handleLoggedChange={setIsLogged}
            />
          </AuthContextProvider>
        </>
      )}
    </>
  );
}

export default MyApp;
