import { combineReducers } from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    ADD_NUMBER,
    FILL_CALENDAR,
    FILL_WEATHER,
    FILL_JUVENTUS,
    CHANGE_TEAM,
    JUVENTUS_STUFF,
    JUVENTUS_STUFF_MODAL,
    TOGGLE_ADD_TASK_MODAL,
    SEARCH_TASK_IN_LIST,
    SEARCHING_TASK_DATA,
    VisibilityFilters,
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function addNumber(state = 0, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return action.number
        default:
            return state
    }
}

let initialState = {
    currentDate: new Date(),
    currentDayInTheCalendar: new Date().getDate(),
    cells: [],
    modalCalendarVision: false,
    modalTextariaValue: '',
    weatherObject: null,
    weatherIsLoaded: false,
    weatherError: null,
    juventusObject: null,
    juventusIsLoaded: false,
    juventusError: null,
    clubName: 'juventus',
    juventusStuffObject: null,
    juventusStuffIsLoaded: false,
    juventusStuffError: null,
    juventusStuffModal: false,
    searchInputValue: '',
}

function reducerCalendar(state = initialState, action) {
    switch (action.type) {
        case FILL_CALENDAR:
            return Object.assign({}, state, {
                currentDate: action.action.currentDate,
                currentDayInTheCalendar: action.action.currentDayInTheCalendar,
                cells: action.action.cells,
                modalCalendarVision: action.action.modalCalendarVision,
                modalTextariaValue: action.action.modalTextariaValue,
            })
        case FILL_WEATHER:
            return Object.assign({}, state, {
                weatherObject: action.action.weatherObject,
                weatherIsLoaded: action.action.weatherIsLoaded,
                weatherError: action.action.weatherError,
            })
        case FILL_JUVENTUS:
            return Object.assign({}, state, {
                juventusObject: action.action.juventusObject,
                juventusIsLoaded: action.action.juventusIsLoaded,
                juventusError: action.action.juventusError,
            })
        case CHANGE_TEAM:
            return Object.assign({}, state, {
                clubName: action.action.clubName,
                juventusStuffIsLoaded: action.action.juventusStuffIsLoaded,
            })
        case JUVENTUS_STUFF:
            return Object.assign({}, state, {
                juventusStuffObject: action.action.juventusStuffObject,
                juventusStuffIsLoaded: action.action.juventusStuffIsLoaded,
                juventusStuffError: action.action.juventusStuffError,
            })
        case JUVENTUS_STUFF_MODAL:
            return Object.assign({}, state, {
                juventusStuffModal: action.action.juventusStuffModal,
            })
        case TOGGLE_ADD_TASK_MODAL:
            return Object.assign({}, state, {
                modalCalendarVision: action.action.modalCalendarVision,
                modalTextariaValue: action.action.modalTextariaValue,
            })
        case SEARCH_TASK_IN_LIST:
            return Object.assign({}, state, {
                searchInputValue: action.action.searchInputValue,
            })
        case SEARCHING_TASK_DATA:
            return Object.assign({}, state, {
                currentDate: action.action.currentDate,
                currentDayInTheCalendar: action.action.currentDayInTheCalendar,
                searchInputValue: action.action.searchInputValue,
            })
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
    addNumber,
    reducerCalendar
})

export default todoApp