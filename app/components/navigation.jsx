var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({

  onSearch: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);
    if (location && location.length > 0) {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>

        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather by City" ref="location"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>

            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;


<div>
  <h2>Navigation Bar</h2>
  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
  <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
  <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
</div>
