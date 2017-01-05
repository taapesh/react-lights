import React, { Component } from 'react';
import Light from './Light';

export default class Row extends Component {
  static propTypes = {
    numElements: React.PropTypes.number.isRequired
  }

	style = () => ({
		flex: 1,
		display: 'flex',
	})

	allOfTheLights = (size) => {
		var lights = [];
		for (var i = 0; i < size; ++i) {
			lights.push(<Light key={i} />)
		}
		return lights;
	}

	render() {
		return (
    	<div style={this.style()}>
    		{this.allOfTheLights(this.props.numElements)}
  		</div>
  	)
	}
}
