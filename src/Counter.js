import React, { Component } from "react";
import "./Counter.css"; // Import CSS for styling

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

    render() {
        return (
            <div className="counter-container">
                <h2>Counter App</h2>
                <p>Count: {this.state.count}</p> {/* ✅ Displays count in the required format */}
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default Counter;
