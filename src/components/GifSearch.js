import React from 'react'

export default class GifSearch extends React.Component{
  constructor(){
    super()
    this.state={
      searchTerm: ""
    }
  }

  setSearch=(e)=>{
    this.setState({
      searchTerm: e.target.value
  })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.fetchGif(this.state.searchTerm)
  }

  render(){
    return(
    <form onSubmit ={this.handleSubmit}>
    <input type="text" onChange={this.setSearch}/>
    </form>
    )
  }
}
