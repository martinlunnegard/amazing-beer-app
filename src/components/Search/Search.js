import React, { Component } from 'react'
import styles from './Search.module.css'

class Search extends Component {
  myInput = React.createRef(); 

  handleSubmit = (e) => {
    e.preventDefault(); 
    const searchTerm = this.myInput.current.value; 
    this.props.performSearch(searchTerm); 
    e.currentTarget.reset(); 
  }

    render() {
      return (
			<div className={styles.container}>
				<h1 className={styles.header}>The Amazing Beer App</h1>
				<form className="beer-search-form" onSubmit={this.handleSubmit}> 
						<input 
							type="text" 
							className="search-input" 
							ref={this.myInput}
						/>
						<button type="submit" className="submit-btn">
							Find my beer
						</button>
				</form>
			 </div>
      );
  
    }
   
  }
  
  export default Search;
  