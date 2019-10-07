import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Hello Bunnies!</a>
                <ul className="right">
                    <li><a href="/">Home</a> </li>
                    <li><a href="/nourishmentCategory">Nourishment Category</a> </li>
                    <li><a href="/poison">Poison</a> </li>
                    <li><a href="/care">Care</a> </li>
                    <li><a href="/diseaseCategory">Disease Category</a> </li>
                    <li><a href="/firstBunny">First Bunny</a> </li>
                    <li><a href="/firstAid">First Aid</a> </li>
                    <li><a href="/animalRight">Animal Right</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar