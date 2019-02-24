import React, { Component, Suspense } from 'react';
//import News from './Components/news';
import Add from './Components/add';
import Articles from './Components/articles';
import './App.css';
const News = React.lazy(() => import('./Components/news'));

export default class App extends Component {

  state = {
    news : null,
  }

  addNews = (data)=>{
    const newData = [data, ...this.state.news];
      this.setState({
        news: newData,
      })
  }

  componentDidMount(){
    fetch('http://localhost:3000/data/newsData.json')
      .then(res=>res.json())
      .then(json=> {
        this.setState({
          news: [...json]
        })
      });
  }

  render(){

    const {news} = this.state;

    return (
             <React.Fragment>
               <Add add={this.addNews}/>
               <h3>Новости</h3>
               <Suspense fallback={<div>Loading...</div>}>
                   {Array.isArray(news) && <News data={news} />}
               </Suspense>
             </React.Fragment>
            )
  }


}


