import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state ={
        persons: [
            {name: 'Tazbeea', age: 25},
            {name: 'Tazakka', age: 27},
            {name: 'Oushneek', age: 29}
        ],
        otherState: 'other value'
    }

    switchNameHandler = () => {
        //console.log('Was Clicked');
        // Don't do this => this.state.persons[0].name="Tazbeea Tazakka";
        this.setState({
            persons: [
                {name: 'Tazbeea oushneek', age: 25},
                {name: 'Tazakka', age: 27},
                {name: 'Oushneek', age: 28}
            ],
        })
    }

    render() {
        return (
          <div className="App">
              <h1>Hi, I'm a React App.</h1>
              <p>This is really working.!!!</p>
              <button onClick={this.switchNameHandler}>Switch Name</button>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Reading and Crafting</Person>
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

          </div>
        );
    //   return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now???'));
  }
}

export default App;
