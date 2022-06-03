export const getRandomUser = async () => {
  const randomUser = await (await fetch(`https://randomuser.me/api/`)).json();
  return randomUser;
};
