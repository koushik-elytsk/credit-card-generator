import '../styles/CardBack.css';

const CardBack = ({cvc}) => {
  return (
    <div className="card_back">
          <div className="swipe"></div>
          <div className="cvv-area">
            <p className="cvv-text">{cvc}</p>
          </div>
          <div className="line-area">
            <div className="row-1">
              <div className="l1"></div>
              <div className="l2"></div>
              <div className="l3"></div>
              <div className="l4"></div>
            </div>
            <div className="row-2">
              <div className="l5"></div>
              <div className="l6"></div>
              <div className="l7"></div>
              <div className="l8"></div>
            </div>
            <div className="row-1 reverse">
              <div className="l1"></div>
              <div className="l2"></div>
              <div className="l3"></div>
              <div className="l4"></div>
            </div>
          </div>
        </div>
  )
}

export default CardBack