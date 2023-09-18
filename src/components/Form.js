import { useState } from 'react';

const Form = ({ data, handleUpdate }) => {
  const [update, setUpdate] = useState({
    name: "name",
    number: "0000 0000 0000 0000",
    month: "MM",
    year: "YY",
    cvc: "000",
  });
  const [error, setError] = useState({
    name: null,
    number: null,
    month: null,
    cvc: null,
  });

  const validateName = () => {
    const pattern = /^[A-Za-z\s'-]+$/;
    if (update.name.match(pattern)) {
      setError({ ...error, name: null });
      return true;
    }
    setError({ ...error, name: "Enter a valid name!" });
    return false;
  };
  const validateMonth = () => {
    const monthValue = update.month;
    if (monthValue < 0 || monthValue > 12) {
      setError({ ...error, month: "Invalid input!" });
      return false;
    }
    setError({ ...error, month: null });
    return true;
  };

  const validateYear = () => {
    const yearValue = update.year;
    if (yearValue > 99) {
      setError({ ...error, month: "Invalid input!" });
      return false;
    }
    setError({ ...error, month: null });
    return true;
  };

  const validateCvc = () => {
    if (update.cvc.length < 3) {
      setError({ ...error, cvc: "Invalid input!" });
      return false;
    }
    setError({ ...error, cvc: null });
    return true;
  };

  const ValidateNumber = () => {
    const numberString = update.number;
    console.log(numberString)
    if (!numberString.match(/^[0-9]{16}$/)) {
        setError({ ...error, number: "Invalid Number" });
        return false;
    }
    setError({ ...error, number: null });
    return true;
  };

  const handleClick = () => {
    const valid =
      validateName() && validateMonth() && validateCvc() && ValidateNumber() && validateYear()
    if (valid) {
      handleUpdate(update);
    }
  };

  return (
    <div className="form__container">
      <div className="card_holder">
        <label htmlFor="card_holder">CARDHOLDER NAME</label>
        <input
          type="text"
          name="card_holder"
          placeholder="e.g. Jane Appleseed"
          onChange={(e) => setUpdate({ ...update, name: e.target.value })}
          onBlur={validateName}
        />
        <p className="error">{error.name != null && error.name}</p>
      </div>
      <div className="card_number">
        <label htmlFor="card_number">CARD NUMBER</label>
        <input
          type="text"
          name="card_number"
          maxLength="16"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(e) => setUpdate({ ...update, number: e.target.value })}
          pattern="[0-9]{16}$"
          onBlur={ValidateNumber}
        />
        <p className="error">{error.number != null && error.number}</p>
      </div>
      <div className="row space-between">
        <div className="col">
          <label htmlFor="expiry">EXP.DATE (MM/YY)</label>
          <div className="row">
            <div className="col">
              <input
                style={{ width: "78px",marginRight: "1em" }}
                name="expiry"
                type="number"
                placeholder="MM"
                min={1}
                max={12}
                onChange={(e) =>
                  setUpdate({ ...update, month: e.target.value })
                }
                onBlur={validateMonth}
              />
            </div>
            <div className="col">
              <input
                style={{ width: "78px" }}
                name="expiry"
                type="number"
                placeholder="YY"
                min={1}
                onChange={(e) => setUpdate({ ...update, year: e.target.value })}
                onBlur={validateYear}
              />
            </div>
          </div>
          <p className="error">{error.month != null && error.month}</p>
        </div>
        <div>
          <label htmlFor="cvc">CVC</label>
          <input
            style={{ width: "189px" }}
            name="cvc"
            type="text"
            placeholder="e.g. 123"
            maxLength={3}
            onChange={(e) => setUpdate({ ...update, cvc: e.target.value })}
            onBlur={validateCvc}
          />
          <p className="error">{error.cvc != null && error.cvc}</p>
        </div>
      </div>
      <div className="btn" onClick={() => handleClick()}>
        Confirm
      </div>
    </div>
  );
};

export default Form;
