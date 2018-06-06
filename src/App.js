import React, { Component } from 'react';
import './App.css';
import Loadable from 'react-loadable';
import Loading from './components/Loading/Loading';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    const LoadableAnotherComponent = Loadable({
      loader: () => import('./components/HomeComponent/HomeComponent'),
      loading: Loading
    });
    
    return (
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
        <p className="App-intro">
          <LoadableAnotherComponent />
        </p>
      </div>
    );
  }
}

export default App;
