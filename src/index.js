import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/App';
import Docs from './containers/docs/Docs';
import Skills from './containers/skills/Skills';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
injectTapEventPlugin();

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Skills}/>
                <Route path="docs" component={Docs}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)