const getDollarRate = async () => {
  const res = await fetch('https://api.exchangerate-api.com/v4/latest/GHS');
  const data = await res.json();
  const rate = data.rates.USD;
  return rate;
};

export default getDollarRate;
