import React from 'react'
import { API_URL } from './constant/ApiConstants';

export default class OtherNourishment extends React.Component {

    state = {
        otherNourishments: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        this.getOtherNourishments();
    }

    componentDidUpdate(prevProp) {
        this.state.otherNourishments.forEach((otherNourishment, index) => {
            this.refs['description' + index].innerHTML = otherNourishment.description
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
                    {this.state.otherNourishments.map((otherNourishment, index) => (
                        <span key={index}>
                            <h4 className="center"> {otherNourishment.name} </h4>
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

    getOtherNourishments(){
        fetch(API_URL + '/nourishmentCategories/' + this.props.idNourishmentCategory)
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true,
                otherNourishments: result.otherNourishments
            });
        }, error => {
            this.setState({
                isLoaded: true,
                error: error
            });
        });
    }

}