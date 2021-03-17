import React, { useEffect, useState } from 'react';
import Form from '../form/Form';
import Infobanner from '../infobanner/Infobanner';
import Map from '../map/Map'

function App() {
  const [ipData, setIpData] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [userInput, setUserInput] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchApiData();
  }, []);

  const handleUserIput = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchApiData();
  }

  const queryString = () => {
    // checks kind of input data, url(domain name) or ip
    if (/[a-z]/gi.test(userInput) === false) {
      return `&ipAddress=${userInput}`;
    } else {
      return `&domain=${userInput}`
    }
  }

  const fetchApiData = () => {
    setIsError(false);
    setIsFetching(true);
    const apiKey = process.env.REACT_APP_IP_API_KEY;

    fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}${userInput ? queryString() : ''}`)
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
        setIsFetching(false);
        console.log('lat: ', data.location.lat, 'lng: ', data.location.lng)
      })
      .catch(err => {
        setIsFetching(false);
        setIsError(true);
        console.log(err);
      });
  }

  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>
      </header>
      <Form onChange={handleUserIput} onSubmit={handleSearch} />
      <Infobanner ipData={ipData} isFetching={isFetching} isError={isError} />
      <Map ipData={ipData} isFetching={isFetching} isError={isError} />
    </div>
  );
}

export default App;
