import React from 'react';
import NavItem from "./nav";

const navItems = [
    {
        content: "Home",
        link: "/",
        id:1
    },
    {
        content: "About us",
        link: "/#about",
        id:2
    },
    {
        content: "Contact us",
        link: "/#contact",
        id:3
    },
    {
        content: "Help page",
        link: "/#help",
        id:4
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
                    {navItems.map(({content, link, id}) => {
                        return <NavItem key={id} link={link} content={content}/>
                    })}
                </ul>
            </nav>
        </div>
    </header>
};

export default Header;
