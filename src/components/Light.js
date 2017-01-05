import React, { Component } from 'react';

export default class Light extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.tick()
  }

  style = () => ({
    flex: 1,
    background: this.state.color,
    transition: 'background .5s'
  })

  color = () => '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)

  interval = (min, max) => {
    var _min = Math.ceil(min);
    var _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1)) + _min;
  }

  tick() {
    this.setState({
      color: this.color(),
      interval: this.interval(100, 1500)
    });

    setTimeout(() => this.tick(), this.state.interval);
  }

  render() {
    return <div style={this.style()} />
  }	 
}
