import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    this.setState({
      filters: {
      type: event.target.value
      }
    })
  }

  onAdoptPet = id => {
    const pet = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({pets: pet})
 }
   // onAdoptPet = (id) => {
  //   const pet = this.state.pets.map(pet => {
  //     if (pet.id === id) {
  //       pet.isAdopted = true
  //     }
  //     return pet
  //   })
  //   this.setState({
  //     pets: pet
  //   })
  // }

    onFindPetsClick = event => {
      let url = "/api/pets"
      if (this.state.filters.type === 'all') {
        fetch(url).then(resp => resp.json()).then(pets => this.setState({pets}))
      } else if (this.state.filters.type === 'cat') {
        fetch(url += `?type=cat`).then(resp => resp.json()).then(pets => this.setState({pets}))
      } else if (this.state.filters.type === 'dog'){
        fetch(url += `?type=dog`).then(resp => resp.json()).then(pets => this.setState({pets}))
      } else {
        fetch(url += `?type=micropig`).then(resp => resp.json()).then(pets => this.setState({pets}))
      }
  }

  render() {
  return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


  // onChangeType = event => {
  //   this.setState({
  //     filters: {
  //       type: event.target.value
  //     }
  //   })
  // }

  // onFindPetsClick = event => {
  //   let url = "/api/pets"
  //    if (this.state.filters.type !== 'all') {
  //    url += `?type=${this.state.filters.type}`
  //  }
  //   fetch(url).then(resp => resp.json())
  //   .then(pets => 
  //     this.setState({
  //       pets
  //     }))
  // }

  // onAdoptPet = (id) => {
  //   const pet = this.state.pets.map(pet => {
  //     if (pet.id === id) {
  //       pet.isAdopted = true
  //     }
  //     return pet
  //   })
  //   this.setState({
  //     pets: pet
  //   })
  // }
