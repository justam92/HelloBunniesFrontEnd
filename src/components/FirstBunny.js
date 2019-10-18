import React from 'react'

export default class FirstBunny extends React.Component {
    state = {
        firstBunnies: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/firstBunnies")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    firstBunnies: result
                });
                console.log(this.state.firstBunnies)
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    componentDidUpdate(prevProp) {
        this.state.firstBunnies.map((firstBunny, index) => {
            this.refs['firstBunny' + index].innerHTML = firstBunny.description
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
                        <span>
                            <h4 className="center"> {firstBunny.name} </h4>
                            <p ref={'firstBunny' + index}> </p>
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