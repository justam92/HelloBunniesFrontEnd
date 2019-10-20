import React from 'react'
import { API_URL } from './constant/ApiConstants';

export default class Care extends React.Component {

    state = {
        cares: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        this.getCares();
    }

    componentDidUpdate(prevProp) {
        this.state.cares.forEach((care, index) => {
            this.refs['description' + index].innerHTML = care.description
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
                    {this.state.cares.map((care, index) => (
                        <span key={index}>
                            <h4 className="center"> {care.name} </h4>
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

    getCares(){
        fetch(API_URL + '/careCategories/' + this.props.idCareCategory)
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true,
                cares: result.careList
            });
        }, error => {
            this.setState({
                isLoaded: true,
                error: error
            });
        });
    }
    
}