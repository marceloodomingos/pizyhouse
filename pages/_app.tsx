import type { AppProps } from "next/app";
import { useCallback, useEffect, useState } from "react";
import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  const [floatingNavbar, setFloatingNavbar] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;
    setScrollY(scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    () => document.removeEventListener("scroll", onScroll);

    const { scrollY } = window;

    const scroll = scrollY;

    if (scroll < 10) {
      setFloatingNavbar(false);
    } else {
      setFloatingNavbar(true);
    }
  }, [onScroll, scrollY]);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <>
      {!isSSR && (
        <>
          <GlobalStyles />
          <Component
            {...pageProps}
            actualState={floatingNavbar}
            loggedStatus={isLogged}
            handleLoggedChange={setIsLogged}
          />
        </>
      )}
    </>
  );
}

export default MyApp;
