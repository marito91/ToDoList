// React
import React, { useState } from 'react'

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header';
import Form from './components/Form';
import ToDoList from './components/ToDoList';





function App() {


  return (
    <div className="todolist">
      <Header />
      <ToDoList />
    </div>
  )
}

export default App;
