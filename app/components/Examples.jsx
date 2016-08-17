var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples</h3>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1>Examples</h1>
      <p>Here are a few sample locations to try out: </p>
      <ol>
        <li>
          <Link to='/?location=Sivakasi'>Sivakasi, India</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
