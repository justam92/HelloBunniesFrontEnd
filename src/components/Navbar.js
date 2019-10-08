import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top navbar-fixed-right">
            <div id="wrapper" class="toggled">
                <div id="sidebar-wrapper">
                    <ul className="nav navbar-nav">
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
            </div>
        </nav>
    )
}

export default Navbar