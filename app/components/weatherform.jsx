var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
      e.preventDefault();
      var location = this.refs.location.value;
      if (typeof location === 'string') {
        this.refs.location.value = '';
        this.props.onSearch(location);
      }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search Weather by City" ref="location"/>
          <button className="hollow expanded button">Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
