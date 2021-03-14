import React, { useEffect, useState } from 'react';
import Form from '../form/Form';
import Infobanner from '../infobanner/Infobanner';

function App() {
  const [ipData, setIpData] = useState({});
  const [dataIsReady, setDataIsReady] = useState(false);

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
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>
      </header>
      <Form />
      <Infobanner ipData={ipData} dataIsReady={dataIsReady} />
    </div>
  );
}

export default App;
