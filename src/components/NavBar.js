import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './css/NavBar.css';
import PageModal from './PageModal';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div >
        <Nav pills className='root-navbar'>
          <NavItem>
            <NavLink href="/tutorials" className='nav-buttons'>Tutorials</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/linuxfaq" className='nav-buttons'>Linux FAQs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className='nav-buttons'>Ask aloud</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://www.github.com/tmtanzeel" className='nav-buttons'>GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className='nav-buttons'><PageModal/></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavBar;
