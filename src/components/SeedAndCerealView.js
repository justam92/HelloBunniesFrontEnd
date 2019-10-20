import React from 'react'
import SeedAndCereal from './SeedAndCereal';

export default class HerbsView extends React.Component {
    state = {
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/nourishmentCategories/" )
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    render() {
        let isLoaded = this.state.isLoaded;
        let error = this.state.error;

        if (isLoaded) {
            if (error) {
                return (
                    <div className="container mainContent"> <p> Błąd wczytywania :( </p></div>
                )
            }
            return (
                <div className="container mainContent">
                    <div>
                        <h3>Nasiona i zboża</h3>
                        <p>Nasiona i zboża spożywane są przez króliki sezonowo, jako niewielki dodatek do zieleniny. Są dostępne latem i jesienią, chętnie zjadane niedojrzałe razem z całą rośliną, jak i w stanie dojrzałym, znalezione na ziemi. Uzupełniają dietę królika w aminokwasy, nienasycone kwasy tłuszczowe, białko, błonnik i wiele innych pożytecznych składników odżywczych. Nasiona i zboża dostarczają bardzo dużo kalorii, dzikie króliki potrzebują jej, aby dojść do swojej wagi po licznych porodach i wychowywaniu młodych oraz po to, aby dzięki nagromadzonej energii przetrwać zimę. Nasze miniaturowe króliki nie mają aż takiego dużego zapotrzebowania na kalorie, oprócz zieleniny dostają również warzywa i owoce, żyją w stałej temperaturze, nie rozmnażają się lub rozmnażają w sposób kontrolowany i nie mają wrogów, przed którymi musiały by uciekać. Oczywiście możemy uzupełniać ich dietę o nasiona i zboża, traktujmy je raczej jako przysmak podając nie więcej niż łyżeczkę nasion na kg uszaka na tydzień. Musimy przy tym regularnie kontrolować wagę królika i obserwować bobki. Nasiona są łatwiej trawione, jeśli podawane są w całości, a więc z łuską, plewami, źdźbłami traw czy całym kłosem. Większe zapotrzebowanie na energie mają króliki mieszkające na dworze lub balkonie (zwłaszcza w okresie jesieni i zimy), zwierzęta po przebytej chorobie, ciężarne i karmiące królice. Tym królikom możemy podawać łyżeczkę ziaren na dzień. Nasiona oleiste (m.in. słonecznik, siemię lniane, wiesiołek) zalecane są w okresie linienia oraz w przypadku niedoboru kwasów tłuszczowych, niedobór daje o sobie znać suchą skórą, pojawieniem się łupieżu, zwłaszcza na uszach, świądem, matową, zaniedbaną sierścią, zapaleniem warg i częstymi zatwardzeniami. Oczywiście powyższe objawy musi ocenić najpierw lekarz weterynarii, aby wykluczyć pasożyty, czy chorobę układu pokarmowego.</p>
                        <br></br>
                        <p>Najbezpieczniej jest kupować nasionka w sklepach ze zdrową żywnością, w aptekach lub zamawiać z hodowli organicznej. Oferowane nasiona w sklepach ogrodniczych zawierają trujące pestycydy i środki konserwujące, nie są przeznaczone do spożycia. Szczęśliwi posiadacze działek lub ogródków mogą sami nazbierać nasiona mniszka i innych chwastów, rożnych warzyw bądź słonecznika.</p>
                        <br></br>
                    </div>
                    <div>
                        <p>Nazwy nasion i zbóż wraz z ich przynależnością gatunkową.</p>
                        <SeedAndCereal type={'seedAndCereal'} idNourishmentCategory={this.props.idNourishmentCategory} />
                    </div>
                </div>
                )
        } else {
            return (
                <div className="container mainContent"> <p> Wczytywanie . . . </p> </div>
            )
        }
    }
}
