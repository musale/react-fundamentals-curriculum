var React = require('react');
var styles = require('../styles/styles');
var GetCityContainer = require('../containers/GetCityContainer');
var Header = require('../components/Header');
require('../main.css');

var Main = React.createClass({
  render: function () {
    return (
        <div style={styles.main}>
            <Header />
            {this.props.children}
        </div>
    )
  }
});

module.exports = Main;
