import React, { useEffect, useState } from "react";
import "./App.css";
import AuthenticationAPI from "./Auth";
import spacexLogo from "./images/spacex.png";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const result = await fetch(AuthenticationAPI.API_URL());
    result.json().then((result) => {
      if (result) {
        setData(result);
        setLoading(false);
      }
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={spacexLogo} className="spacex-logo" alt="logo" />
        </div>
        <div className="container">
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="flex-container">
              {data &&
                data.slice(0, 12).map((ss, index) => (
                  <div key={index}>
                    <div>
                      <img
                        src={ss.links.mission_patch}
                        className="App-logo"
                        alt="logo"
                      />
                    </div>
                    <button className="button button1">Learn more</button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
