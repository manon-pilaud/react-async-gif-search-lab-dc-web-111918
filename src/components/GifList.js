import React from 'react'

export default class GifList extends React.Component{
  render(props){
console.log(this.props.gifInfo)
    return(
      <ul>
    <img src={this.props.gifInfo.images.original.url}></img>
    </ul>
    )
  }
}
