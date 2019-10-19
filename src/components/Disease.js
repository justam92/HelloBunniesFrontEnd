import React from 'react'

export default class Disease extends React.Component {

    state = {
        diseases: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/diseasesCategories/" + this.props.idDiseaseCategory)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    diseases: result.diseases
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    componentDidUpdate(prevProp) {
        this.state.diseases.forEach((disease, index) => {
            this.refs['disease' + index].innerHTML = disease.description
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
                    {this.state.diseases.map((disease, index) => (
                        <span>
                            <h4 className="center"> {disease.name} </h4>
                            <p ref={'disease' + index}> </p>
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