import React from 'react'
import { API_URL } from './constant/ApiConstants';

export default class SeedAndCereal extends React.Component {

    state = {
        seedsAndCereals: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        this.getSeedsAndCereals();
    }

    componentDidUpdate(prevProp) {
        this.state.seedsAndCereals.forEach((seedAndCereal, index) => {
            this.refs['oilyOrCereal' + index].innerHTML = seedAndCereal.oilyOrCereal
            this.refs['destiny' + index].innerHTML = seedAndCereal.destiny
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
            if (this.props.type === "seedAndCereal") {
                return (
                    <div class="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nazwa</th>
                                    <th scope="col">Oleista/zboże</th>
                                    <th scope="col">Przeznaczenie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.seedsAndCereals.map((seedAndCereal, index) => (
                                    <tr key={index}>
                                        <th scope="row"> {seedAndCereal.name} </th>
                                        <td ref={'oilyOrCereal' + index}> </td>
                                        <td ref={'destiny' + index}> </td>
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

    getSeedsAndCereals() {
        fetch(API_URL + '/nourishmentCategories/' + this.props.idNourishmentCategory)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    seedsAndCereals: result.seedsAndCereals
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

}