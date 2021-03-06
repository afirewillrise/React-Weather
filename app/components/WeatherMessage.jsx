var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <p>Its {temp} in {location}</p>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p className="text-center">Its {temp} in {location}</p>
    </div>
  );
}

module.exports = WeatherMessage;
