import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import './SideNav.css';
import avi from './avi-circle.png';

class SideNav extends Component {
  render() {
    const styles = {
      tabLink: {
        height: 50,
      },
      tabLabel: {
        fontSize: 28,
        color: 'white',
        textTransform: 'none',
      }
    };
    return (
      <div>

      <Paper
        zDepth={1}
        className="sidenav"
        children= {
          <div className="content-wrapper">

          <center>
            <div className="relative-avi-wrapper">
                <Paper className="avi-border" circle/>
                <img src={avi} className="avatar" alt="avatar"/>
            </div>
          </center>

          <div className="relative-nav-wrapper">

              <center>
                <div>
                  <p className="initial">J<span className="name">oseph</span></p>
                </div>
                <div>
                  <p className="initial">S<span className="name">krzysowski</span></p>
                </div>
              </center>

              <br/>
              <Divider/>

                <div>
                  <FlatButton
                    style={styles.tabLink}
                    label="Bio"
                    labelStyle={styles.tabLabel}
                    disableTouchRipple
                    fullWidth/>
                </div>
                <div>
                  <FlatButton
                    style={styles.tabLink}
                    label="Social"
                    labelStyle={styles.tabLabel}
                    disableTouchRipple
                    fullWidth/>
                </div>
                <div>
                  <FlatButton
                    style={styles.tabLink}
                    label="Projects"
                    labelStyle={styles.tabLabel}
                    disableTouchRipple
                    fullWidth/>
                </div>

              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default SideNav;
