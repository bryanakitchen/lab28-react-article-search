import React, { Component } from 'react';
import ArticleList from '../articleList/ArticleList';
import Search from '../search/Search';

export default class NewsSearch extends Component {
    state = {
      article: ''
    }

    componentDidMount() {
      // eslint-disable-next-line max-len
      fetch(`https://newsapi.org/v2/everything?q=tesla&apiKey=${process.env.API_KEY}`)
      .then(res => res.json())
      .then(console.log)
    }

    handleChange = ({ target }) => {
      this.setState({ article: target.value });
    }
  
    render() {
      const { article } = this.state;
      return (
        <>
          <Search searchText={article} onChange={this.handleChange} />
          <ArticleList />
        </>
      );
    }
}
