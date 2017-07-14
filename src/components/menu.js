import React, { Component } from 'react';
import Burger from './burger';
import Items from './items';

var newItem;
class Menu extends Component {
  constructor(props) {
      super(props);
      this.state = {
         isToggleOn: true,
         isEditing: false,
         defaultValue: 'example'
      };
      this.toggleMenu = this.toggleMenu.bind(this);
      this.handleFocus = this.handleFocus.bind(this);
      this.edit = this.edit.bind(this);
      this.add = this.add.bind(this);
  }
  toggleMenu() {
     this.setState({
       isToggleOn: !this.state.isToggleOn
     })
  }
  handleFocus(event) {
      event.target.select();
    }
  edit() {
    this.setState({
       isEditing: !this.state.isEditing
     })
  }
  add() {
    var input = document.getElementById('addField').value;
    newItem = input;
    this.setState({
       isEditing: !this.state.isEditing
     })
  }
  render() {
    var toggleClass;

    (this.state.isToggleOn) ? toggleClass = 'on'
                            : toggleClass = 'off';

    var editingClass;
    (this.state.isEditing) ? editingClass = 'editing' : editingClass = '';

    return (<div className="wrap">
              <Burger onClick={this.toggleMenu} className={toggleClass} />
              <nav id="menu" className={toggleClass}>
                  <Items itemNames={['hello']} newItem={newItem} />
              </nav>
            </div>);

  }
}

export default Menu;
