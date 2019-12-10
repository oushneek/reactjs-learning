import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

    const [ personsState, setPersonsState] = useState({
        persons: [
            {name: 'Tazbeea', age: 25},
            {name: 'Tazakka', age: 27},
            {name: 'Oushneek', age: 29}
        ],
    });


    const [otherState,setOtherState]=useState('some other value');
    console.log(personsState,otherState);
    const switchNameHandler = () => {
        //console.log('Was Clicked');
        // Don't do this => this.state.persons[0].name="Tazbeea Tazakka";
        setPersonsState({
            persons: [
                {name: 'Tazbeea oushneek', age: 25},
                {name: 'Tazakka', age: 27},
                {name: 'Oushneek', age: 28}
            ],
        })
    }


        return (
          <div className="App">
              <h1>Hi, I'm a React App.</h1>
              <p>This is really working.!!!</p>
              <button onClick={switchNameHandler}>Switch Name</button>
              <Person
                  name={personsState.persons[0].name}
                  age={personsState.persons[0].age}
              />
              <Person
                  name={personsState.persons[1].name} age={personsState.persons[1].age}>
                  My Hobbies: Reading and Crafting
              </Person>
              <Person
                  name={personsState.persons[2].name}
                  age={personsState.persons[2].age}
              />

          </div>
        );
    //   return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now???'));

}

export default app;

