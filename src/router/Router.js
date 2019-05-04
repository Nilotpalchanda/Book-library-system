import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import allBook from '../components/Pages/allBook'
import addBook from '../components/Pages/addBook'
class router extends Component {
    render(){
        return(
            <Router>
                    <Switch>
                        <Route exact path="/" component={allBook} />
                        <Route exact path="/addbook" component={addBook} />
                    </Switch>
            </Router>
        )
    }
}

export default router