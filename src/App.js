import CardFront from "./components/CardFront";
import Form from "./components/Form";
import CardBack from "./components/CardBack";
import { useEffect, useState } from 'react';

function App() {

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
  }

  

  return (
    <div className="App">
      <div className="left__section">
        <CardFront data={data}/>
        <CardBack cvc={data.cvc}/>
      </div>
      <div className="right__section">
        <Form data={data} handleUpdate={handleUpdate} />
      </div>
    </div>
  );
}

export default App;
