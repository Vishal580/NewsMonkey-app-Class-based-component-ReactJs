import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
 
  static defaultProps = {
    country: 'us',
    pageSize: '6',
    category: 'sports'
  }

  static PropType = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a749e55962943d1a70387895f0533c5&page=1&pageSize=${this.props.pageSize}&`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({articles: parsedata.articles,
      totalResults:parsedata.totalResults,
      loading: false
    })
  }

  handlePrevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a749e55962943d1a70387895f0533c5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);

    this.setState({
      page: this.state.page - 1,
      articles:parsedata.articles,
      loading: false
    })
  }

  handleNextclick = async () => {
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize) )){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3a749e55962943d1a70387895f0533c5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.setState({loading: true});
      let parsedata = await data.json();
      console.log(parsedata);

      this.setState({
        page: this.state.page + 1,
        articles:parsedata.articles,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div>  
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button disabled = {this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
          <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
