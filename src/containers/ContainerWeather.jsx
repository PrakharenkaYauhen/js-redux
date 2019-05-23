// ContainerWeather

// import { WeatherVision } from './WeatherVision/index.js';

import { connect } from 'react-redux'
import { ComponentWeather } from '../components/ComponentWeather'
import { actionFillWeather } from '../actions'

const mapStateToProps = (state) => {
    const { currentDate, weatherObject, weatherIsLoaded, weatherError } = state.reducerCalendar;

    return {
        currentDate,
        weatherObject,
        weatherIsLoaded,
        weatherError
    }
}

// let mapDispatchToProps;
// let ContainerWeather;

const mapDispatchToProps = (dispatch) => {
let weatherDatesPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
            resolve(position.coords);
        } else {
            reject(new Error('Weather dates is not received'));
        }
        console.log(position.coords);
    })
});

weatherDatesPromise.then(coords => {
    let city = (coords) ? 'lat=' + coords.latitude.toFixed(6) + '&lon=' + coords.longitude.toFixed(6) : 'q=Minsk';
    // console.log(city);
    return city;
})
    .then(city => fetch('http://api.openweathermap.org/data/2.5/weather?' + city + '&units=metric&lang=ru&APPID=2d009bc907c3f547b59f7129beb7c9ee'))
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            let action = {
                weatherObject: result,
                weatherIsLoaded: true,
                weatherError: null,
            }
            dispatch(actionFillWeather(action))

            // const mapDispatchToProps = (dispatch) => {
            //     return (function () {
            //         let action = {
            //             weatherObject: result,
            //             weatherIsLoaded: true,
            //             weatherError: null,
            //         }
            //         dispatch(actionFillWeather(action))
            //     }());
            // }
            // ContainerWeather = connect(mapStateToProps, mapDispatchToProps)(ComponentWeather)
        },
        (error) => {
            let action = {
            weatherObject: null,
            weatherIsLoaded: true,
            weatherError: error,
            }
            dispatch(actionFillWeather(action))

            // const mapDispatchToProps = (dispatch) => {
            //     return (function () {
            //         let action = {
            //             weatherObject: null,
            //             weatherIsLoaded: true,
            //             weatherError: error,
            //         }
            //         dispatch(actionFillWeather(action))
            //     }());
            // }
            // ContainerWeather = connect(mapStateToProps, mapDispatchToProps)(ComponentWeather)
        }
    )
}

// class WeatherContainer extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         error: null,
//     //         isLoaded: false,
//     //         todayWeather: null,
//     //     }
//     // }

//     componentDidMount() {

//         // TODO: HERE!!!!

//         // WeatherForecast with fetch

//         let weatherDatesPromise = new Promise((resolve, reject) => {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 if (position) {
//                     resolve(position.coords);
//                 } else {
//                     reject(new Error('Weather dates is not received'));
//                 }
//                 // console.log(position.coords);
//             })
//         });

//         weatherDatesPromise.then(coords => {
//             let city = (coords) ? 'lat=' + coords.latitude.toFixed(6) + '&lon=' + coords.longitude.toFixed(6) : 'q=Minsk';
//             // console.log(city);
//             return city;
//         })
//             .then(city => fetch('http://api.openweathermap.org/data/2.5/weather?' + city + '&units=metric&lang=ru&APPID=2d009bc907c3f547b59f7129beb7c9ee'))
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     // console.log(result);
//                     this.setState({
//                         isLoaded: true,
//                         todayWeather: result
//                     });
//                 },
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//     }

//     // render() {
//     //     return <WeatherVision
//     //         error={this.state.error}
//     //         isLoaded={this.state.isLoaded}
//     //         todayWeather={this.state.todayWeather} />
//     // }
// }


// const ContainerWeather = connect(mapStateToProps)(ComponentWeather)
console.log(1);
const ContainerWeather = connect(mapStateToProps, mapDispatchToProps)(ComponentWeather)
console.log(2);

export { ContainerWeather }