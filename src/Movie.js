import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return (
            <div>
                <MoviePoster/>
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return (
            <img src ="https://blogfiles.pstatic.net/MjAxOTAxMjJfMjgw/MDAxNTQ4MTE1MzY3MTc2.NWp5w1q7f3xN30YUV9rYtUqwq_zzjFdG6p-bHX4VSF0g.KOZCAuCFzneC5aN-pdtDyEVhu7cCieNLwVReE6OwQ2wg.JPEG.ssk7989/NaverBlog_20190122_090246_00.jpg"/>
        )
    }
}

export default Movie