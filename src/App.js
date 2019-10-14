import React from 'react';
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid">
        <div className="row">
        <Navbar />
          <Logo />
          <div className="w-100"></div>
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

          <Route path='/osteoporosis' component={Disease} />
          <Route path='/brokenBone' component={Disease} />
          <Route path='/spinalInjury' component={Disease} />

          <Route path='/glaucoma' component={Disease} />
          <Route path='/cataract' component={Disease} />
          <Route path='/blindBunny' component={Disease} />
          <Route path='/eyeRemoval' component={Disease} />
          <Route path='/eyeDamage' component={Disease} />
          <Route path='/tearDuctClogged' component={Disease} />
          <Route path='/conjunctivitis' component={Disease} />

          <Route path='/otitis' component={Disease} />
          <Route path='/earMites' component={Disease} />
          <Route path='/deafBunny' component={Disease} />

          <Route path='/sandAndStones' component={Disease} />
          <Route path='/nephritis' component={Disease} />
          <Route path='/cystitis' component={Disease} />

          <Route path='/rhinitis' component={Disease} />
          <Route path='/cold' component={Disease} />
          <Route path='/choking' component={Disease} />
          <Route path='/pneumonia' component={Disease} />

          <Route path='/bezoars' component={Disease} />
          <Route path='/gastroenteritis' component={Disease} />
          <Route path='/diarrhea' component={Disease} />
          <Route path='/flatulence' component={Disease} />
          <Route path='/constipation' component={Disease} />
          <Route path='/bacterialEnteritis' component={Disease} />
          <Route path='/stomachOverflow' component={Disease} />

          <Route path='/vaginitis' component={Disease} />
          <Route path='/uterineInflammation' component={Disease} />
          <Route path='/mastitis' component={Disease} />
          <Route path='/genitalCancer' component={Disease} />

          <Route path='/cheyletiellaParasitivorax' component={Disease} />
          <Route path='/ticks' component={Disease} />
          <Route path='/fleas' component={Disease} />
          <Route path='/trombiculaAutumnalis' component={Disease} />
          <Route path='/sarcoptesScabiei' component={Disease} />
          <Route path='/mallophaga' component={Disease} />
          <Route path='/anoplura' component={Disease} />
          <Route path='/larvaeOfFlies' component={Disease} />
          <Route path='/demodexCanis' component={Disease} />
          <Route path='/encephalitozoonCuniculi' component={Disease} />
          <Route path='/coccidiosis' component={Disease} />
          <Route path='/nematodes' component={Disease} />

          <Route path='/tinea' component={Disease} />
          <Route path='/plantarDermatitis' component={Disease} />
          <Route path='/cheilitis' component={Disease} />

          <Route path='/myxomatosis' component={Disease} />
          <Route path='/bunnyPlague' component={Disease} />
          <Route path='/pasteurellosis' component={Disease} />

          <Route path='/toothCrownHypertrophy' component={Disease} />
          <Route path='/toothRootHypertrophy' component={Disease} />
          <Route path='/abscesses' component={Disease} />
          <Route path='/toothFractures' component={Disease} />

          <Route path='/diabetes' component={Disease} />
          <Route path='/epilepsy' component={Disease} />
          <Route path='/sunstroke' component={Disease} />
          <Route path='/feeding' component={Disease} />
          <Route path='/mycotoxins' component={Disease} />

          <Route path='/firstAidKit' component={Disease} />

        </div>
      </div>
    </BrowserRouter>
  );
}

