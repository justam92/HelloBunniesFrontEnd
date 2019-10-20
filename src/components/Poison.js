import React from 'react'
import { API_URL } from './constant/ApiConstants';

export default class Poison extends React.Component {
   
    state = {
        poisons: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        this.getPoisons();
    }

    componentDidUpdate(prevProp) {
        this.state.poisons.forEach((poison, index) => {
            this.refs['description' + index].innerHTML = poison.description
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
                    {this.state.poisons.map((poison, index) => (
                        <span key={index}>
                            <h4 className="center"> {poison.name} </h4>
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

    getPoisons(){
        fetch(API_URL + '/poisons')
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true,
                poisons: result
            });
        }, error => {
            this.setState({
                isLoaded: true,
                error: error
            });
        });
    }

}