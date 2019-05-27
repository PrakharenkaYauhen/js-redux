/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const ADD_NUMBER = 'ADD_NUMBER'

export const FILL_CALENDAR = 'FILL_CALENDAR'
export const FILL_WEATHER = 'FILL_WEATHER'
export const FILL_JUVENTUS = 'FILL_JUVENTUS'
export const CHANGE_TEAM = 'CHANGE_TEAM'
export const JUVENTUS_STUFF = 'JUVENTUS_STUFF'
export const JUVENTUS_STUFF_MODAL = 'JUVENTUS_STUFF_MODAL'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function actionAddNumber(number) {
  return { type: ADD_NUMBER, number }
}

export function actionFillCalendar(action) {
  // console.log(action);
  return { type: FILL_CALENDAR, action }
}

export function actionFillWeather(action) {
  // console.log(action);
  return { type: FILL_WEATHER, action }
}

export function actionFillJuventus(action) {
  // console.log(action);
  return { type: FILL_JUVENTUS, action }
}

export function actionChangeTeam(action) {
  // console.log(action);
  return { type: CHANGE_TEAM, action }
}

export function actionJuventusStuff(action) {
  // console.log(action);
  return { type: JUVENTUS_STUFF, action }
}

export function actionJuventusStuffModal(action) {
  // console.log(action);
  return { type: JUVENTUS_STUFF_MODAL, action }
}