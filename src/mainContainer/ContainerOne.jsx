/* eslint-disable max-len */
import React from 'react';
import NavigationOne from '../presentational/NavigationOne';
import ComponentOne from '../presentational/ComponentOne';
// this is where all of my state and functions will be kept 
export default class ContainerOne extends React.Component {
  
  state= {


  // --------------------------------------------------

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetch();
  }

  // --------------------------------------------------

//   fetch = () => {
//     const { method, url, json } = this.state;
//     Fetch(method, url, json)
//       .then(res => this.setSTate({ krestyReceipts: JSON.stringify(res) }));
//   }

  // --------------------------------------------------

  render() {
    const {} = this.state;

    return (

      <>
        
        <header>
          <NavigationOne />
        </header>
        
        <div>
          <ComponentOne />
        </div>
      
      </>

    );
  }
}   
