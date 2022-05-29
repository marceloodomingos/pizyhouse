export const getNftsAssets = async (token: any) => {
  const nftsAssets = await (
    await fetch(
      `https://api.opensea.io/api/v1/assets?format=json&token_ids=${token}`
    )
  ).json();
  return nftsAssets;
};
