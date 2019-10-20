import React from 'react'

export default class AnimalRight extends React.Component {

    state = {
        animalRights: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/animalRights")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    animalRights: result
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    componentDidUpdate(prevProp) {
        this.state.animalRights.forEach((animalRight, index) => {
            this.refs['description' + index].innerHTML = animalRight.description
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
                    {this.state.animalRights.map((animalRight, index) => (
                        <span key={index}>
                            <h4 className="center"> {animalRight.name} </h4>
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
}