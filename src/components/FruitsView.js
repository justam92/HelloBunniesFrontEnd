import React from 'react'
import Nourishment from './Nourishment'
import { API_URL } from './constant/ApiConstants';

export default class FruitsView extends React.Component {

    state = {
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        this.getFruitsViews();
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
                        <h3> Owoce </h3>
                        <p>Są bardzo atrakcyjne dla królików niestety w większości bardzo kaloryczne. Dlatego wszystkie owoce powinniśmy traktować jako przysmak i podawać nie częściej niż 2-3 razy w tygodniu w małych ilościach. Owoce podajemy bez pestek, niektóre pestki (jabłka, wiśni, śliwek) zawierają glikozydy cyjanogenne (uwalniają cyjanowodór) - są powodem zatruć. Wszystkie owoce dobrze myjemy gorącą woda. Owoce pestkowe w połączeniu z woda mogą spowodować biegunkę. Kiwi, ananas podawane w okresie linienia zapobiegają kulą włosowym (bezoary). Enzymy (aktynidyna, bromelina), zawarte w owocach zmiękczają powierzchnie włosa, co ułatwia jego przesuwanie i wydalanie.</p>
                        <br></br>
                        <p>Nie podajemy owoców egzotycznych, awokado np. jest trujące, inne (liczi, cherymoja, granat itd.) mogą wywołać zaburzenia trawienia, sok grejpfruta podrażnia króliczy przełyk.</p>
                        <br></br>
                    </div>

                    <div>
                        <h5>Zawartość witaminy C, wapnia i fosforu mg/100g w owocach</h5>

                        <Nourishment type={'fruits'} idNourishmentCategory={this.props.idNourishmentCategory} />

                    </div>

                    <div>
                        <h5>Wapń i fosfor w diecie królika</h5>
                        <p>Bardzo ważnym elementem w diecie królika jest wapń. Wapń jest dostarczany wraz z pożywieniem. Królik pobiera tyle wapnia ile zawiera go dany pokarm. Nadmiar tego pierwiastka jest wydalany z moczem. Z tego powodu u zdrowego, dorosłego królika mocz ma przeważnie kolor biały, nieprzezroczysty. U młodych królików, które prawie w całości wykorzystują wapń w czasie wzrostu mocz jest zwykle przezroczysty. Inaczej niż u kota, czy psa mocz królika jest zasadowy o wysokim ph 8- 9. Wydalanie wapnia u królików żywionych naturalnie nie stanowi problemu ponieważ rośliny składają się w 80% z wody, warzywa  w 80% - 90%, woda rozrzedza wapń i w ten sposób jest on usuwany/wypłukiwany z organizmu. Gorzej sprawa się przedstawia jeśli królik żywiony jest w dużej części suchym pokarmem (granulat, siano, suszone zioła, suszone warzywa), zawartość wody w takim pokarmie wynosi około 10%, wtedy wapń zbiera się w skoncentrowanej formie, tworzy się papka, która odkłada się w rożnych organach ( nie tylko w układzie moczowym). Jeśli uszak ma problemy z układem moczowym powinniśmy zwracać uwagę także na stosunek wapnia i fosforu. Proporcja tych pierwiastków w pokarmie powinna wynosić 1, 5/2 cześć wapnia na 1 cześć fosforu. Za duża ilość fosforu w diecie (przez dłuższy czas) może być przyczyna osteoporozy. Zachowanie odpowiedniego stosunku fosforu do wapnia, ma także korzystny wpływ na prawidłowe funkcjonowanie nerek i serca, szybką regeneracje ran, prawidłowa praca układu nerwowego, jak również odpowiednią stymulację mięśni. Nie można też pominąć kwasu szczawiowego, który z jonami wapnia tworzy szczawian wapnia. Szczawian ten osadza się w nerkach i staje się  przyczyną kamicy nerkowej. Jest też odpowiedzialny za niedobór wapnia w organizmie. Kwas szczawiowy znajduje  się w wielu roślinach i warzywach np. burakach, papryce, szczawiu, cykorii, czerwonych porzeczkach, kiwi, szpinaku, koniczynie, truskawkach, marchewce itd.</p>
                    </div>

                </div>
            )
        } else {
            return (
                <div className="container mainContent"> <p> Wczytywanie . . . </p> </div>
            )
        }
    }

    getFruitsViews(){
        fetch(API_URL + '/nourishmentCategories/')
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

}