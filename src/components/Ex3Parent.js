import React, {Component} from 'react';
import Ex3Child from './Ex3Child';

class Ex3Parent extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.increment();
    }

    myCallback = (dataFromChild) => {
        console.log(dataFromChild);
    }

    render() {
        return(
            <div>
                <Ex3Child ref={this.componentRef}  callbackFromParent={this.myCallback} />
                <button onClick={this.clickHandler}>Click here</button>
            </div>
        );
    }
}

export default Ex3Parent;