// @flow
import React, {Component} from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';

class Search extends Component{
    state={
      searchTerm: ""
    };
    // props: {
    //   shows: [
    //     { 
    //       title: '',
    //       description: '',
    //       year: '',
    //       imdbID: '',
    //       trailer: '',
    //       poster: ''
    //     }
    //   ]
    // }
  
  handleChange = (event: SyntheticKeyboardEvent & {target: HTMLInputElement}) => {
    this.setState({searchTerm: event.target.value})
  }


  render(){
    return(<div className="search">
     <header>
      <h1>TV catalog</h1>
      <input 
        onChange={this.handleChange} 
        value={this.state.searchTerm} 
        type="text" 
        placeholder="search"
      />
    </header> 
    <div>
      {preload.shows
      .filter(show => 
        `${show.title} ${show.description}`.toUpperCase().indexOf(
          this.state.searchTerm.toUpperCase()) >= 0
      )
      .map( show => <ShowCard key={show.imdbID} {...show}/> )}
    </div>
  </div>)
  }
};

export default Search;