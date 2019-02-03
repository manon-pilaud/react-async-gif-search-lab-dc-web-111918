import React from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

export default class GifListContainer extends React.Component{

  constructor(){
    super()
    this.state={
      gifs: []
    }
  }

  fetchGif=(searchTerm)=>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res=>res.json())
    .then(data=> {
       this.setState({
         gifs: data.data
     })
     })
  }



  render(){
    return(
    <div>
    <GifSearch fetchGif={this.fetchGif}/>
    {this.state.gifs.map((gif,index)=>
      <GifList key={index} gifInfo={gif}/>
  )}
    </div>
    )
  }
}
