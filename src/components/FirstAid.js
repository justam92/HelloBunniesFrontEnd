import React from 'react'

export default class FirstAid extends React.Component {

    state = {
        firstAids: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch("http://localhost:8080/firstAids")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    firstAids: result
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    componentDidUpdate(prevProp) {
        this.state.firstAids.forEach((firstAid, index) => {
            this.refs['description' + index].innerHTML = firstAid.description
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
                    {this.state.firstAids.map((firstAid, index) => (
                        <span key={index}>
                            <h4 className="center"> {firstAid.name} </h4>
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

