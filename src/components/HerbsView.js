import React from 'react'
import Nourishment from './Nourishment'

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
                        <h3>Zioła i zielenina</h3>
                        <p>Zioła dostarczają królikowi takich składników jak: węglowodany, tłuszcze, białka, minerały, witaminy i są świetnym urozmaiceniem króliczej diety. Uszaki po uprzednim przyzwyczajeniu mogą je jeść praktycznie bez ograniczenia. Nie trzeba być wielkim znawcą, takie zioła jak mniszek, babka szerokolistna i lancetowata, krwawnik, koniczynę, rdest, podagrycznik, rumianek, stokrotki oraz wiele, wiele innych każdy zna. W sklepach możemy dostać natkę pietruszki i marchewki, bazylie, koperek, szałwie itd. Posiadacze ogródków mogą sami wysiać ulubione zioła, Ci z nas którzy nie posiadają działki ani ogródka mogą zazielenić balkon i parapety. Kto ma możliwość powinien codziennie od wiosny do późnej jesieni zrywać świeże zioła dla swoich królików.</p>
                    </div>
                    <div>
                        <h5>Kilka rad:</h5>
                        <p>- nigdy nie zbieramy zieleniny na poboczach dróg, wygląda na dorodną, ponieważ jest zasilana przez spacerujące psy</p>
                        <p>- trawniki mogą być sztucznie nawożone</p>
                        <p>- na poboczach ulic nie zbieramy ze względu na spaliny, które osiadają na roślinach</p>
                        <p>- zielenina z kosiarki zawiera kropelki oleju silnikowego i spaliny, ponadto szybko fermentuje - nie nadaje się</p>
                        <p>- nie zbieramy zieleniny z miejsc, które zamieszkują dzikie króliki, ze względu na choroby, króliczy rewir poznamy po bobkach rozsianych w trawie.</p>
                        <p>- jeśli nie znamy danej rośliny, możemy zerwać jedną i w domu sklasyfikować z pomocą atlasu roślin. Nie podajemy królikom, jeśli nie mamy pewności czy królik może je jeść.</p>
                        <br></br>
                        <p>Zieleninę możemy zbierać na działkach, na łąkach, w opuszczonych ogródkach, na ogrodzonych placach zabaw i innych zielonych miejscach o których wiemy, że nie są nawożone, znajdują się z dala od ulic i fabryk i nie służą psom za toaletę.</p>
                        <br></br>
                    </div>

                    <div>
                        <h5>Suszone zioła</h5>
                        <p>Część zieleniny, którą zbieramy dla królików możemy ususzyć i zrobić tym sposobem zapasy na zimę. Suszone kwiaty, liście i rośliny są bardzo bogate w witaminy, minerały i proteiny, bardzo smakują naszym uszatym i urozmaicają królicze pożywienie. Ususzyć możemy każde (nieszkodliwe) zioło, także kwiaty i płatki kwiatów oraz liście drzew liściastych. Jeżeli uzbierana zielenina rosła w czystym środowisku,  nie trzeba jej myć. Wystarczy tylko ostrożnie nią potrząsnąć, aby wypadły drobne owady, oraz usunąć uszkodzone części roślin. Zabrudzone rośliny myjemy i osuszamy ręcznikiem papierowym, niektórzy jeszcze segregują swoje zbiory wg gatunku. Uzbierane rośliny suszymy kilka dni, cienko rozkładając je na papierze. Suszenie nie powinno odbywać się w pełnym słońcu, aby rośliny nie straciły swoich właściwości. Długie rośliny można zebrać w bukiety i powiesić w przewiewnym miejscu. Suszone zioła przechowujemy w kartonach lub płóciennych woreczkach. W szczelnych pojemnikach rośliny nie całkiem dosuszone mogą zapleśnieć.</p>
                        <p>Suszki zawierają średnio 8 razy więcej wapnia niż świeże zioła. U zwierząt, które miały lub mają problemy z układem moczowym mogą przyczynić się do powstawania piasku lub kamieni w nerkach/pęcherzu. Dlatego króliki z predyspozycja nie powinny jeść więcej niż 20 g suszków na kg królika dziennie.</p>
                        <br></br>
                    </div>

                    <div>
                        <h5>Zawartość witaminy C, wapnia i fosforu mg/100g w roślinie ususzonej</h5>

                        <Nourishment type={'herbs'} idNourishmentCategory={this.props.idNourishmentCategory} />

                    </div>

                    <div>
                        <br></br>
                        <h5>Wapń i fosfor w diecie królika</h5>
                        <p>Bardzo ważnym elementem w diecie królika jest wapń. Wapń jest dostarczany wraz z pożywieniem. Królik pobiera tyle wapnia ile zawiera go dany pokarm. Nadmiar tego pierwiastka jest wydalany z moczem. Z tego powodu u zdrowego, dorosłego królika mocz ma przeważnie kolor biały, nieprzezroczysty. U młodych królików, które prawie w całości wykorzystują wapń w czasie wzrostu mocz jest zwykle przezroczysty. Inaczej niż u kota, czy psa mocz królika jest zasadowy o wysokim ph 8- 9. Wydalanie wapnia u królików żywionych naturalnie nie stanowi problemu, ponieważ rośliny składają się w 80 % z wody, warzywa  w 80% - 90%, woda rozrzedza wapń i w ten sposób jest on usuwany/wypłukiwany z organizmu. Gorzej sprawa się przedstawia jeśli królik żywiony jest w dużej części suchym pokarmem (granulat, siano, suszone zioła, suszone warzywa), zawartość wody w takim pokarmie wynosi około 10%, wtedy wapń zbiera się w skoncentrowanej formie, tworzy się papka, która odkłada się w rożnych organach (nie tylko w układzie moczowym). Jeśli uszak ma problemy z układem moczowym powinniśmy zwracać uwagę także na stosunek wapnia i fosforu. Proporcja tych pierwiastków w pokarmie powinna wynosić 1, 5/2 cześć wapnia na 1 część fosforu. Za duża ilość fosforu w diecie (przez dłuższy czas) może być przyczyną osteoporozy. Zachowanie odpowiedniego stosunku fosforu do wapnia, ma także korzystny wpływ na prawidłowe funkcjonowanie nerek i serca, szybką regeneracje ran, prawidłowa praca układu nerwowego, jak również odpowiednią stymulację mięśni. Nie można też pominąć kwasu szczawiowego, który z jonami wapnia tworzy szczawian wapnia. Szczawian ten osadza się w nerkach i staje się przyczyną kamicy nerkowej. Jest też odpowiedzialny za niedobór wapnia w organizmie. Kwas szczawiowy znajduje się w wielu roślinach i warzywach np. burakach, papryce, szczawiu, cykorii, czerwonych porzeczkach, kiwi, szpinaku, koniczynie, truskawkach, marchewce itd.</p>
                        <p>Niektóre rozbieżności w wynikach zawartości wapnia i fosforu, wynikają z różnych metod suszenia, zawartości wody w świeżej roślinie  itp.</p>
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
