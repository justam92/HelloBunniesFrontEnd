import React from 'react'
import { API_URL } from './constant/ApiConstants';

export default class FirstBunny extends React.Component {
    
    state = {
        firstBunnies: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        this.getFirstBunnies();
    }

    componentDidUpdate(prevProp) {
        this.state.firstBunnies.forEach((firstBunny, index) => {
            this.refs['description' + index].innerHTML = firstBunny.description
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
                    {this.state.firstBunnies.map((firstBunny, index) => (
                        <span key={index}>
                            <h4 className="center"> {firstBunny.name} </h4>
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

    getFirstBunnies(){
        fetch(API_URL + '/firstBunnies')
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true,
                firstBunnies: result
            });
        }, error => {
            this.setState({
                isLoaded: true,
                error: error
            });
        });
    }

}