import React from 'react';
import rocket from '../images/falcon-heavy-render.png';

const Spacex = ({ flight_number, mission_name }) => {
  return (
    <div>
      <h1>Flight # {flight_number}</h1>
      <h1>Mission name : {mission_name}</h1>
      <div className="container">
        <div className="mission-container">
          <div>
            <img src={rocket} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spacex;
