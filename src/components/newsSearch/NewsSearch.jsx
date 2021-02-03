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
          <div>
            <input type="text" value={article} onChange={this.handleChange} />
            <p>You searched for: {article}</p>
          </div>
          <Search />
          <ArticleList />
        </>
      );
    }
}
