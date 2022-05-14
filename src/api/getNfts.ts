export const getNfts = async (pages: number) => {
  const maxPage = 33;
  const amount: number = pages * 6;

  if (pages >= maxPage && amount >= 200) {
    const amount = 200;
    return amount;
  }

  const nfts = await (
    await fetch(
      `https://api.opensea.io/api/v1/assets?format=json&limit=${amount}&order_direction=desc`
    )
  ).json();
  return nfts.assets;
};
