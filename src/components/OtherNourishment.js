import React from 'react'

export default class OtherNourishment extends React.Component {

    state = {
        otherNourishments: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/otherNourishments")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    otherNourishments: result
                });
                console.log(this.state.otherNourishments)
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    componentDidUpdate(prevProp) {
        this.state.otherNourishments.map((otherNourishment, index) => {
            this.refs['otherNourishment' + index].innerHTML = otherNourishment.description
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
                        <span>
                            <h4 className="center"> {otherNourishment.name} </h4>
                            <p ref={'otherNourishment' + index}> </p>
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