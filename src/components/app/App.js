import React, { useEffect, useState } from 'react';
import Form from '../form/Form';
import Infobanner from '../infobanner/Infobanner';

function App() {
  const [ipData, setIpData] = useState({});
  const [dataIsReady, setDataIsReady] = useState(false);
  const [userInput, setUserInput] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_IP_API_KEY;
    fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then(errData => {
          const { code, messages } = errData;
          const err = new Error(`${code} ${messages}`);
          throw err;
        });
      })
      .then(data => {
        setIpData(data);
        setDataIsReady(true);
      })
      .catch(err => {
        setIsError(true);
        console.log(err);
      });
  }, []);

  const handleUserIput = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  }

  const handleSearch = (e) => {
    // not completed
    e.preventDefault();
    setDataIsReady(false);
    const apiKey = process.env.REACT_APP_IP_API_KEY;
    fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${userInput}`)
      .then(response => {
        setDataIsReady(true);
        if (response.ok) {
          return response.json();
        }
        return response.json().then(errData => {
          const { code, messages } = errData;
          const err = new Error(`${code} ${messages}`);
          throw err;
        });
      })
      .then(data => {
        setIpData(data);
        setDataIsReady(true);
      })
      .catch(err => {
        setIsError(true);
      });
  }

  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>
      </header>
      <Form onChange={handleUserIput} onSubmit={handleSearch} />
      <Infobanner ipData={ipData} dataIsReady={dataIsReady} isError={isError} />
    </div>
  );
}

export default App;
