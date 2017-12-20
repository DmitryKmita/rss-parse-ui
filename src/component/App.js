import React, { Component } from 'react';
import Item from './Item';
import ApiService from './../service/ApiService';
import './../styles/App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        let apiService = new ApiService();
        apiService.getItems((items) => {
            this.items = items;
            this.setState({
                items: this.items
            });
        });
        this.filter = this.filter.bind(this);
    }

    filter(event) {
        let value = event.target.value
        this.state.items.forEach(function (item) {
            if (item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                item.hidden = false;
            } else {
                item.hidden = true;
            }
        });
        this.setState(this.state);
    }

    render() {
        return (
          <div className="c-app">
            <header className="c-app--header">
              <h1 className="c-app--title">Welcome to RSS Parser</h1>
            </header>
            <div className="c-app--search">
                <input type="text" onKeyUp={this.filter} placeholder="Start typing..."/>
            </div>
            <div className="c-app--intro">
                {this.state.items.map((item, i) => <Item key = {i} data = {item} />)}
            </div>
          </div>
        );
    }
}

export default App;
