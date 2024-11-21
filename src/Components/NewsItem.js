import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props; //destructuring
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://assets-prd.ignimgs.com/2024/06/03/eldenring-shadow-fp-blogroll-1717445459923.jpg?width=1280":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target = "_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read</a>
            </div>
        </div>
      </div>
    )
  }
}
