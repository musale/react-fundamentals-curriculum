var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('../components/Loading');
var helpers = require('../utils/weatherUtils');
var DayItem = require('./DayItem');
var getDate = helpers.getDate;
var convertTemp = helpers.convertTemp;

var styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: 1200,
        margin: '50px auto'
    },
    dayContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 35
    },
    header: {
        fontSize: 65,
        color: '#333',
        fontWeight: 100,
        textAlign: 'center'
    },
    subheader: {
        fontSize: 30,
        color: '#333',
        fontWeight: 100
    },
    weather: {
        height: 130
    }
}

function ForecastUI(props) {
    return (
        <div>
            <h1 style={styles.header}>{props.city}</h1>
            <div style={styles.container}>
                {props.forecast.list.map(function(listItem) {
                    return <DayItem
                                key={listItem.dt}
                                day={listItem}
                                handleClick={props.handleClick.bind(null, listItem)} />
                })}
            </div>
        </div>
    )
}

function ShowCity(props) {
    return props.isLoading === true
        ? <Loading speed={300} text="Getting Weather Data"/>
        : <ForecastUI
                city={props.city}
                forecast={props.forecastData}
                handleClick={props.handleClick}/>
}

ShowCity.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    handleClick: PropTypes.func
}

module.exports = ShowCity;
