import React, { Component } from 'react';

// Components
import Tareas from './Tareas'

export default class App extends Component {
  render() {
    return (
      <div className="container">
      <h1 className="text-center">TODO React by: bernajs</h1>      
        <Tareas></Tareas>
      </div>
    );
  }
}
