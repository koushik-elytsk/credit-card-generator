import "../styles/CardFront.css";

const CardFront = ({ data }) => {
  return (
    <div className="card_front">
      <div className="card_body">
        <div className="ellipse-orange"></div>
        <div className="ellipse-pink ellipse-pink1"></div>
        <div className="ellipse-pink ellipse-pink2"></div>
        <div className="ellipse-blue"></div>
        <div className="ellipse-violet ellipse-violet1"></div>
        <div className="ellipse-violet ellipse-violet2"></div>
        <div className="circles">
          <div className="circle-full"></div>
          <div className="circle-hollow"></div>
        </div>
        <div className="bottom">
          <p className="acc_number">{data.number}</p>
          <div>
            <p className="cardholder_name">{data.name}</p>
            <p className="validupto">{data.month} / {data.year}</p>
          </div>
        </div>
      </div>
      <div className="blur"></div>
    </div>
  );
};

export default CardFront;
