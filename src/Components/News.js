import React, { Component } from "react";
import axios from "axios";
import "./news.css";

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("f1fbedfe5cdf4a0486e885999e3f9c27");

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };

    this.getNews = this.getNews.bind(this);
  }

  getNews() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?q=marijuana&apiKey=f1fbedfe5cdf4a0486e885999e3f9c27"
      )
      .then(response => {
        console.log("response-----------------", response.data.results);
        this.setState({ news: response.data.articles });
      });
  }
  componentDidMount() {
    this.getNews();
  }
  render() {
    const people = this.state;
    const googleNews = this.state.news.map(el => {
      return (
        <div className="section-a">
          <h3>{el.description}</h3>
          <a href={el.url} target="_blank"><img className="news-image" src={el.urlToImage} /></a>
        </div>
      );
    });
    return (
      <div className="main">
        
       
        <div className="section-a-wrapper">
        <div className="banner">
            <h1 className="banner-content1">Todays</h1>
            <h1 className="banner-content2">Top</h1>
            <h1 className="banner-content3">News</h1>
          </div>
          
          {googleNews}
          {console.log("news-------------------------", googleNews)}
        </div>
      </div>
    );
  }
}
export default News;
