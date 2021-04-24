import React from 'react';
import "./Form.css"

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <div className="center-block">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={() => {this.props.handleSubmit(this.state.value); this.setState({value: ''})}}></button>
            </div>
        );
    }
}
