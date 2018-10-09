import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className="header-text">Vote Tracker</h1>
            </header>
        )
    }
}