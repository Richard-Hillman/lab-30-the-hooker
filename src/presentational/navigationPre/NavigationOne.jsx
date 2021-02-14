import React, { Component } from 'react';
import styles from './NavigationOne.css';

// This page will have the navigation 
export default class NavigationOne extends Component {

  render() {
    return (
      <div className={styles.NavigationOne}>

        <div className="stab1">
          <h1>Somewhere out there I was once a looker</h1>
          {/* THis will be top navigation */}
        </div>

      </div>
    );
  }
}
