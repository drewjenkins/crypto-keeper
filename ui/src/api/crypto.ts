export const ticker = async () => {
  const res = await fetch("http://localhost:3001/ticker");
  return res.json();
};
