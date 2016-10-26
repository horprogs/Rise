import * as React from 'react';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import Help from 'material-ui/svg-icons/action/help';

const LeftNavigation = ({ leftNavOpen, dispatch }) => (
    <Drawer open={leftNavOpen} containerClassName="nav">
        <MenuItem leftIcon={<ActionHome />} primaryText="Главная" onTouchTap={() => dispatch(push('/'))}/>
        <MenuItem leftIcon={<Help />} primaryText="Статьи" onTouchTap={() => dispatch(push('/docs'))}/>
    </Drawer>
);

const LeftNavContainter = connect(state => ({leftNavOpen: state.navigation.leftNavOpen}))(LeftNavigation);

export default LeftNavContainter;