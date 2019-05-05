import React, { Component } from 'react'
import { Router, Route, Switch} from 'react-router-dom';
import allBook from '../components/Pages/allBook'

import editBook from '../components/Pages/editBook'
import history from './history'
class router extends Component {
    render(){
        return(
            <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={allBook} />
                        <Route exact path="/addbook" component={editBook} />
                        <Route exact path="/editbook" component={editBook} />
                    </Switch>
            </Router>
        )
    }
}

export default router



