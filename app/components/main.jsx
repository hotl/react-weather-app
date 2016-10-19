var React = require('react');
var Navigation = require('Navigation')
var Weather = require('Weather');

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="row">
        <div className="medium-6 large-4 columns small-centered">{props.children}</div>
      </div>
    </div>
  );
};

module.exports = Main;
