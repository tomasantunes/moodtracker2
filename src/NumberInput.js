import React from 'react';

class NumberInput extends React.Component {

    state = {
        name: this.props.name,
        id: this.props.id,
        value: this.props.value || ""
    };

    onChange(event) {
        const value = event.target.value;
        this.setState({value});
        localStorage.setItem(this.state.id, value);
    }
    
    render() {
        return (
            <div className="control">
                <label htmlFor={this.state.id}>{this.state.name}:</label>
                <input type="number" id={this.state.id} value={this.state.value} onChange={(event) => { this.onChange(event); }} />
            </div>
        );
    }
};

export default NumberInput;