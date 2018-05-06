import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import SideNav from './components/SideNav/SideNav';

class App extends Component {
  render() {
    return (
      <div className="content">
        <MuiThemeProvider>
	  <div className="row">
            <div className="col-md-3">
              <SideNav/>
            </div>
          <div className="col-md-9">
              this is where the main content will go
          </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
