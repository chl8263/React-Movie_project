import React, { Component } from 'react';
import './Movie.css';
import propTypes from 'prop-types';

// class Movie extends Component{

//     static propTypes = {
//         title : propTypes.string.isRequired,
//         poster : propTypes.string.isRequired
//     }

//     render(){
        
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

function Movie ({title , poster,genres, synopsis}){
    return (
        <div className="Movie">
            <div className = "Movie_Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className = "Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genre">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
            </div>
            <p className="Movie_Synopsis">
                {synopsis}
            </p>
        </div>
    ) 
}

// class MoviePoster extends Component{

//     static propTypes = {
//         poster : propTypes.string.isRequired
//     }


//     render(){
//         return (
//             <img src = {this.props.poster}/>
//         )
//     }
// }

function MoviePoster({poster,alt}){
    return (
        <img src = {poster} alt="Movie Poster" title={alt} className="Movie_Poster"/>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    generes : propTypes.string.isRequired,
    sysnopsis : propTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : propTypes.string.isRequired,
    alt : propTypes.string.isRequired
}
MovieGenre.propTypes = {
    generes : propTypes.string.isRequired
}

export default Movie