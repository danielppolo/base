import React, { Component } from 'react';
import style from './App.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Typed from './components/UI/Typed/Typed';
import CodeOfConduct from './components/Views/CodeOfConduct/CodeOfConduct';

class App extends Component {

  state = {
    accessPath: null
  }

  componentWillMount(){
    console.log(window.location.pathname);
    this.setState( { accessPath: window.location.pathname } );
  }

  render() {
    const redirection = (this.state.accessPath && this.state.accessPath !== '/' && window.location.pathname !== this.state.accessPath) ? 
      <Redirect to={this.state.accessPath}/> : null;
    const welcome = <Typed>
        <p>For those who gave us darkness.</p>
        <p>19.406783, -99.178750</p>
        <p>05/04/2019</p>
        <p>B A S E</p>
        <p></p>
      </Typed>;
    return (
      <div className={style.App}>
          { redirection }
          <Switch>
            <Route path='/codeofconduct' component={CodeOfConduct}/>
            <Route path='/' render={()=> welcome}/>
          </Switch>
          
      </div>
    );
  }
}

export default App;
