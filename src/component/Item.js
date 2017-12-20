import React, { Component } from 'react';
import './../styles/Item.css';

class Item extends Component {
    render() {
        return (
            <div className={this.props.data.hidden ? 'c-item c-item__hidden' : 'c-item'}>
                <div className="c-item--title">{this.props.data.title}</div>
                <div className="c-item--url"><a href={this.props.data.url} target="_blank">{this.props.data.url}</a></div>
                <div className="c-item--images">
                    {this.props.data.images.map(item => <img key={item} src={item} alt="" width="100"/>)}
                </div>
            </div>
        );
    }
}

export default Item;
