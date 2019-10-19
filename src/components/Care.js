import React from 'react'

export default class Care extends React.Component {

    state = {
        cares: [],
        isLoaded: false,
        error: null
    }

    componentDidMount() {
        fetch('http://localhost:8080/careCategories/' + this.props.idCareCategory)
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

    componentDidUpdate(prevProp) {
        this.state.cares.forEach((care, index) => {
            this.refs['care' + index].innerHTML = care.description
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
                        <span>
                            <h4 className="center"> {care.name} </h4>
                            <p ref={'care' + index}> </p>
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

