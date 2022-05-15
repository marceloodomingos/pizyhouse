export const getCryptoCoins = async (pages: number) => {
  const coins = await (
    await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=${pages}&sparkline=true`
    )
  ).json();
  return coins;
};
