export const ticker = async () => {
  const res = await fetch("https://crypto-keeper-api.herokuapp.com/ticker");
  return res.json();
};
