import React, {Component} from 'react'
import axios from 'axios'
import './news.css'

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f1fbedfe5cdf4a0486e885999e3f9c27');

class News extends Component{
    constructor(props){
        super(props)


        this.state={
            news:[]
        }

        this.getNews = this.getNews.bind(this)
    }
   
     getNews(){
        axios.get("https://newsapi.org/v2/everything?q=cannabis&apiKey=f1fbedfe5cdf4a0486e885999e3f9c27")
        .then((response) => {
          console.log(response.data.results)
          this.setState ({news: response.data.articles})
        })
       

      }
      componentDidMount(){
          this.getNews()
      }
    render(){
       const people = this.state
       const googleNews = this.state.news.map( el => {
            return(
                <div className='news-wrapper'>
                <div>Title: {el.title}
                    <img className='news-image'src={el.urlToImage}></img>
                </div>
                </div>
                
            )
        })
        return(
            <div>
               {googleNews}
             {console.log('news-------------------------', googleNews)}
            </div>
           
        )
    }
}
export default News