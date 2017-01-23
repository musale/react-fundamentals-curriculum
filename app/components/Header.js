var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/styles');
var GetCityContainer = require('../containers/GetCityContainer');

function Header(props){
    return (
        <div style={styles.header}>
            <h2 style={{margin: 0}}>
                Weather Web
            </h2>
            <GetCityContainer direction='row' />
        </div>
    )
}

module.exports = Header;
