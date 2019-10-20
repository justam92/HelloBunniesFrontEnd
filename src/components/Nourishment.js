import React from 'react'
import { API_URL } from './constant/ApiConstants';

export default class Nourishment extends React.Component {

    state = {
        nourishments: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        this.getNourishments();
    }

    componentDidUpdate(prevProp) {
        this.state.nourishments.forEach((nourishment, index) => {
            if (this.props.type === "herbs") {

                this.refs['vitaminC' + index].innerHTML = nourishment.vitaminC;
                this.refs['calcium' + index].innerHTML = nourishment.calcium;
                this.refs['phosphorus' + index].innerHTML = nourishment.phosphorus;

            } else if (this.props.type === "vegetables") {

                this.refs['vitaminC' + index].innerHTML = nourishment.vitaminC;
                this.refs['calcium' + index].innerHTML = nourishment.calcium;
                this.refs['phosphorus' + index].innerHTML = nourishment.phosphorus;
                this.refs['administrationFrequency' + index].innerHTML = nourishment.administrationFrequency;
                this.refs['whatCanYouGive' + index].innerHTML = nourishment.whatCanYouGive;

            } else if (this.props.type === "fruits") {

                this.refs['vitaminC' + index].innerHTML = nourishment.vitaminC;
                this.refs['calcium' + index].innerHTML = nourishment.calcium;
                this.refs['phosphorus' + index].innerHTML = nourishment.phosphorus;
                this.refs['administrationFrequency' + index].innerHTML = nourishment.administrationFrequency;
                this.refs['whatCanYouGive' + index].innerHTML = nourishment.whatCanYouGive;
            }
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
            if (this.props.type === "herbs") {
                return (
                    <div class="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Zioła</th>
                                    <th scope="col">Witamina C</th>
                                    <th scope="col">Wapń</th>
                                    <th scope="col">Fosfor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.nourishments.map((nourishment, index) => (
                                    <tr key={index}>
                                        <th scope="row"> {nourishment.name} </th>
                                        <td ref={'vitaminC' + index}> </td>
                                        <td ref={'calcium' + index}> </td>
                                        <td ref={'phosphorus' + index}> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            } else if (this.props.type === "vegetables") {
                return (
                    <div class="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Warzywo</th>
                                    <th scope="col">Witamina C</th>
                                    <th scope="col">Wapń</th>
                                    <th scope="col">Fosfor</th>
                                    <th scope="col">Częstotliwość podawania</th>
                                    <th scope="col">Co można podawać</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.nourishments.map((nourishment, index) => (
                                    <tr key={index}>
                                        <th scope="row"> {nourishment.name} </th>
                                        <td ref={'vitaminC' + index}> </td>
                                        <td ref={'calcium' + index}> </td>
                                        <td ref={'phosphorus' + index}> </td>
                                        <td ref={'administrationFrequency' + index}> </td>
                                        <td ref={'whatCanYouGive' + index}> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            } else if (this.props.type === "fruits") {
                return (
                    <div class="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Owoc</th>
                                    <th scope="col">Witamina C</th>
                                    <th scope="col">Wapń</th>
                                    <th scope="col">Fosfor</th>
                                    <th scope="col">Częstotliwość podawania</th>
                                    <th scope="col">Co można podawać</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.nourishments.map((nourishment, index) => (
                                    <tr key={index}>
                                        <th scope="row"> {nourishment.name} </th>
                                        <td ref={'vitaminC' + index}> </td>
                                        <td ref={'calcium' + index}> </td>
                                        <td ref={'phosphorus' + index}> </td>
                                        <td ref={'administrationFrequency' + index}> </td>
                                        <td ref={'whatCanYouGive' + index}> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        } else {
            return (
                <div className="container mainContent"> <p> Wczytywanie . . . </p> </div>
            )
        }
    }

    getNourishments() {
        fetch(API_URL + '/nourishmentCategories/' + this.props.idNourishmentCategory)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    nourishments: result.nourishments
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

}
