// @flow

import React, { Component } from 'react';
import axios from 'axios'; // an ajax client. also try using the fetch api
import Header from './Header'
import Spinner from "./Spinner"

class Details extends Component {
  state = {
    apiData: { rating: ''}
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.show.imdbID}`) // api server needs to be running `npm run api`
      .then((response: { data: { rating: string}}) => {
        this.setState({apiData: response.data})
      })
  }
  props: {
    show: Show
  }
  render() {
  const { title, description, year, poster, trailer} = this.props.show; // es6 destructing
  let ratingComponent;
  if (this.state.apiData.rating){
    ratingComponent = <h3>Rating: {this.state.apiData.rating}</h3>
  } else {
    ratingComponent = <Spinner />
  }
  return (
    <div className="details">
      <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Posters for ${title}`}/>
          <p>{description}</p>
        </section>
        <div>
          <iframe 
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
            />
        </div>   
    </div>
  )
  }
}

export default Details;
