import React from 'react'

export default class SeedAndCereal extends React.Component {
    state = {
        seedAndCereals: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/nourishmentCategories/" + this.props.idNourishmentCategory)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    seedAndCereals: result.seedAndCereals
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    componentDidUpdate(prevProp) {
        this.state.seedAndCereals.forEach((seedAndCereal, index) => {
            this.refs['seedAndCereal' + index].innerHTML = seedAndCereal.oilyOrCereal
            this.refs['seedAndCereal' + index].innerHTML = seedAndCereal.destiny
        });
    }

    render() {
        let isLoaded = this.state.isLoaded;
        let error = this.state.error;

        if (isLoaded) {
            if(error){
                return (
                <div className="container mainContent"> <p> Błąd wczytywania :( </p></div>
                )
            }
            return (
                <div className="container mainContent">
                    {this.state.seedAndCereals.map((seedAndCereal, index) => (
                        <span>
                            <h4 className="center"> {seedAndCereal.name} </h4>
                            <p ref={'seedAndCereal' + index}> </p>
                        </span>
                    ))}
                </div>
            )
        } else { 
            return (
                <div className="container mainContent"> <p> Wczytywanie . . . </p> </div>
            )
        }
    }
}