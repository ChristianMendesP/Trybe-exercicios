import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import NoMatch from './components/NoMatch';

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <br />
      <Link to="/projects">Projetos</Link>
      <br />
      <Link to="/contacts">Contatos</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
