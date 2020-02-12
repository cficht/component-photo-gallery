import React, { Component } from 'react';


export default class ImageItem extends Component {
    render() {
        return (
                <li className="list-item">
                    <h2>{this.props.horned.title}</h2>
                    <img src={this.props.horned.url} alt=""></img>
                    <p>{this.props.horned.description}</p>
                    <h5>Keyword: {this.props.horned.keyword}</h5>
                    <h5>Horns: {this.props.horned.horns}</h5>
                </li>
        );
    }
}