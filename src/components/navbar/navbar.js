import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { CSSTransition } from 'react-transition-group';
import './navbar.scss';
import logo from '../../img/nib-logo-new.png';

class NavBar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        open: false,
        }
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    close = () => {
        this.setState({
            open: false
        });
    }

    render() {
        return (
            <div className="nav">
                <div className="navbar">
                    <div className="container" >
                        <ul>
                            <li>
                                <Link to="/" className="logo">
                                    <img src={logo} alt="NIB logo"/>
                                </Link>
                            </li>
                            <div className="right">
                                <li><NavLink to={'/'} className="tab">HOME</NavLink></li>
                                <li><NavLink to={'/about'} className="tab">ABOUT</NavLink></li>
                                <li><NavLink to={'/members'} className="tab">MEMBERS</NavLink></li>
                                <li><NavLink to={'/projects'} className="tab">PROJECTS</NavLink></li>
                                <li><NavLink to={'/impact'} className="tab">IMPACT</NavLink></li>
                                <li><NavLink to={'/apply'} className="tab applyTab">APPLY</NavLink></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mobileNav">
                <div className="burgerIcon">
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick}
                        width={18}
                        height={15}
                        strokeWidth={3}
                        color='black'
                        className='burgerIcon'
                    /> 
                    <CSSTransition
                        in={this.state.open}
                        classNames="display"
                        timeout={500}
                        unmountOnExit
                    >
                        <ul className="mobileList">
                            <li><Link to={'/'} className="tab" onClick={this.close}>HOME</Link></li>
                            <li><Link to={'/about'} className="tab" onClick={this.close}>ABOUT</Link></li>
                            <li><Link to={'/members'} className="tab" onClick={this.close}>MEMBERS</Link></li>
                            <li><Link to={'/projects'} className="tab" onClick={this.close}>PROJECTS</Link></li>
                            <li><Link to={'/apply'} className="tab" onClick={this.close}>APPLY</Link></li>
                        </ul>
                    </CSSTransition>
                </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
