import { combineReducers } from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    ADD_NUMBER,
    FILL_CALENDAR,
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
}

function reducerCalendar(state = initialState, action) {
    switch (action.type) {
        case FILL_CALENDAR:
            return Object.assign({}, state, {
                currentDate: action.action.currentDate,
                currentDayInTheCalendar: action.action.currentDayInTheCalendar,
                cells: action.action.cells,
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