import React from 'react';
import PropTypes from 'prop-types'
// import './WeatherVision.css';

// ComponentWeather

class ComponentWeather extends React.Component {
    componentDidMount() {
        this.props.fetchData(this.props.currentDate, this.props.currentDayInTheCalendar);
    }

    componentDidUpdate() {
        this.props.fetchDaysLengtData(this.props.currentDate, this.props.currentDayInTheCalendar, this.props.weatherObject);
    }

    render() {
        console.log(this.props);
        const { currentDayInTheCalendar, weatherError, weatherIsLoaded, weatherObject } = this.props;

        let differentInDays = currentDayInTheCalendar - new Date().getDate();
        let positionInObject = differentInDays * 8 + 1;

        let successContent;
        let dayLengthContent;

        if (weatherObject) {
            let options = {
                timezone: 'Europe/Minsk',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };

            let hours = Math.floor(weatherObject[2].results.day_length / 60 / 60);
            let minutes = Math.floor(weatherObject[2].results.day_length / 60 - hours * 60);
            let seconds = weatherObject[2].results.day_length - hours * 60 * 60 - minutes * 60;

            dayLengthContent = <div>
                <hr />
                <p className='weather__paragraph'>"Day length: {hours + ':' + minutes + ':' + seconds}"</p>
                <p className='weather__paragraph'>"Sunrise: {new Date(Date.parse(weatherObject[2].results.sunrise)).toLocaleString("en-US", options)}"</p>
                <p className='weather__paragraph'>"Sunset: {new Date(Date.parse(weatherObject[2].results.sunset)).toLocaleString("en-US", options)}"</p>
            </div>;



            if (currentDayInTheCalendar === new Date().getDate()
                && +this.props.currentDate.getMonth() === new Date().getMonth()
                && +this.props.currentDate.getFullYear() === new Date().getFullYear()) {
                successContent = <>
                    <p className='weather__paragraph'>Temperature in {weatherObject[0].name} now: {weatherObject[0].main.temp}°C</p>
                    <img className='weather__icon'
                        src={"https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png"}
                        alt="icon of weather" />
                    <p className='weather__paragraph'>"{weatherObject[0].weather['0'].description}"</p>
                    <p className='weather__paragraph'>Wind: {weatherObject[0].wind.speed}м/c»</p>
                    <p className='weather__paragraph'>Humidity: {weatherObject[0].main.humidity}%»</p>
                </>
            } else {
                if (positionInObject > 40 ||
                    +this.props.currentDate.getFullYear() > new Date().getFullYear() || 
                    ( +this.props.currentDate.getMonth() >new Date().getMonth()) &&
                    +this.props.currentDate.getFullYear() === new Date().getFullYear()) {
                    successContent = <p className='weather__paragraph'>Sorry, but we don't have an information for so long period of time.</p>
                } else if (positionInObject < 40 && positionInObject > 2) {
                    successContent = <>
                        <p className='weather__paragraph'>Temperature in {weatherObject[1].city.name} now: {weatherObject[1].list['' + positionInObject].main.temp}°C</p>
                        <img className='weather__icon'
                            src={"https://openweathermap.org/img/w/" + weatherObject[1].list['' + positionInObject].weather['0'].icon + ".png"}
                            alt="icon of weather" />
                        <p className='weather__paragraph'>"{weatherObject[1].list['' + positionInObject].weather['0'].description}"</p>
                        <p className='weather__paragraph'>Wind: {weatherObject[1].list['' + positionInObject].wind.speed}м/c»</p>
                        <p className='weather__paragraph'>Humidity: {weatherObject[1].list['' + positionInObject].main.humidity}%»</p>
                    </>
                } else {
                    successContent = <p className='weather__paragraph'>Sorry, we don't forecast weather for past.</p>
                }
            }
        }



        if (weatherError) {
            return <div className='weather'>
                <h2 className='weather__header'>Weather</h2>
                <div className='weather__content'>
                    <p>Error: {weatherError.message}</p>
                </div>
            </div>;
        } else if (!weatherIsLoaded) {
            return <div className='weather'>
                <h2 className='weather__header'>Weather</h2>
                <div className='weather__content'>
                    <p>Loading...</p>
                </div>
            </div>;
        } else {
            return (
                <div className='weather'>
                    <h2 className='weather__header'>Weather</h2>
                    <div className='weather__content'>
                        {successContent}
                        {dayLengthContent}
                    </div>
                </div>
            );
        }
    }

}

ComponentWeather.propTypes = {
    currentDate: PropTypes.object,
    currentDayInTheCalendar: PropTypes.number,
    weatherObject: PropTypes.array,
    weatherIsLoaded: PropTypes.bool,
    weatherError: PropTypes.object,
}

export { ComponentWeather };