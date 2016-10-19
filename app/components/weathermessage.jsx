var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h1 className="text-center">It is {temp} degrees in {location}</h1>
  );
}

module.exports = WeatherMessage;
