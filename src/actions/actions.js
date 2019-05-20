// actions

export const DATE_CHANGE_CALENDAR = 'DATE_CHANGE_CALENDAR';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const REQUEST_JUVENTUS = 'REQUEST_JUVENTUS';
export const RECEIVE_JUVENTUS = 'RECEIVE_JUVENTUS';
export const ADD_NUMBER = 'ADD_NUMBER';
export const REQUEST_JUVENTUS_STUFF = 'REQUEST_JUVENTUS_STUFF';
export const RECEIVE_JUVENTUS_STUFF = 'RECEIVE_JUVENTUS_STUFF';


export function getDateAndTasks(currentDate, currentDayInTheCalendar, currentLocalStorageKey, task) {
    return {
        type: DATE_CHANGE_CALENDAR,
        payload: {
            currentDate: currentDate,
            currentDayInTheCalendar: currentDayInTheCalendar,
            currentLocalStorageKey: currentLocalStorageKey,
            task: task,
        },
    }
}

export function requestWeather() {
    return {
        type: REQUEST_WEATHER,
        payload: {
            loadComplete: false,
            weatherObject: null,
        },
    }
}

export function receiveWeather(weatherObject) {
    return {
        type: RECEIVE_WEATHER,
        payload: {
            loadComplete: true,
            weatherObject: weatherObject,
        },
    }
}

export function requestJuventus(club) {
    return {
        type: REQUEST_JUVENTUS,
        payload: {
            loadJuventusComplete: false,
            juventusObject: null,
            club: club
        },
    }
}

export function receiveJuventus(juventusObject, club) {
    return {
        type: RECEIVE_JUVENTUS,
        payload: {
            club: club,
            loadJuventusComplete: true,
            juventusObject: juventusObject,
        },
    }
}


export function someActionNumber(state) {
    return {
        type: ADD_NUMBER,
        payload: {
            number: state.reducerAddNumber + 1,
        },
    }
}

export function requestJuventusStuff() {
    return {
        type: REQUEST_JUVENTUS_STUFF,
        payload: {
            loadJuventusStuffComplete: false,
            juventusStuff: null,
        },
    }
}

export function receiveJuventusStuff(juventusStuff) {
    return {
        type: RECEIVE_JUVENTUS_STUFF,
        payload: {
            loadJuventusStuffComplete: true,
            juventusStuff: juventusStuff
        },
    }
}