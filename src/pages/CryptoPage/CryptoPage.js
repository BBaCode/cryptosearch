import "./CryptoPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function CryptoPage() {
  let [coinID, setCoinID] = useState();
  let [name, setName] = useState();
  let [symbol, setSymbol] = useState();
  let [description, setDescription] = useState();
  let [price, setPrice] = useState();
  let [marketcap, setMarketCap] = useState();
  let [volume, setVolume] = useState();

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
      <div className="crypto">
        <div className="crypto__card">
          <p className="crypto__instructions">
            {" "}
            Pick a coin and click go for more info!
          </p>
          <form onSubmit={handleSubmit} className="crypto__form">
            <select name="select">
              <option value="btc-bitcoin">Bitcoin</option>
              <option value="eth-ethereum">Etherium</option>
              <option value="usdt-tether">Tether</option>
              <option value="avax-avalanche">Avalanche</option>
              <option value="hex-hex">Hex</option>
              <option value="xrp-xrp">XRP</option>
              <option value="sol-solana">Solana</option>
              <option value="ada-cardano">Cardano</option>
              <option value="usdc-usd-coin">USD Coin</option>
              <option value="luna-terra">Terra</option>
            </select>
            <button className="crypto__button">GO</button>
          </form>
        </div>
      </div>
    );

  return (
    <div className="crypto">
      <div className="crypto__card">
        <form onSubmit={handleSubmit} className="crypto__form">
          <select name="select">
            <option value="btc-bitcoin">Bitcoin</option>
            <option value="eth-ethereum">Etherium</option>
            <option value="usdt-tether">Tether</option>
            <option value="avax-avalanche">Avalanche</option>
            <option value="hex-hex">Hex</option>
            <option value="xrp-xrp">XRP</option>
            <option value="sol-solana">Solana</option>
            <option value="ada-cardano">Cardano</option>
            <option value="usdc-usd-coin">USD Coin</option>
            <option value="luna-terra">Terra</option>
          </select>
          <button className="crypto__button">GO</button>
        </form>
        <div className="crypto__info">
          <p className="crypto__info-card">
            <span className="crypto__info--bold">Name: </span> {name}
          </p>
          <p className="crypto__info-card">
            <span className="crypto__info--bold">Symbol: </span> {symbol}
          </p>
          <div className="crypto__info-card">
            <span className="crypto__info--bold crypto__info--bottom">
              Description:
            </span>{" "}
            {description}
          </div>
          <div className="crypto__info-card crypto__info-price crypto__info--bottom">
            <p>
              <span className="crypto__info--bold">Price: </span> {" " + price}
            </p>
            <p>
              <span className="crypto__info--bold">Marketcap: </span>{" "}
              {" " + marketcap}
            </p>
            <p>
              <span className="crypto__info--bold">Volume: </span>{" "}
              {" " + volume}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoPage;
