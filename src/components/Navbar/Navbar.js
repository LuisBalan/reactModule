import React, {Component} from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){

    }

    render(){
        return(
            <div>
                <p onClick={this.handleClick}>1</p>
                <p onClick={this.handleClick}>2</p>
                <p onClick={this.handleClick}>3</p>
            </div>
        )

    }
}


