import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Components/About'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Home from './Components/Home'
import News from './Components/News'
import Trends from './Components/Trends'
import Culture from './Components/Culture'








const Routes = 
<div>
    <Switch>
        <Route path='/'  exact component={Home} />
        
        <Route path='/about' component={ About } />
        <Route path='/contact' component={ Contact } />
        <Route path='/blog' component={ Blog } />
        <Route path='/news' component={ News } />
        <Route path='/trends' component={ Trends } />
        <Route path='/culture' component={ Culture } />
        
        
        
       
        
    </Switch>
</div>


export default Routes;