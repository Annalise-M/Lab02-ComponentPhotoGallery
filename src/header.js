import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return <header>
            <section>
                { this.props.name
                    && <h1>Info for {this.props.name}</h1> }
            </section>
            <nav>
                <a href="./">Home</a>
                <p/>
                <a href="info.html">Info</a>
            </nav>
        </header>
    }
}