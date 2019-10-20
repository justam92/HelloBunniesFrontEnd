import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <div className="container-fluid menu">
            <nav className="navbar navbar-collapse navbar-fixed-top">
                <div id="wrapper" className="toggled">
                    <div id="sidebar-wrapper">
                        <ul className="nav">
                            <Link to='/'><li> Start </li></Link>

                            <li className="btn-group dropdown">

                                <ul className="nourishment dropdown-menu">
                                    <Link to='/grassAndHay'><li className="dropdown-item">Trawa i siano</li> </Link>
                                    <Link to='/herbs'> <li className="dropdown-item">Zioła</li> </Link>
                                    <Link to='/vegetables'> <li className="dropdown-item">Warzywa</li> </Link>
                                    <Link to='/fruits'> <li className="dropdown-item">Owoce</li> </Link>
                                    <Link to='/seedAndCereal'> <li className="dropdown-item">Nasiona i zboża</li> </Link>
                                    <Link to='/saladRecipes'> <li className="dropdown-item">Przepisy na saładki</li> </Link>
                                    <Link to='/driedFruitsAndVegetables'> <li className="dropdown-item">Suszone owoce i warzywa</li> </Link>
                                    <Link to='/twigs'> <li className="dropdown-item">Gałązki</li> </Link>
                                    <Link to='/granules'> <li className="dropdown-item">Granulat</li> </Link>
                                    <Link to='/water'> <li className="dropdown-item">Woda</li> </Link>
                                </ul>
                                <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Żywność
                                </div>
                            </li>

                            <Link to='/poison'> <li>Produkty i rośliny szkoliwe i trujące </li> </Link>

                            <li className="btn-group dropdown">

                                <ul className="care dropdown-menu">
                                    <Link to='/tamingBunny'> <li className="dropdown-item">Oswajanie królika</li> </Link>
                                    <Link to='/bunnySpeech'> <li className="dropdown-item">Królicza mowa</li> </Link>
                                    <Link to='/bunnyCare'> <li className="dropdown-item">Pielęgnacja królika</li> </Link>
                                    <Link to='/bunnyCage'> <li className="dropdown-item">Klatka dla królika</li> </Link>
                                    <Link to='/bunnyLittleBoxAndLearnUseIt'> <li className="dropdown-item">Kuweta i nauka korzystania z kuwety</li> </Link>
                                    <Link to='/homeSecurity'> <li className="dropdown-item">Zabezpieczenie domu</li> </Link>
                                    <Link to='/bunnyToys'> <li className="dropdown-item">Królicze zabawki</li> </Link>
                                    <Link to='/companionshipForBunny'> <li className="dropdown-item">Towarzystwo dla królika</li> </Link>
                                    <Link to='/tripWithBunny'> <li className="dropdown-item">Podróż z królikiem</li> </Link>
                                    <Link to='/walkWithBunny'> <li className="dropdown-item">Spacer z królikiem</li> </Link>
                                    <Link to='/pregnancyAndNewborns'> <li className="dropdown-item">Ciąża i noworodki</li> </Link>
                                    <Link to='/raisingBunny'> <li className="dropdown-item">Podnoszenie królika</li> </Link>
                                    <Link to='/bunnyPhysiology'> <li className="dropdown-item">Fizjologia</li> </Link>  
                                </ul>
                                <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Opieka
                                </div>
                            </li>

                            <li className="btn-group dropdown">
                                <ul className="disease dropdown-menu">

                                    <Link to='/boneDiseases'> <li className="dropdown-item"> Choroby kości </li> </Link>
                                    <Link to='/eyeDiseases'> <li className="dropdown-item"> Choroby oczu </li> </Link>
                                    <Link to='/earDiseases'> <li className="dropdown-item"> Choroby uszu </li> </Link>
                                    <Link to='/urinaryTractDiseases'> <li className="dropdown-item"> Choroby układu moczowego </li> </Link>
                                    <Link to='/respiratorySystemDiseases'> <li className="dropdown-item"> Choroby układu oddechowego </li> </Link>
                                    <Link to='/digestiveSystemDiseases'> <li className="dropdown-item"> Choroby układu pokarmowego </li> </Link>
                                    <Link to='/reproductiveSystemDiseases'> <li className="dropdown-item"> Choroby układu rozrodczego </li> </Link>
                                    <Link to='/externalParasiticDiseases'> <li className="dropdown-item"> Choroby pasożytnicze zewnętrzne</li> </Link>
                                    <Link to='/internalParasiticDiseases'> <li className="dropdown-item"> Choroby pasożytnicze wewnętrzne</li> </Link>
                                    <Link to='/skinDiseases'> <li className="dropdown-item"> Choroby skóry </li> </Link>
                                    <Link to='/diseasesThatRequireVaccination'> <li className="dropdown-item"> Choroby wymagające szczepień </li> </Link>
                                    <Link to='/dentalDiseases'> <li className="dropdown-item"> Choroby zębów </li> </Link>
                                    <Link to='/otherDiseases'> <li className="dropdown-item"> Inne choroby </li> </Link>
                                    <Link to='/firstAidKit'> <li className="dropdown-item">Apteczka</li> </Link>

                                </ul>
                                <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Choroby
                                </div>
                            </li>

                            <Link to='/firstBunny'> <li> Pierwszy królik </li> </Link>
                            <Link to='/firstAid'> <li> Pierwsza pomoc </li> </Link>
                            <Link to='/animalRight'><li> Prawa Zwierząt </li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar