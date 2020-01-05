import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: ['Learn React', 'Learn TypeScript'],
      itemName: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      itemName: e.target.value
    })
  }

  clickHandler = (e) => {
    console.log( e.target )
    this.setState( prevState => {
      const list = [...prevState.todoItems];
      list.push( prevState.itemName );
      return ({
        todoItems: list,
        itemName: '',
      })
    })
  }
  
  handleKeyDown = (e) => {
    if( e.key === 'Enter' ) {
      this.setState( prevState => {
        const list = [...prevState.todoItems];
        list.push( prevState.itemName );
        return ({
          todoItems: list,
          itemName: '',
        })
      })
    }
  }

  closeHandler = (index) => {
    console.log( index )
    const list = [...this.state.todoItems]
    list.splice( index, 1 )
    console.log( list )
    this.setState({
      todoItems: list
    })
  }

  render() {
    const todoItems = this.state.todoItems;
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <input 
          type="text" 
          className="addNewItem" 
          placeholder="Add a new todo list ..." 
          value={this.state.itemName}
          onKeyDown={this.handleKeyDown} 
          onChange={this.changeHandler}
        />
        <button 
          className="addButton" 
          onClick={this.clickHandler}
        >
          Add
        </button>
        <ul className="list-group">
          {
            todoItems.map( ( currentItem, index ) => {
              return (
                <li className="list-item" key={index}>
                  <div className="item">{currentItem}</div>
                  <span 
                    type="button" 
                    className="close" 
                    onClick={ () => this.closeHandler( index )}
                    >
                      ×
                  </span>
                </li>
              ) 
            } )
          }
        </ul>
      </div>
    );
  }
}

export default App;
