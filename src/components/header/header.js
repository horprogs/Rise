import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {toggleLeftNav} from '../../actions/navigation';


const LeftIcon = ({ leftNavOpen, onToggleLeftNav }) => (
    <IconButton onTouchTap={onToggleLeftNav}>{leftNavOpen ? <NavigationClose /> : <Menu />}</IconButton>
);

const Header = ({onToggleLeftNav, leftNavOpen}) => (
    <AppBar
        title="Rise"
        className="header"
        iconElementLeft={<LeftIcon leftNavOpen={leftNavOpen} onToggleLeftNav={onToggleLeftNav} />}
    />
)

const HeaderContainer = connect(
    state => Object.assign({}, {leftNavOpen: state.leftNavOpen}),
    dispatch => ({
        onToggleLeftNav: () => dispatch(toggleLeftNav())
    })
)(Header);

export default HeaderContainer;