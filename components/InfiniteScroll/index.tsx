import React, { RefObject, useEffect, useRef } from "react";

export default function InfiniteScroll({ fetchMore }: any) {
  const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchMore]);

  return (
    <>
      <div ref={containerRef as React.RefObject<HTMLDivElement>} />
    </>
  );
}
