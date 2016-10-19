var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About Page</h1>
      <p>This is a weather application built on React.
      I built this to familiarize myself with the basic
      features offered by React, as well as to practice
      my chops in web development.</p>
      <p>Feel free to check out the source code on my
      <a href="https://github.com/hotl/react-weather-app"> GitHub!</a>
      </p>
      <p>
        Here are some of the tools that I used:
        <ul>
          <li>
            <a href="http://facebook.github.io/react">React.js</a>
            - JavaScript library used
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a>
            - Used to fetch weather data
          </li>
          <li>
            <a href="https://www.heroku.com">Heroku</a>
            - Used to deploy this application
          </li>
        </ul>
      </p>
    </div>

  );
};


module.exports = About;
