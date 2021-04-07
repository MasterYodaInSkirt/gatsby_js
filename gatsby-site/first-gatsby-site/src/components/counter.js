import React from "react"

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }
    render() {
        return <div style={{ color: 'blue' }}>
            <h1>Counter</h1>
            <p>current counter: {this.state.count}</p>
            //plus button
            <button onClick={() => this.setState({ count: this.state.count + 1 })} style={{ color: 'tomato' }}>PLUS</button>
            //minus button
            <button onClick={() => this.setState({ count: this.state.count - 1 })} style={{ color: 'tomato' }}>MINUS</button>
            <br></br>
            <br></br>
            <br></br>
        </div>
    }
}

export default Counter

