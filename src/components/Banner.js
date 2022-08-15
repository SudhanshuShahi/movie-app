import { movies } from './getMovies';
import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        let movie = movies.results[0]
        let movie1 = movies.results[1]

      return (
        <>
        {  
            movie == ''?
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> : 
              <div className="card banner-card">
               <img src={`https://image.tmdb.org/t/p/original${movie1.backdrop_path}`}   alt={movie1.title} className="card-img-top banner-img"/>
               
                    <h1 className="card-title banner-title">{movie1.original_title}</h1>
                    <p class="card-text banner-text">{movie1.overview}</p>
                 
             </div>

        }
        
        </>
     
    )
  }
}
