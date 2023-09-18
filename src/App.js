import CardFront from "./components/CardFront";
import Form from "./components/Form";
import CardBack from "./components/CardBack";
import { useEffect, useState } from 'react';
import Success from "./components/Success";

function App() {
  const [isSubmitted,setIsSubmitted] = useState(true)
  const [data, setData] = useState({
    name: "name",
    number: "0000 0000 0000 0000",
    month: "MM",
    year: "YY",
    cvc: "000"
  })

  useEffect(() => {
    console.log(data)
  },[data])

  const handleUpdate = (update) => {
    const formattedNumber = update.number.toString().replace(
      /(\d{4})(\d{4})(\d{4})(\d{4})/,
      "$1 $2 $3 $4"
      );
    setData({...data, 
      name: update.name,
    number: formattedNumber,
    month: update.month,
    year: update.year,
    cvc: update.cvc
    })
    toggleSubmit()
  }
  const toggleSubmit = () => {
    setIsSubmitted((prev) => prev=!prev)
  }

  return (
    <div className="App">
      <div className="left__section">
        <CardFront data={data}/>
        <CardBack cvc={data.cvc}/>
      </div>
      <div className="right__section">
        {
          isSubmitted ? (
            <Form data={data} handleUpdate={handleUpdate}/>
            ):
            (
              <Success toggleSubmit={toggleSubmit}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
