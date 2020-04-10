import React, { Component } from 'react';

class Ex3Child extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                this.props.callbackFromParent(this.state.count)
            }
        );
        // }, () => console.log(this.state.count));
    }

    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
            </div>
        );
    }
}

export default Ex3Child;