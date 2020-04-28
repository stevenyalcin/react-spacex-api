import React from 'react';
import rocket from '../images/falcon-heavy-render.png';

const Spacex = ({
  flight_number,
  mission_name,
  launch_date_utc,
  rocket_name,
  core_serial,
  flight,
  block,
  gridfins,
  legs,
  reused,
  land_success,
  landing_intent,
  site_name
}) => {
  return (
    <div>
      <div className="mission-container">
        <div>
          <img src={rocket} alt="" height="30%" />
        </div>
        <div className="falcon-details">
          <div>Flight # {flight_number}</div>
          <div>Mission name : {mission_name}</div>
          <div>Mission date : {new Date(launch_date_utc).toDateString()}</div>
          <div>Rocket name : {rocket_name}</div>
          <div>Core Serial : {core_serial}</div>
          <div>Flight : {flight}</div>
          <div>Block : {block}</div>
          <div>
            <div>
              Gridfins : {''}
              {gridfins ? (
                <span role="img" aria-label="gridfins-true">
                  ☑️
                </span>
              ) : (
                <span role="img" aria-label="gridfins-false">
                  ❌
                </span>
              )}
            </div>
          </div>
          <div>
            <div>
              Legs : {''}
              {legs ? (
                <span role="img" aria-label="legs-true">
                  ☑️
                </span>
              ) : (
                <span role="img" aria-label="legs-false">
                  ❌
                </span>
              )}
            </div>
          </div>
          <div>
            {' '}
            <div>
              Reused : {''}
              {reused ? (
                <span role="img" aria-label="reused-true">
                  ☑️
                </span>
              ) : (
                <span role="img" aria-label="reused-false">
                  ❌
                </span>
              )}
            </div>
          </div>
          <div>
            <div>
              Landing Success : {''}
              {land_success ? (
                <span role="img" aria-label="land_success_true">
                  ☑️
                </span>
              ) : (
                <span role="img" aria-label="land_success_false">
                  ❌
                </span>
              )}
            </div>
          </div>
          <div>
            <div>
              Landing Intent : {''}
              {landing_intent ? (
                <span role="img" aria-label="landing_intent_true">
                  ☑️
                </span>
              ) : (
                <span role="img" aria-label="landing_intent_false">
                  ❌
                </span>
              )}
            </div>
          </div>
          <div>Site name : {site_name}</div>
        </div>
      </div>
    </div>
  );
};

export default Spacex;
