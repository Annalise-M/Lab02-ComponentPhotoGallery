import React, { Component } from "react";

export default class ImageItem extends Component {
    render() {
        return (
            
                <li>
                    <div className="image-container">
                        <h2>{this.props.creature.title}Creature Name</h2>
                        <p className="horns">Horn Amount = {this.props.creature.horns}</p>
                    </div>

                    <div className="info-container">
                        <img
                            alt={this.props.creature.url}
                            src={this.props.creature.url}>
                        </img>
                    </div>
                    <p className="creature-description">{this.props.creature.description}</p>
                    <p className="creature-keyword">{this.props.creature.keyword}</p>
                    <p className="creature-horns">{this.props.creature.description}</p>
                </li>
        )
    }
}