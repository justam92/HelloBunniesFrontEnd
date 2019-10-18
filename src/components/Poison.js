import React from 'react'

export default class Poison extends React.Component {
   
    state = {
        poisons: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/poisons")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    poisons: result
                });
                console.log(this.state.poisons)
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    componentDidUpdate(prevProp) {
        this.state.poisons.map((poison, index) => {
            this.refs['poison' + index].innerHTML = poison.description
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
                        <span>
                            <h4 className="center"> {poison.name} </h4>
                            <p ref={'poison' + index}> </p>
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