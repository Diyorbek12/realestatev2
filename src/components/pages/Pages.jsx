import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import About from '../about/About';
import Footer from '../container/footer/Footer';
import Services from '../home/services/Services';
import Blog from '../home/blog/Blog';
import Pricing from '../home/pricing/Pricing';
import Contact from '../home/contact/Contact';

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages