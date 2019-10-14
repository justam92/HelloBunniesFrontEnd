import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container menu">
            <nav className="navbar navbar-collapse navbar-fixed-top">
                <div id="wrapper" className="toggled">
                    <div id="sidebar-wrapper">
                        <ul className="nav">
                            <Link to='/'><li> Start </li></Link>

                            <li className="btn-group dropdown">

                                <ul className="dropdown-menu">
                                    <Link to='/vegetables'> <li className="dropdown-item">Warzywa</li> </Link>
                                    <Link to='/fruits'> <li className="dropdown-item">Owoce</li> </Link>
                                    <Link to='/herbs'> <li className="dropdown-item">Zioła</li> </Link>
                                    <Link to='/seedAndCereal'> <li className="dropdown-item">Nasiona i zboża</li> </Link>
                                    <Link to='/otherNourishment'> <li className="dropdown-item">Inne</li> </Link>
                                </ul>
                                <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Żywność
                                </div>
                            </li>

                            <Link to='/poison'> <li>Produkty i rośliny szkoliwe i trujące </li> </Link>

                            <li className="btn-group dropdown">

                                <ul className="dropdown-menu">
                                    <Link to='/bunnySpeech'> <li className="dropdown-item">Królicza mowa</li> </Link>
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
                                    <Link to='/tamingBunny'> <li className="dropdown-item">Oswajanie królika</li> </Link>
                                    <Link to='/bunnyCare'> <li className="dropdown-item">Pielęgnacja królika</li> </Link>
                                </ul>
                                <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Opieka
                                </div>
                            </li>

                            {/* <li>Disease Category</li> */}

                            <li className="btn-group dropdown">

                                <ul className="dropdown-menu">
                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/osteoporosis'> <li className="dropdown-item">Osteoporoza</li> </Link>
                                            <Link to='/brokenBone'> <li className="dropdown-item">Złamanie</li> </Link>
                                            <Link to='/spinalInjury'> <li className="dropdown-item">Uraz kręgosłupa</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby kości
                                    </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/glaucoma'> <li className="dropdown-item">Jaskra</li> </Link>
                                            <Link to='/cataract'> <li className="dropdown-item">Zaćma (katarakta)</li> </Link>
                                            <Link to='/blindBunny'> <li className="dropdown-item">Królik niewidomy</li> </Link>
                                            <Link to='/eyeRemoval'> <li className="dropdown-item">Usunięcie oka</li> </Link>
                                            <Link to='/eyeDamage'> <li className="dropdown-item">Uszkodzenie oka</li> </Link>
                                            <Link to='/tearDuctClogged'> <li className="dropdown-item">Zatkany kanalik łzowy</li> </Link>
                                            <Link to='/conjunctivitis'> <li className="dropdown-item">Zapalenie spojówki</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby oczu
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/otitis'> <li className="dropdown-item">Zapalenie uszu</li> </Link>
                                            <Link to='/earMites'> <li className="dropdown-item">Świerzb uszny</li> </Link>
                                            <Link to='/deafBunny'> <li className="dropdown-item">Królik niesłyszący</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby uszu
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/sandAndStones'> <li className="dropdown-item">Piasek i kamienie</li> </Link>
                                            <Link to='/nephritis'> <li className="dropdown-item">Zapalenie nerek</li> </Link>
                                            <Link to='/cystitis'> <li className="dropdown-item"> Zapalenie pęcherza </li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby układu moczowego
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/rhinitis'> <li className="dropdown-item">Katar</li> </Link>
                                            <Link to='/cold'> <li className="dropdown-item">Przeziębienie</li> </Link>
                                            <Link to='/choking'> <li className="dropdown-item">Zakrztuszenie/zadławienie</li> </Link>
                                            <Link to='/pneumonia'> <li className="dropdown-item">Zapalenie płuc</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby układu oddechowego
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/bezoars'> <li className="dropdown-item">Bezoary (Kule włosowe)</li> </Link>
                                            <Link to='/gastroenteritis'> <li className="dropdown-item">Nieżyt żołądka i jelit</li> </Link>
                                            <Link to='/diarrhea'> <li className="dropdown-item">Rozwolnienie</li> </Link>
                                            <Link to='/flatulence'> <li className="dropdown-item">Wzdęcia</li> </Link>
                                            <Link to='/constipation'> <li className="dropdown-item">Zaparcia</li> </Link>
                                            <Link to='/bacterialEnteritis'> <li className="dropdown-item">Bakteryjne zapalenie jelit</li> </Link>
                                            <Link to='/stomachOverflow'> <li className="dropdown-item">Przepełnienie żołądka</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby układu pokarmowego
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/vaginitis'> <li className="dropdown-item">Zapalenie pochwy</li> </Link>
                                            <Link to='/uterineInflammation'> <li className="dropdown-item">Zapalenie macicy</li> </Link>
                                            <Link to='/mastitis'> <li className="dropdown-item">Zapalenie gruczołów mlecznych</li> </Link>
                                            <Link to='/genitalCancer'> <li className="dropdown-item">Rak narządów płciowych</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby układu rozrodczego
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <p>Zewnętrzne</p>
                                            <Link to='/cheyletiellaParasitivorax'> <li className="dropdown-item">Chejletieloza</li> </Link>
                                            <Link to='/ticks'> <li className="dropdown-item">Kleszcze</li> </Link>
                                            <Link to='/fleas'> <li className="dropdown-item">Pchły</li> </Link>
                                            <Link to='/trombiculaAutumnalis'> <li className="dropdown-item">Swędzik jesienny</li> </Link>
                                            <Link to='/sarcoptesScabiei'> <li className="dropdown-item">Świerzb drażniący</li> </Link>
                                            <Link to='/mallophaga'> <li className="dropdown-item">Wszoły</li> </Link>
                                            <Link to='/anoplura'> <li className="dropdown-item">Wszy</li> </Link>
                                            <Link to='/larvaeOfFlies'> <li className="dropdown-item">Larwy much</li> </Link>
                                            <Link to='/demodexCanis'> <li className="dropdown-item">Nużyca</li> </Link>
                                            <p>Wewnętrzne</p>
                                            <Link to='/encephalitozoonCuniculi'> <li className="dropdown-item">Encephalitozoon cuniculi</li> </Link>
                                            <Link to='/coccidiosis'> <li className="dropdown-item">Kokcydioza</li> </Link>
                                            <Link to='/nematodes'> <li className="dropdown-item">Nicienie</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby pasożytnicze
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/tinea'> <li className="dropdown-item">Grzybica</li> </Link>
                                            <Link to='/plantarDermatitis'> <li className="dropdown-item">Zapalenie skóry podeszwy</li> </Link>
                                            <Link to='/cheilitis'> <li className="dropdown-item">Zapalenie warg</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby skóry
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/myxomatosis'> <li className="dropdown-item">Myksomatoza</li> </Link>
                                            <Link to='/bunnyPlague'> <li className="dropdown-item">Pomór króliczy (VHD)</li> </Link>
                                            <Link to='/pasteurellosis'> <li className="dropdown-item">Pastereloza</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby wymagające szczepień
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/toothCrownHypertrophy'> <li className="dropdown-item">Przerost korony</li> </Link>
                                            <Link to='/toothRootHypertrophy'> <li className="dropdown-item">Przerost korzenia</li> </Link>
                                            <Link to='/abscesses'> <li className="dropdown-item">Ropnie</li> </Link>
                                            <Link to='/toothFractures'> <li className="dropdown-item">Złamania zębów</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choroby zębów
                                        </div>
                                    </li>

                                    <li className="btn-group dropleft">
                                        <ul className="dropdown-menu">
                                            <Link to='/diabetes'> <li className="dropdown-item">Cukrzyca</li> </Link>
                                            <Link to='/epilepsy'> <li className="dropdown-item">Padaczka (epilepsja)</li> </Link>
                                            <Link to='/sunstroke'> <li className="dropdown-item">Udar słoneczny</li> </Link>
                                            <Link to='/feeding'> <li className="dropdown-item">Dokarmianie</li> </Link>
                                            <Link to='/mycotoxins'> <li className="dropdown-item">Mykotoksyny</li> </Link>
                                        </ul>
                                        <div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Inne choroby
                                        </div>
                                    </li>

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