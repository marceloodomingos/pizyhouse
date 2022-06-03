export const getNftCollection = async (collection_slug: string) => {
  const nftsCollection = await (
    await fetch(
      `https://api.opensea.io/api/v1/collection/${collection_slug}?format=json`
    )
  ).json();
  return nftsCollection;
};
