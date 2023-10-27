import './CoinStyle.css';
import CoinTail from './tail.png';
import CoinHead from './head.png';

const Coin =({currentStatus,rotate})=>
{
    return(
    <div className="Coin-container">
     <div className={`Coin ${rotate ? 'Coin-rotate' : ''}`}>
    <img
    src={currentStatus==='yazi'? CoinTail:CoinHead}
    alt=""
    className={currentStatus==='yazi'?'Coin-back':'Coin-front'}
    
    
    />
     </div>
    </div>
    );
};

export default Coin;