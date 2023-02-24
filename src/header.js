import React from 'react';
import NavItem from "./nav";

const navItems = [
    {
        content: "Home",
        link: "/"
    },
    {
        content: "About us",
        link: "/#about",
    },
    {
        content: "Contact us",
        link: "/#contact"
    },
    {
        content: "Help page",
        link: "/#help"
    },
]

const Header = () => {
    return <header className="header">
        <div className="container">
            <a href="" className="logo">
                My logo
            </a>
            <nav>
                <ul className="nav-list">
                    {navItems.map(({content, link}) => {
                        return <NavItem key={title} link={link} content={content}/>
                    })}
                </ul>
            </nav>
        </div>
    </header>
};

export default Header;
