import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/header/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNavContainter from './navigation/navigation.jsx';

import styles from './app.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


const App = ({leftNavOpen, children}) => {
    return (

        <MuiThemeProvider>
            <div>
                <Header />
                <main className={cx({
                    container: true,
                    'container--with-left-nav': leftNavOpen,
                })}>
                    {children}
                </main>
                <LeftNavContainter />
            </div>
        </MuiThemeProvider>
    )
}

const AppContainer = connect(state => ({leftNavOpen: state.navigation.leftNavOpen}))(App);

export default AppContainer;