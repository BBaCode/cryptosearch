import "./HomePage.scss";
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

function HomePage() {
  let [coinID, setCoinID] = useState();
  let [name, setName] = useState();
  let [symbol, setSymbol] = useState();
  let [description, setDescription] = useState();
  let [price, setPrice] = useState();
  let [marketcap, setMarketCap] = useState();
  let [volume, setVolume] = useState();

  const options = [
    { value: "btc-bitcoin", label: "Bitcoin" },
    { value: "eth-ethereum", label: "Ethereum" },
    { value: "usdt-tether", label: "Tether" },
    { value: "avax-avalanche", label: "Avalanche" },
    { value: "hex-hex", label: "Hex" },
    { value: "xrp-xrp", label: "XRP" },
    { value: "sol-solana", label: "Solana" },
    { value: "ada-cardano", label: "Cardano" },
    { value: "usdc-usd-coin", label: "USD Coin" },
    { value: "luna-terra", label: "Terra" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setCoinID((coinID = e.target.select.value));
    axios
      .get(`https://api.coinpaprika.com/v1/coins/${coinID}`)
      .then((res) => {
        setName((name = res.data.name));
        setSymbol((symbol = res.data.symbol));
        setDescription((description = res.data.description));
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.coinpaprika.com/v1/coins/${coinID}/ohlcv/today/`)
      .then((res) => {
        console.log(res.data[0].close);
        let priceFormatted = "$" + Number(res.data[0].close).toFixed(2);
        setPrice((price = priceFormatted));
        setMarketCap((marketcap = "$" + res.data[0].market_cap));
        setVolume((volume = "$" + res.data[0].volume));
        console.log(res.data);
      });
  };

  if (!coinID)
    return (
      <div className="home">
        <div className="home__card">
          Pick a coin and click go for more info!
          <form onSubmit={handleSubmit} className="home__form">
            <Select name="select" options={options} />
            <button className="home__button">GO</button>
          </form>
        </div>
      </div>
    );

  return (
    <div className="home">
      <div className="home__card">
        <form onSubmit={handleSubmit} className="home__form">
          <Select name="select" options={options} />
          <button className="home__button">GO</button>
        </form>
        <div className="home__info">
          <p className="home__info-card">
            <span className="home__info--bold">Name: </span> {name}
          </p>
          <p className="home__info-card">
            <span className="home__info--bold">Symbol: </span> {symbol}
          </p>
          <div className="home__info-card">
            <span className="home__info--bold home__info--bottom">
              Description:
            </span>{" "}
            {description}
          </div>
          <div className="home__info-card home__info-price home__info--bottom">
            <p>
              <span className="home__info--bold">Price: </span> {" " + price}
            </p>
            <p>
              <span className="home__info--bold">Marketcap: </span>{" "}
              {" " + marketcap}
            </p>
            <p>
              <span className="home__info--bold">Volume: </span> {" " + volume}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
