export const getNftsAssetsByToken = async (token: any) => {
  const nftsAssets = await (
    await fetch(
      `https://api.opensea.io/api/v1/assets?format=json&token_ids=${token}`
    )
  ).json();
  return nftsAssets;
};

export const getNftsAssetsByContract = async (contract: any) => {
  const nftsAssets = await (
    await fetch(
      `https://api.opensea.io/api/v1/asset/${contract}?format=json&include_orders=false`
    )
  ).json();

  return nftsAssets;
};
