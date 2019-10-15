import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import AnimalRight from './components/AnimalRight'
import Poison from './components/Poison'
import FirstBunny from './components/FirstBunny'
import FirstAid from './components/FirstAid'
import Nourishment from './components/Nourishment'
import SeedAndCereal from './components/SeedAndCereal'
import OtherNourishment from './components/OtherNourishment'
import Care from './components/Care'
import Disease from './components/Disease'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="row">
            <Navbar />
            <Logo />
            <Route exact path='/' component={Home} />
            <Route path='/animalRight' component={AnimalRight} />
            <Route path='/poison' component={Poison} />
            <Route path='/firstBunny' component={FirstBunny} />
            <Route path='/firstAid' component={FirstAid} />

            <Route path='/vegetables' component={Nourishment} />
            <Route path='/fruits' component={Nourishment} />
            <Route path='/herbs' component={Nourishment} />

            <Route path='/seedAndCereal' component={SeedAndCereal} />
            <Route path='/otherNourishment' component={OtherNourishment} />

            <Route path='/bunnySpeech' component={Care} />
            <Route path='/bunnyCage' component={Care} />
            <Route path='/bunnyLittleBoxAndLearnUseIt' component={Care} />
            <Route path='/homeSecurity' component={Care} />
            <Route path='/bunnyToys' component={Care} />
            <Route path='/companionshipForBunny' component={Care} />
            <Route path='/tripWithBunny' component={Care} />
            <Route path='/walkWithBunny' component={Care} />
            <Route path='/pregnancyAndNewborns' component={Care} />
            <Route path='/raisingBunny' component={Care} />
            <Route path='/bunnyPhysiology' component={Care} />
            <Route path='/tamingBunny' component={Care} />
            <Route path='/bunnyCare' component={Care} />

            <Route path='/boneDiseases' component={Disease} />
            <Route path='/eyeDiseases' component={Disease} />
            <Route path='/earDiseases' component={Disease} />
            <Route path='/urinaryTractDiseases' component={Disease} />
            <Route path='/respiratorySystemDiseases' component={Disease} />
            <Route path='/digestiveSystemDiseases' component={Disease} />
            <Route path='/reproductiveSystemDiseases' component={Disease} />
            <Route path='/externalParasiticDiseases' component={Disease} />
            <Route path='/internalParasiticDiseases' component={Disease} />
            <Route path='/skinDiseases' component={Disease} />
            <Route path='/diseasesThatRequireVaccination' component={Disease} />
            <Route path='/dentalDiseases' component={Disease} />
            <Route path='/otherDiseases' component={Disease} />

            <Route path='/firstAidKit' component={Disease} />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

