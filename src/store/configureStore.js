import { combineReducers, createStore, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
//import skills from '../reducers/skills';
import * as reducers from '../reducers';


const rootReducer = combineReducers({
    ...reducers,
    form: formReducer,
    routing: routerReducer
});

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger, routerMiddleware(browserHistory)));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}