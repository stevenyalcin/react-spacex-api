import React, { useEffect, useState } from 'react';
import './App.css';
import Spacex from './components/Spacex';
import AuthenticationAPI from '../src/components/Auth';

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const result = await fetch(AuthenticationAPI.API_URL());

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
      <div className="App-rockets"></div>

      <div className="App-mission">
        {Object.keys(data)
          .slice(0, 1)
          .map(ss => (
            <div key={ss}>
              <div className="container">
                <div className="mission-details">
                  {data.details}
                  <div>
                    <a href={data.links.presskit}>
                      Please click for Mission overview
                    </a>
                  </div>
                </div>
                <Spacex
                  flight_number={data.flight_number}
                  mission_name={data.mission_name}
                  launch_date_utc={data.launch_date_utc}
                  rocket_name={data.rocket.rocket_name}
                  core_serial={data.rocket.first_stage.cores.map(
                    items => items.core_serial
                  )}
                  flight={data.rocket.first_stage.cores.map(
                    items => items.flight
                  )}
                  block={data.rocket.first_stage.cores.map(
                    items => items.block
                  )}
                  gridfins={data.rocket.first_stage.cores.map(
                    items => items.gridfins
                  )}
                  reused={data.rocket.first_stage.cores.map(
                    items => items.reused
                  )}
                  land_success={data.rocket.first_stage.cores.map(
                    items => items.land_success
                  )}
                  landing_intent={data.rocket.first_stage.cores.map(
                    items => items.landing_intent
                  )}
                  site_name={data.launch_site.site_name}
                />
              </div>
            </div>
          ))}
      </div>
      <div className="falcon-images">
        {Object.keys(data)
          .slice(0, 1)
          .map(ss => (
            <div key={ss}>
              <div className="mission-images">
                {data.links.flickr_images.slice(1, 2).map(items => {
                  return (
                    <img
                      src={items}
                      key={items}
                      alt=""
                      height="33%"
                      width="33%"
                    />
                  );
                })}
                {data.links.flickr_images.slice(3, 4).map(items => {
                  return (
                    <img
                      src={items}
                      key={items}
                      alt=""
                      height="33%"
                      width="33%"
                    />
                  );
                })}
                {data.links.flickr_images.slice(4, 5).map(items => {
                  return (
                    <img
                      src={items}
                      key={items}
                      alt=""
                      height="33%"
                      width="33%"
                    />
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
