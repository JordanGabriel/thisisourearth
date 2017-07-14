import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Burger extends Component {
	render() {
		var arrowDir;
		(this.props.className === 'off') ? arrowDir = 'right' : arrowDir = 'left'
		var burgerText;
		(this.props.className === 'on') ? burgerText = 'menu' : burgerText = ''
		return (
			<div id="burger" className={this.props.className} onClick={this.props.onClick}>
				<FontAwesome
		          name='ellipsis-v'
		        />
			</div>
		)
	}
}

export default Burger