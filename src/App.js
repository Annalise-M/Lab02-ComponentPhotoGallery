import React, { Component } from 'react';
import creatureData from './data.js';
import ImageItem from './ImageItem.js';
import './App.css';

// import default from './header.js';

class App extends Component {
  state = { selected: null };

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ selected: e.target.value })
  }

  render() {


    return (
      <div>
        <header>
          {/* Logo */}
          <img src="" alt="Horned Creatures"/>
          {/* Title */}
          <h1>Horned Creatures</h1>
        </header>
    
        <main>
          <section className="options">
          <section className="creature-type-filter"onChange={this.handleChange}>
          <ul>
            <option value="" defaultValue>
              All Types
            </option>
            {/* Start inputing dynamic data */}
            <option value="UniWhal">UniWhal</option>
            <option value="rhino">Rhino Family</option>
            <option value="unicorn">Unicorn Head</option>
            <option value="unilego">UniLego</option>
            <option value="narwhal">Basically a unicorn</option>
            <option value="narwhal">#truth</option>
            <option value="rhino">Baby Rhino</option>
            <option value="triceratops">Cera</option>
            <option value="narwhal">Narwhal costume</option>
            <option value="rhino">Rhino costume</option>
            <option value="unicorn">Believe</option>
            <option value="markhor">Markhor</option>
            <option value="markhor">Baby markhor</option>
            <option value="mouflon">Baby mouflon</option>
            <option value="chameleon">Happy Jackson's Chameleon</option>
            <option value="chameleon">Serious Jackson's Chameleon</option>
            <option value="lizard">Horned Lizard</option>
            <option value="dragon">Smaug</option>
          </ul>
          </section>
        </section> 

        <section className="HornedAnimal">
          <div>
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
                  // console.log(animal);
              return <ImageItem creature={animal} />
                //^This is the difinitive pic placed here?
                })
          }
          </ul>
          </div>
        </section>
      </main>
    </div>
    );
  }
}
export default App;