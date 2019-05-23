import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TrainingContainer from '../containers/TrainingContainer'

import { TodoCalendar } from '../containers/ContainerTodoCalendar.jsx';
import { ContainerWeather } from '../containers/ContainerWeather.jsx';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <TrainingContainer />
    <h1 className='todo__header1'>To-do list</h1>
    <div className='todo'>
    <TodoCalendar />
    <ContainerWeather />
    </div>
  </div>
)

export default App