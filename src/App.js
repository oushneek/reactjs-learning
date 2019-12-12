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
        otherState: 'other value',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        //console.log('Was Clicked');
        // Don't do this => this.state.persons[0].name="Tazbeea Tazakka";
        this.setState({
            persons: [
                {name: newName, age: 25},
                {name: 'Tazakka', age: 27},
                {name: 'Oushneek', age: 28}
            ]
        })
    }

    nameChangeHandler = (event) =>{
        this.setState({
            persons: [
                {name: 'Tazbeea', age: 25},
                {name: event.target.value , age: 27},
                {name: 'Oushneek', age: 28}
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow= this.state.showPersons;
        this.setState({showPersons : !doesShow});
    }

    render() {
        const style={
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
        };

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person
                            name={person.name}
                            age={person.age}/>
                    })}
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hi, I'm a React App.</h1>
                <p>This is really working.!!!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
        //   return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now???'));
    }
}
export default App;