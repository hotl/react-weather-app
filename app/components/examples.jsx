var React = require('react');
var {Link, IndexLink} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ul>
        <li>
          <Link to="/?location=Irvine,CA">Irvine, CA</Link>
        </li>
        <li>
          <Link to="/?location=Seattle,WA">Seattle, WA</Link>
        </li>
        <li>
          <Link to="/?location=Los Angeles,CA">Los Angeles, CA</Link>
        </li>
      </ul>
    </div>
  );
};

module.exports = Examples;
