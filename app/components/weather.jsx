var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
      return {
        isLoading: false
      }
  },

  handleSearch: function (location) {
      debugger;
      this.setState({
        isLoading: true
      });

      var self = this;
      openWeatherMap.getTemp(location).then(function (temp) {
        self.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      }, function (error) {
        self.setState({isLoading: false});
        alert(error);
      });
  },

  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
        if (isLoading) {
            return <h3 className="text-center">Fetching Weather...</h3>;
        } else if (temp && location) {
          return <WeatherMessage location={location} temp={temp}/>;
        }
    }

    return (
      <div>
          <h1 className="text-center">Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
