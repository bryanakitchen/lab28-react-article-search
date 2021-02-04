import React, { Component } from 'react';
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
      // eslint-disable-next-line max-len
      fetch(`https://newsapi.org/v2/everything?q=tesla&apiKey=${process.env.API_KEY}`)
        .then(res => res.json())
        .then(json => json.articles)
        // .then(articles => this.setState({ articles }))
        .then(console.log);

      this.setState({ loading: false });
    }

    handleChange = ({ target }) => {
      this.setState({ searchText: target.value });
    }
  
    render() {
      const { searchText } = this.state;
      return (
        <>
          <Search searchText={searchText} onChange={this.handleChange} />
          <ArticleList articles={articles} />
        </>
      );
    }
}
