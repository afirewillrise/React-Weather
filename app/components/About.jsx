var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>React Weather is a very minimal and basic weather application that requests you to enter a place and then displays the most basic weather information.</p>
      <p>The link to the Github Repo for this project is <a href="https://github.com/afirewillrise/React-Weather" target="_onblank">ReactWeather Github Repo</a></p>
    </div>

  );
};

module.exports = About;
