import React, { Component } from 'react';
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {
    render() {
        return (
            <div id="list-main">
                <div id="list-top">
                    <select>One</select>
                    <select>Two</select>
                    <p></p>
                </div>
                <div id="image-list">
                    <ul>
                        {this.props.images.map(horned => <ImageItem horned={horned} />)}
                    </ul>
                </div>
            </div>
        );
    }
}