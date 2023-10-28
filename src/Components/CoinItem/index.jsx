import { useState } from 'react';
import './CoinAppStyle.css';
import Coin from '../CoinApp/Coin';

const options = ['yazi', 'tura'];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};
const CoinApp = () => {
  const [currentStatus, setCurrentStatus] = useState(options[0]);
  const [results, setResults] = useState([]);
  const [rotate, setRotate] = useState(false);

  const start = () => {
    setRotate(true);
    const randomElement = getRandomElFromArr(options);
    setTimeout(() => {
      setCurrentStatus(randomElement);
      setResults([...results, randomElement]);
      setRotate(false);
    }, 1000);
  };

  const heads = results.filter((item) => item === options[0]).length;
  const tails = results.filter((item) => item === options[1]).length;

  return (
    <div className="Coin-container">
      <h1>YAZI VEYA TURA</h1>
      <Coin currentStatus={currentStatus} rotate={rotate} />
      <br />

      <button onClick={start}>ATIŞ YAP</button>
      {results.length > 0 && !rotate && <h3>{currentStatus} GELDİ</h3>}
      <p>
        Toplam <span className="CoinApp-number">{results.length}</span> atış
        yapıldı
      </p>
      <p>
        <span className="CoinApp-number">{heads}</span> kez <b>YAZI </b>
        GELDİ
      </p>
      <p>
        <span className="CoinApp-number">{tails}</span> KEZ <b>TURA </b>
        GELDİ
      </p>
    </div>
  );
};

export default CoinApp;
