import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import recommendedSkills from '../model/recommendedSkills';
import skills from '../model/skills';
import * as reducers from '../reducers';


const rootReducer = combineReducers({
    ...reducers,
    form: formReducer,
    routing: routerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    recommendedSkills: recommendedSkills,
    skills: skills
};

export default function configureStore() {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk, logger, routerMiddleware(browserHistory))));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}