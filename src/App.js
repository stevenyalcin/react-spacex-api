import React, { useEffect, useState } from 'react';
import './App.css';
import Spacex from './components/Spacex';

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await fetch('https://api.spacexdata.com/v3/launches/latest');

    result.json().then(result => setData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Object.keys(data)
            .slice(0, 1)
            .map(ss => (
              <div key={ss}>
                <div className="container">
                  <img
                    src={data.links.mission_patch}
                    className="App-logo"
                    alt="logo"
                  />
                </div>
              </div>
            ))}
        </div>
      </header>
      <div>
        <Spacex />
      </div>
    </div>
  );
}

export default App;
