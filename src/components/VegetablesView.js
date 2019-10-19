import React from 'react'
import Nourishment from './Nourishment'

export default class VegetablesView extends React.Component {

    state = {
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/nourishmentCategories/")
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
                        <h3> Warzywa </h3>
                        <p>Warzywa i zioła kuchenne stanowią alternatywę dla roślin łąkowych. Są bogate w składniki odżywcze, dostarczają witamin i wodę, są bardzo chętnie zjadane.</p>
                        <p>Posiłek powinien składać się z dużej ilości warzyw, głównie tych liściastych:</p>
                        <p>- różnego rodzaju nacie, liście rzodkiewki, koper, liście selera, mangold, szpinak i szczaw,</p>
                        <p>- różnego rodzaje sałaty np. cykoria, rzymska, dębowa, endywia, radicchio, lollo , masłowa, lodowa itd.</p>
                        <br></br>
                        <p>Szczególnie dobroczynne działanie na układ pokarmowy królika mają sałaty z goryczką, czyli cykoria, radicchio, cykoria catalogna, rukola, endywia, mniszek lekarski. Goryczka pomaga w trawieniu, reguluje apetyt, wspomaga funkcjonowanie wątroby, działa przeciwzapalnie i oczyszczająco.</p>
                        <br></br>
                        <p>Rośliny kapustne zaliczają się również do warzyw liściastych. Po uprzednim stopniowym przyzwyczajeniu można je dodawać do każdego posiłku. Pod warunkiem, że królik nie jest żywiony suchym pokarmem typu granulat, mieszanka.</p>
                        <br></br>
                        <p>Podajemy:</p>
                        <p>- kapustę pekińską, chińską, szpiczastą, włoską, białą, czerwoną, brokuły, liście kalafiora, liście kalarepy, brukselkę.</p>
                        <p>Jedna trzecia liściastego posiłku możemy urozmaicić  warzywami korzeniowymi:</p>
                        <p>- marchewka, pietruszka, pasternak, burak, seler, rzepa, kalarepa, topinambur, fenkuł</p>
                        <br></br>
                        <p>Warzywa takie jak ogórek, cukinia, dynia, papryka są miłym urozmaiceniem, nie mają jednak większego znaczenia w żywieniu królika.</p>
                        <br></br>
                        <p>Warzywa wprowadzamy stopniowo zaczynając od garstki dobrze tolerowanych warzyw np. koper, fenkuł, marchewka, cykoria. Gdy królik zostanie przyzwyczajony do dużej ilości warzyw możemy zacząć wprowadzać warzywa kapustne.</p>
                        <br></br>
                        <p>Prawidłowy posiłek powinien się składać przynajmniej z pięciu warzyw. Większość będą stanowić warzywa liściaste, jedną trzecią warzywa korzeniowe. Powinna być to duża porcja, która starczy do następnego posiłku. Króliki pobierają pokarm często, ale małymi porcjami, równomiernie obciążając swój układ pokarmowy. Duże przerwy pomiędzy posiłkami skutkują otłuszczoną wątrobą, problemami trawiennymi i problemami z zębami. Celowo nie podaje żadnych przykładowych posiłków w gramach. To opiekun na podstawie obserwacji swojego uszaka powinien dostosować porcję.</p>
                        <br></br>
                        <p>W sezonie letnim gdy mamy dostęp do roślin łąkowych, warzywa możemy zredukować lub całkowicie pominąć.</p>
                        <br></br>
                        <p>Warzywa gotowane i mrożone nie mają zastosowania w żywieniu królika. Podajemy tylko świeże, umyte jarzyny.</p>
                        <br></br>
                    </div>
                    <div>
                        <h5>Zawartość witaminy C, wapnia i fosforu mg/100g w warzywach</h5>

                        <Nourishment type={'vegetables'} idNourishmentCategory={this.props.idNourishmentCategory} />

                    </div>

                    <div>
                        <br></br>
                        <h5>Wapń i fosfor w diecie królika</h5>
                        <p>Bardzo ważnym elementem w diecie królika jest wapń. Wapń jest dostarczany wraz z pożywieniem. Królik pobiera tyle wapnia ile zawiera go dany pokarm. Nadmiar tego pierwiastka jest wydalany z moczem. Z tego powodu u zdrowego, dorosłego królika mocz ma przeważnie kolor biały, nieprzezroczysty. U młodych królików, które prawie w całości wykorzystują wapń w czasie wzrostu mocz jest zwykle przezroczysty. Inaczej niż u kota, czy psa mocz królika jest zasadowy o wysokim ph 8- 9. Wydalanie wapnia u królików żywionych naturalnie nie stanowi problemu, ponieważ rośliny składają się w 80 % z wody, warzywa w 80% - 90%, woda rozrzedza wapń i w ten sposób jest on usuwany/ wypłukiwany z organizmu. Gorzej sprawa się przedstawia jeśli królik żywiony jest w dużej części suchym pokarmem (granulat, siano, suszone zioła, suszone warzywa), zawartość wody w takim pokarmie wynosi około 10%, wtedy wapń zbiera się w skoncentrowanej formie, tworzy się papka, która odkłada się w rożnych organach (nie tylko w układzie moczowym). Jeśli uszak ma problemy z układem moczowym powinniśmy zwracać uwagę także na stosunek wapnia i fosforu. Proporcja tych pierwiastków w pokarmie powinna wynosić 1, 5/2 cześć wapnia na 1 cześć fosforu. Za duża ilość fosforu w diecie (przez dłuższy czas) może być przyczyna osteoporozy. Zachowanie odpowiedniego stosunku fosforu do wapnia, ma także korzystny wpływ na prawidłowe funkcjonowanie nerek i serca, szybką regeneracje ran, prawidłowa praca układu nerwowego, jak również odpowiednią stymulację mięśni. Nie można też pominąć kwasu szczawiowego, który z jonami wapnia tworzy szczawian wapnia. Szczawian ten osadza się w nerkach i staje się przyczyną kamicy nerkowej. Jest też odpowiedzialny za niedobór wapnia w organizmie. Kwas szczawiowy znajduje  się w wielu roślinach i warzywach np. burakach, papryce, szczawiu, cykorii, czerwonych porzeczkach, kiwi, szpinaku, koniczynie, truskawkach, marchewce itd.</p>
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