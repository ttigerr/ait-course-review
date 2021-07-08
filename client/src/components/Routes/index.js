import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Home from '../../pages/Home'
import Profil from '../../pages/Profil'
import Course from '../../pages/Course'
import News from '../../pages/News'
import AboutUs from '../../pages/AboutUs'
import Contact from '../../pages/Contact'
import Header from '../Header'
import Search from '../../pages/Search'

const index = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profil' exact component={Profil} />
        <Route path='/course' exact component={Course} />
        <Route path='/news' exact component={News} />
        <Route path='/aboutUs' exact component={AboutUs} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/search' exact component={Search} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default index
