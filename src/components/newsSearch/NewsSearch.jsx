import React, { Component } from 'react';
import ArticleList from '../articleList/ArticleList';
import Search from '../search/Search';

export default class NewsSearch extends Component {
    state = {
      article: ''
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
