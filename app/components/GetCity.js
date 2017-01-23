var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/styles');

function Button(props) {
    return (
        <button type='button' style={{
            margin: 10
        }} className='btn btn-success' onClick={props.onSubmitCity}>
            {props.children}
        </button>
    )
}

function InputField(props) {
    return (<input
        className='form-control'
        onChange={props.onUpdateCity}
        placeholder='Nairobi, Kenya'
        type='text'
        value={props.city}/>)
}

function GetCity(props) {
    var cityStyles = styles.getCity;
    styles.getCity["flexDirection"] = props.direction || 'column'
    return (
        <div style={cityStyles}>
            <InputField
                onUpdateCity={props.onUpdateCity}
                city={props.city}/>
            <Button onSubmitCity={props.onSubmitCity}>
                Get Weather
            </Button>
        </div>
    )
}

GetCity.propTypes = {
    direction: PropTypes.string,
    onSubmitCity: PropTypes.func.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
}

module.exports = GetCity;
