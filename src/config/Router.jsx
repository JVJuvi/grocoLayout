import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../pages/Home'
import Shop from '../pages/Shop';
import About from '../pages/About';
import Review from '../pages/Review';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Router = () => {
    return (
        <Switch>    
            <Route path='/' exact component={Home} />
            <Route path='/shop' exact component={Shop} />
            <Route path='/about' exact component={About} />
            <Route path='/review' exact component={Review} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/contact' exact component={Contact} />
        </Switch>
    )
}

export default Router
