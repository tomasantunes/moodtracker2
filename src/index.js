import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Slider from './Slider';
import NumberInput from './NumberInput';
import './style.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "happiness": 0,
            "sadness": 0,
            "hunger": 0,
            "energy": 0,
            "stress": 0,
            "alcohol": 0,
            "self-image": 0,
            "exercise": 0,
            "talking": 0,
            "project-progress": 0,
            "meditation": 0,
            "computer-time": 0,
        }

        for (const key in this.state) {
            this.state[key] = localStorage.getItem(key);
        }
    }
    
    render() {
        return (
            <div>
                <Menu activePage="Sliders" />
                <div className="ui container">
                    <Slider name="Happiness" id="happiness" value={this.state["happiness"]} />
                    <Slider name="Sadness" id="sadness" value={this.state["sadness"]}/>
                    <Slider name="Hunger" id="hunger" value={this.state["hunger"]} />
                    <Slider name="Energy" id="energy" value={this.state["energy"]} />
                    <Slider name="Stress" id="stress" value={this.state["stress"]} />
                    <Slider name="Alcohol" id="alcohol" value={this.state["alcohol"]} />
                    <Slider name="Self-image" id="self-image" value={this.state["self-image"]} />
                    <Slider name="Exercise" id="exercise" value={this.state["exercise"]} />
                    <Slider name="Talking" id="talking" value={this.state["talking"]} />
                    <Slider name="Project Progress" id="project-progress" value={this.state["project-progress"]} />
                    <NumberInput name="Meditation" id="meditation" value={this.state["meditaion"]} />
                    <NumberInput name="Computer Time" id="computer-time" value={this.state["computer-time"]} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));