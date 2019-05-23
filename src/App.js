import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TrainingComponent from './TrainingComponent'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <TrainingComponent />
  </div>
)

export default App