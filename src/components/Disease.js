import React from 'react'
import { API_URL } from './constant/ApiConstants';

export default class Disease extends React.Component {

    state = {
        diseases: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        this.getDiseases();
    }

    componentDidUpdate(prevProp) {
        this.state.diseases.forEach((disease, index) => {
            this.refs['description' + index].innerHTML = disease.description
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
                        <span key={index}>
                            <h4 className="center"> {disease.name} </h4>
                            <p ref={'description' + index}> </p>
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

    getDiseases(){
        fetch(API_URL + '/diseasesCategories/' + this.props.idDiseaseCategory)
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
    
}