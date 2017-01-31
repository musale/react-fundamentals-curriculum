var React = require('react');
var CityDetail = require('../components/CityDetail');

var CityDetailContainer = React.createClass({
    render: function() {
        return (<CityDetail
            weather={this.props.location.state.weather}
            city={this.props.routeParams.city}/>
        )
    }
})

module.exports = CityDetailContainer;
