import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
// import TrainingContainer from '../containers/TrainingContainer'

import { TodoCalendar } from '../containers/ContainerTodoCalendar.jsx';
import { ContainerWeather } from '../containers/ContainerWeather.jsx';
import { ContainerJuventus } from '../containers/ContainerJuventus.jsx';
import { ContainerAddTaskToList } from '../containers/ContainerAddTaskToList.jsx';
import { ContainerTaskList } from '../containers/ContainerTaskList.jsx';
import { ContainerTaskSearch } from '../containers/ContainerTaskSearch.jsx';

const App = () => (
  <div>
    {/* <AddTodo />
    <VisibleTodoList />
    <Footer />
    <TrainingContainer /> */}
    <h1 className='todo__header1'>To-do list</h1>
    <div className='todo'>
    <TodoCalendar />
    <ContainerWeather />
    <ContainerJuventus />
    <ContainerTaskSearch/>
    <ContainerAddTaskToList/>
    <ContainerTaskList/>
    </div>
  </div>
)

export default App