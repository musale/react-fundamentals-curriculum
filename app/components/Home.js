var React = require('react');
var styles = require('../styles/styles');
var GetCityContainer = require('../containers/GetCityContainer');

function Home(props){
    return (
        <div style={styles.home}>
            <h1 style={styles.title}>
                Enter a City and State
            </h1>
            <GetCityContainer />
        </div>
    )
}

module.exports = Home;
