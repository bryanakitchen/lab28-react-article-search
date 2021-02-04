import React, { Component } from 'react';
import { searchArticle } from '../../services/searchArticle';
import { getTopArticles } from '../../services/topArticles';
import ArticleList from '../articleList/ArticleList';
import Search from '../search/Search';

export default class NewsSearch extends Component {
    state = {
      searchText: '',
      articles: [],
      loading: false
    }

    componentDidMount() {
      this.setState({ loading: true });
      getTopArticles()
        .then(articles => this.setState({ articles }));
      this.setState({ loading: false });
    }

    handleChange = ({ target }) => {
      target.value.trim() && searchArticle(target.value)
        .then(articles => this.setState({ articles }));

      this.setState({ searchText: target.value });
    }
  
    render() {
      const { searchText, articles, loading } = this.state;

      return (
        <>
          <Search searchText={searchText} onChange={this.handleChange} />
          {
            !loading 
              ? <ArticleList articles={articles} /> 
              : <h3>Loading...</h3>
          }
        </>
      );
    }
}
