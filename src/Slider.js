import React from 'react';

class Slider extends React.Component {

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
                <input type="range" id={this.state.id} min="0" max="100" value={this.state.value} onChange={(event) => { this.onChange(event); }} />
            </div>
        );
    }
};

export default Slider;