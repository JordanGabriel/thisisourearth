import React, { Component } from 'react';

class Items extends Component {
	render() {
		var self = this;
		var input = document.getElementById('addField');
		return (
		  <ul>{this.props.itemNames.map(function(item, i) {
		  return (
		  	<li key={i}>
	      	<a href={'/' + item.toLowerCase()}>
	      		{(!self.props.newItem) ? item : self.props.itemNames.push(input.value)}
	      	</a>
	      </li>)
	    }) }</ul>
	    )
	}
}

export default Items