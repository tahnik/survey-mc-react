import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import Header from './components/header';
import Intro from './containers/intro';
import Page1 from './containers/page1';
import Page2 from './containers/page2';
import Page3 from './containers/page3';
import Page4 from './containers/page4';
import Page5 from './containers/page5';
import Page6 from './containers/page6';
import Page7 from './containers/page7';
import Page8 from './containers/page8';
import Page9 from './containers/page9';
import Page10 from './containers/page10';
import Page11 from './containers/page11';
import Page12 from './containers/page12';
import Page13 from './containers/page13';

export default (
    <Router history={ browserHistory } >
        <Route path="/" component={Header}>
            <IndexRoute component={Intro} />
            <Route path="/page1" component={Page1} />
            <Route path="/Page2" component={Page2} />
            <Route path="/Page3" component={Page3} />
            <Route path="/Page4" component={Page4} />
            <Route path="/Page5" component={Page5} />
            <Route path="/Page6" component={Page6} />
            <Route path="/Page7" component={Page7} />
            <Route path="/Page8" component={Page8} />
            <Route path="/Page9" component={Page9} />
            <Route path="/Page10" component={Page10} />
            <Route path="/Page11" component={Page11} />
            <Route path="/Page12" component={Page12} />
            <Route path="/Page13" component={Page13} />
        </Route>
    </Router>
)
