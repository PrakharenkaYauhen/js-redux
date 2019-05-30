/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const ADD_NUMBER = 'ADD_NUMBER'

export const FILL_CALENDAR = 'FILL_CALENDAR'
export const CHANGE_DAY = 'CHANGE_DAY'
export const FILL_WEATHER = 'FILL_WEATHER'
export const FILL_JUVENTUS = 'FILL_JUVENTUS'
export const CHANGE_TEAM = 'CHANGE_TEAM'
export const CALENDAR_MODAL = 'CALENDAR_MODAL'
export const CALENDAR_INPUT_CHANGE_MODAL = 'CALENDAR_INPUT_CHANGE_MODAL'
export const JUVENTUS_STUFF = 'JUVENTUS_STUFF'
export const JUVENTUS_STUFF_MODAL = 'JUVENTUS_STUFF_MODAL'
export const TOGGLE_ADD_TASK_MODAL = 'TOGGLE_ADD_TASK_MODAL'
export const SEARCH_TASK_IN_LIST = 'SEARCH_TASK_IN_LIST'
export const SEARCHING_TASK_DATA = 'SEARCHING_TASK_DATA'

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

export function actionChangeDay(action) {
  // console.log(action);
  return { type: CHANGE_DAY, action }
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

export function actionCalendarModal(action) {
  // console.log(action);
  return { type: CALENDAR_MODAL, action }
}

export function actionInputModalChange(action) {
  // console.log(action);
  return { type: CALENDAR_INPUT_CHANGE_MODAL, action }
}

export function actionJuventusStuff(action) {
  // console.log(action);
  return { type: JUVENTUS_STUFF, action }
}

export function actionJuventusStuffModal(action) {
  // console.log(action);
  return { type: JUVENTUS_STUFF_MODAL, action }
}

export function actionToggleAddTaskModal(action) {
  // console.log(action);
  return { type: TOGGLE_ADD_TASK_MODAL, action }
}

export function actionSearchTaskInList(action) {
  // console.log(action);
  return { type: SEARCH_TASK_IN_LIST, action }
}

export function actionSearchingTaskData(action) {
  // console.log(action);
  return { type: SEARCHING_TASK_DATA, action }
}