import React, { Component } from 'react'
import Counter from "./Counter";
import Summary from "./Summary";

const style = {
  margin: '20px',
};

class ControlPanel extends Component {

    render() {
        return (
            <div style={style}>
                <Counter name={'First'}/>
                <Counter name={'Second'}/>
                <Counter name={'Third'}/>
                <hr/>
                <Summary />
            </div>
        );
    }
}

export default ControlPanel;