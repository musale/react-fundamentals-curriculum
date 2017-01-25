var React = require('react');
var ShowCity = require('../components/ShowCity');
var helpers = require('../utils/helpers');

var ShowCityContainer = React.createClass({
    getInitialState: function() {
        return {isLoading: true, forecastData: {}}
    },
    componentDidMount: function() {
        this.makeRequest(this.props.routeParams.city)
    },
    componentWillReceiveProps: function(nextProps) {
        this.makeRequest(nextProps.routeParams.city)
    },
    makeRequest: function(city) {
        helpers.getForecast(city).then(function(forecastData) {
            this.setState({isLoading: false, forecastData: forecastData});
        }.bind(this));
    },
    render: function() {
        return (
            <ShowCity
                city = {this.props.routeParams.city}
                isLoading = {this.state.isLoading}
                forecastData = {this.state.forecastData}/>
        )
    }
})

module.exports = ShowCityContainer;
