import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'; 
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import About from './pages/About/About';
import Footer from './components/Footer/Footer'; 
import styles from './App.module.css'

function App(props) {
 
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <div className={styles.pageGrid}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
    )
  }

export default App;
 