import React from 'react';
import './App.css';
import creatureData from './data.js';
import ImageItem from './ImageItem.js';


// import default from './header.js';

class App extends React.Component {
  state = { selected: null };

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ selected: e.target.value });
  };

  render() {


    return (
      <div>
        <header>
          <img src="" alt="Horned Creatures"/>
          <h1>Logo and Title</h1>
        </header>
    
        <main>
          <section className="options">

          <section className="creature-type-filter" onChange={this.handleChange}>
            <option value="" defaultValue>
              All Types
            </option>
            <option value="">HornedAnimal</option>
            <option value="">HornedAnimal</option>
            <option value="">HornedAnimal</option>
            <option value="">HornedAnimal</option>
          </section>

        </section> 

        <section className="HornedAnimal">
          <ul className="creatures">
            {
              creatureData
                .filter(creature => {
                  //if nothing selected, show all
                  if (!this.state.selected) return true;

                  //otherwise only show the animal if the animal type is the same as what was selected
                  return creature.keyword === this.state.selected;
                })
                .map(animal => {
                  console.log(animal);
              return <ImageItem creature={animal} />
                //^This is the difinitive pic placed here?
                })
          }
          </ul>
        </section>
      </main>
    </div>
    );
  }
}
export default App;