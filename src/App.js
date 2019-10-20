import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import AnimalRight from './components/AnimalRight'
import Poison from './components/Poison'
import FirstBunny from './components/FirstBunny'
import FirstAid from './components/FirstAid'
import OtherNourishment from './components/OtherNourishment'
import Care from './components/Care'
import Disease from './components/Disease'
import HerbsView from './components/HerbsView';
import VegetablesView from './components/VegetablesView';
import FruitsView from './components/FruitsView';
import Footer from './components/Footer';
import SeedAndCerealView from './components/SeedAndCerealView'

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

            <Route path='/grassAndHay' render={(props) => <OtherNourishment idNourishmentCategory = {1}></OtherNourishment>} />
            <Route path='/herbs' render={(props) => <HerbsView idNourishmentCategory = {2}></HerbsView>} />
            <Route path='/vegetables' render={(props) => <VegetablesView idNourishmentCategory = {3}></VegetablesView>} />
            <Route path='/fruits' render={(props) => <FruitsView idNourishmentCategory = {4}></FruitsView>} />
            <Route path='/seedAndCereal' render={(props) => <SeedAndCerealView idNourishmentCategory = {5}></SeedAndCerealView>} />
            <Route path='/saladRecipes' render={(props) => <OtherNourishment idNourishmentCategory = {6}></OtherNourishment>} />
            <Route path='/driedFruitsAndVegetables' render={(props) => <OtherNourishment idNourishmentCategory = {7}></OtherNourishment>} />
            <Route path='/twigs' render={(props) => <OtherNourishment idNourishmentCategory = {8}></OtherNourishment>} />
            <Route path='/granules' render={(props) => <OtherNourishment idNourishmentCategory = {9}></OtherNourishment>} />
            <Route path='/water' render={(props) => <OtherNourishment idNourishmentCategory = {10}></OtherNourishment>} />

            <Route path='/tamingBunny' render={(props) => <Care idCareCategory = {1}></Care>} />
            <Route path='/bunnySpeech' render={(props) => <Care idCareCategory = {2}></Care>} />
            <Route path='/bunnyCare' render={(props) => <Care idCareCategory = {3}></Care>} />
            <Route path='/bunnyCage' render={(props) => <Care idCareCategory = {4}></Care>} />
            <Route path='/bunnyLittleBoxAndLearnUseIt' render={(props) => <Care idCareCategory = {5}></Care>} />
            <Route path='/homeSecurity' render={(props) => <Care idCareCategory = {6}></Care>} />
            <Route path='/bunnyToys' render={(props) => <Care idCareCategory = {7}></Care>} />
            <Route path='/companionshipForBunny' render={(props) => <Care idCareCategory = {8}></Care>} />
            <Route path='/tripWithBunny' render={(props) => <Care idCareCategory = {9}></Care>} />
            <Route path='/walkWithBunny' render={(props) => <Care idCareCategory = {10}></Care>} />
            <Route path='/pregnancyAndNewborns' render={(props) => <Care idCareCategory = {11}></Care>} />'
            <Route path='/raisingBunny' render={(props) => <Care idCareCategory = {12}></Care>} />
            <Route path='/bunnyPhysiology' render={(props) => <Care idCareCategory = {13}></Care>} />

            <Route path='/boneDiseases' render={(props) => <Disease idDiseaseCategory = {1}></Disease>} />
            <Route path='/eyeDiseases' render={(props) => <Disease idDiseaseCategory = {2}></Disease>} />
            <Route path='/earDiseases' render={(props) => <Disease idDiseaseCategory = {3}></Disease>} />
            <Route path='/urinaryTractDiseases' render={(props) => <Disease idDiseaseCategory = {4}></Disease>} />
            <Route path='/respiratorySystemDiseases' render={(props) => <Disease idDiseaseCategory = {5}></Disease>} />
            <Route path='/digestiveSystemDiseases' render={(props) => <Disease idDiseaseCategory = {6}></Disease>} />
            <Route path='/reproductiveSystemDiseases' render={(props) => <Disease idDiseaseCategory = {7}></Disease>} />
            <Route path='/externalParasiticDiseases' render={(props) => <Disease idDiseaseCategory = {8}></Disease>} />
            <Route path='/internalParasiticDiseases' render={(props) => <Disease idDiseaseCategory = {9}></Disease>} />
            <Route path='/skinDiseases' render={(props) => <Disease idDiseaseCategory = {10}></Disease>} />
            <Route path='/diseasesThatRequireVaccination' render={(props) => <Disease idDiseaseCategory = {11}></Disease>} />
            <Route path='/dentalDiseases' render={(props) => <Disease idDiseaseCategory = {12}></Disease>} />
            <Route path='/otherDiseases' render={(props) => <Disease idDiseaseCategory = {13}></Disease>} />

            <Route path='/firstAidKit' render={(props) => <Disease idDiseaseCategory = {14}></Disease>} />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

