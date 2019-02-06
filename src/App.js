import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import { async } from 'q';



class App extends Component {

  state = {   
    
  }


  componentWillMount(){
    console.log('willmount')
  }
  
  componentDidMount(){
    this._getMovie();
    // setTimeout( () => {
    //   this.setState({
    //     movies  : [
    //       {
    //         title:"극한직업",
    //         poster :  "https://blogfiles.pstatic.net/MjAxOTAxMjJfMjgw/MDAxNTQ4MTE1MzY3MTc2.NWp5w1q7f3xN30YUV9rYtUqwq_zzjFdG6p-bHX4VSF0g.KOZCAuCFzneC5aN-pdtDyEVhu7cCieNLwVReE6OwQ2wg.JPEG.ssk7989/NaverBlog_20190122_090246_00.jpg",
        
    //       },
    //       {
    //         title:"말모이",
    //         poster :    "https://pds.joins.com/news/component/htmlphoto_mmdata/201811/27/htm_2018112772324365087.jpg",
    //       },
        
    //       {
    //         title : "변호인",
    //         poster :      "http://imgnews.naver.net/image/022/2013/12/23/20131223020394_0_59_20131223150906.jpg",
        
    //       },
    //       {
    //         title : "써니",
    //         poster :      "http://blogfiles.naver.net/20110509_168/serenitatis_13049086331115LJcz_JPEG/76016_P11_175820.jpg"
        
    //       },
    //       {
    //         title : "나는 전설이다",
    //         poster : "https://postfiles.pstatic.net/20141128_276/gip2120_1417159857502G45KL_PNG/capture-20141128-161702.png?type=w2"
    //       }
    //     ]
    //   })
    // }, 1000)
  }

   _getMovie = async () =>  {
    const movies  = await this._callApi();
    console.log({movies})
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(error => console(error))
  }

  _renderMovie = () => {
    const movies = this.state.movies.map( (movie , index )=> {
      return <Movie title={movie.title} 
        poster={movie.medium_cover_image} 
        key={index} 
        genres={movie.genres}
        synopsis = {movie.synopsis}
        />
    })
    return movies
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : 'Loading'}
        
      </div>
    );
  }
}

export default App;
