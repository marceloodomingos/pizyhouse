export const getCryptoSparkline = async (coin: any) => {
  const coinSparkline = await (
    await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/ohlc?vs_currency=brl&days=7`
    )
  ).json();
  return coinSparkline;
};
