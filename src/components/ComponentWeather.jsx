// ComponentWeather

import React from 'react';
import PropTypes from 'prop-types';
import gifPreloader from '../images/free-loader-gif-3.gif';

class ComponentWeather extends React.Component {
  componentDidMount() {
    const {
      currentDate,
      currentDayInTheCalendar,
      fetchData,
    } = this.props;
    fetchData(currentDate, currentDayInTheCalendar);
  }

  componentDidUpdate() {
    const {
      currentDate,
      currentDayInTheCalendar,
      weatherObject,
      fetchDaysLengtData,
    } = this.props;
    fetchDaysLengtData(currentDate, currentDayInTheCalendar, weatherObject);
  }

  render() {
    console.log('%c%s', 'color: green', 'Weather');
    const {
      currentDate,
      currentDayInTheCalendar,
      weatherError,
      weatherIsLoaded,
      weatherObject,
    } = this.props;

    const differentInDays = currentDayInTheCalendar - new Date().getDate();
    const positionInObject = differentInDays * 8;
    let successContent;
    let dayLengthContent;

    if (weatherObject) {
      const options = {
        timezone: 'Europe/Minsk',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };

      const dayLenght = weatherObject[2].results.day_length;
      const hours = Math.floor(dayLenght / 60 / 60);
      const minutes = Math.floor(dayLenght / 60 - hours * 60);
      const seconds = dayLenght - hours * 60 * 60 - minutes * 60;

      dayLengthContent = (
        <div>
          <hr />
          <p className="weather__paragraph">{`Day length: ${hours}:${minutes}:${seconds}`}</p>
          <p className="weather__paragraph">
            {`Sunrise: ${new Date(Date.parse(weatherObject[2].results.sunrise)).toLocaleString('en-US', options)}`}
          </p>
          <p className="weather__paragraph">
            {`Sunset: ${new Date(Date.parse(weatherObject[2].results.sunset)).toLocaleString('en-US', options)}`}
          </p>
        </div>);


      if (currentDayInTheCalendar === new Date().getDate()
        && +currentDate.getMonth() === new Date().getMonth()
        && +currentDate.getFullYear() === new Date().getFullYear()) {
        successContent = <>
          <p className="weather__paragraph">
            {`Temperature in ${weatherObject[0].name} now: ${weatherObject[0].main.temp}°C`}
          </p>
          <img
            className="weather__icon"
            src={`https://openweathermap.org/img/w/${weatherObject[0].weather['0'].icon}.png`}
            alt="icon of weather"
          />
          <p className="weather__paragraph">{weatherObject[0].weather['0'].description}</p>
          <p className="weather__paragraph">{`Wind: ${weatherObject[0].wind.speed}м/c`}</p>
          <p className="weather__paragraph">{`Humidity: ${weatherObject[0].main.humidity}%`}</p>
        </>;
      } else {
        if (positionInObject > 40
          || +currentDate.getFullYear() > new Date().getFullYear()
          || ((+currentDate.getMonth() > new Date().getMonth())
            && +currentDate.getFullYear() === new Date().getFullYear())) {
          successContent = (
            <p className="weather__paragraph">
              {`Sorry, but we don't have an information for so long period of time.`}
            </p>);
        } else if (positionInObject < 40 && positionInObject > 2) {
          successContent = (
            <>
              <p className="weather__paragraph">
                {`Temperature in ${weatherObject[1].city.name} now: ${weatherObject[1].list[positionInObject].main.temp}°C`}
              </p>
              <img
                className="weather__icon"
                src={`https://openweathermap.org/img/w/${weatherObject[1].list[positionInObject].weather['0'].icon}.png`}
                alt="icon of weather"
              />
              <p className="weather__paragraph">
                {weatherObject[1].list[positionInObject].weather['0'].description}
              </p>
              <p className="weather__paragraph">
                {`Wind: ${weatherObject[1].list[positionInObject].wind.speed}м/c»`}
              </p>
              <p className="weather__paragraph">
                {`Humidity: ${weatherObject[1].list[positionInObject].main.humidity}%»`}
              </p>
            </>);
        } else {
          successContent = <p className="weather__paragraph">Sorry, we don&apos;t forecast weather for past.</p>;
        }
      }
    }

    if (weatherError) {
      return (
        <div className="weather">
          <h2 className="weather__header">Weather</h2>
          <div className="weather__content">
            <p>{`Error: ${weatherError.message}`}</p>
          </div>
        </div>);
    } else if (!weatherIsLoaded) {
      return (
        <div className="weather">
          <h2 className="weather__header">Weather</h2>
          <div className="weather__content">
            <p>Loading...</p>
            <img
              className="preloader"
              src={gifPreloader}
              alt="preloader gif"
            />
          </div>
        </div>);
    } else {
      return (
        <div className="weather">
          <h2 className="weather__header">Weather</h2>
          <div className="weather__content">
            {successContent}
            {dayLengthContent}
          </div>
        </div>
      );
    }
  }
}

ComponentWeather.defaultProps = {
  weatherObject: [],
  weatherError: null,
};

ComponentWeather.propTypes = {
  currentDate: PropTypes.instanceOf(Object).isRequired,
  currentDayInTheCalendar: PropTypes.number.isRequired,
  weatherObject: PropTypes.instanceOf(Array),
  weatherIsLoaded: PropTypes.bool.isRequired,
  weatherError: PropTypes.instanceOf(Object),
  fetchData: PropTypes.func.isRequired,
  fetchDaysLengtData: PropTypes.func.isRequired,
};

export default ComponentWeather;
