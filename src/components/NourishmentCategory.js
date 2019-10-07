import React from 'react'

const NourishmentCategory = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Hello Bunnies!</a>
                <ul className="right">
                    <li><a href="/nourishment">Nourishment</a> </li>
                    <li><a href="/seedAndCereal">Seed And Cereal</a> </li>
                    <li><a href="/otherNourishment">Other Nourishment</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default NourishmentCategory