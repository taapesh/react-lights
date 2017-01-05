import React, { Component } from 'react';
import Row from './Row';

export default class Grid extends Component {
	static propTypes = {
		size: React.PropTypes.number.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			size: props.size
		};
	}

	style = () => ({
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	})

	generateRows = (size) => {
		var rows = [];
		for (var i = 0; i < size; ++i) {
			rows.push(<Row numElements={size} key={i} />);
		}
		return rows;
	}

	render() {
		return (
			<div style={this.style()}>
				{this.generateRows(this.state.size)}
			</div>
		)
	}
}
