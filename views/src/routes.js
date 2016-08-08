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
import Page14 from './containers/page14';
import Page15 from './containers/page15';
import Page16 from './containers/page16';
import Page17 from './containers/page17';
import Page18 from './containers/page18';
import Page19 from './containers/page19';
import Page20 from './containers/page20';
import Page21 from './containers/page21';

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
            <Route path="/Page14" component={Page14} />
            <Route path="/Page15" component={Page15} />
            <Route path="/Page16" component={Page16} />
            <Route path="/Page17" component={Page17} />
            <Route path="/Page18" component={Page18} />
            <Route path="/Page19" component={Page19} />
            <Route path="/Page20" component={Page20} />
            <Route path="/Page21" component={Page21} />

        </Route>
    </Router>
)
