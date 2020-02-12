import React, { Component } from 'react';
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {
    state = { 
        selected: null
    }

    render() {
        const imageData = this.props.images;
        const filteredData = imageData.filter(horned => {
            if(!this.state.selected ) return true;
                return horned.keyword === this.state.selected || horned.horns === Number(this.state.selected);
        })
        const imageComponents = filteredData.map(image => <ImageItem horned={image} />)
           
        const handleChange = e => {
            this.setState({selected: e.target.value})
        }

        return (
            <div id="list-main">
                <div id="list-top">
                    <select onChange={handleChange}>
                        {this.props.images.map(image => <option>{image.keyword}</option>)}
                    </select>
                    <select onChange={handleChange}>
                        {this.props.images.map(image => <option>{image.horns}</option>)}
                    </select>
                </div>
                <div id="image-list">
                    <ul>
                        {imageComponents}
                    </ul>
                </div>
            </div>
        );
    }
}