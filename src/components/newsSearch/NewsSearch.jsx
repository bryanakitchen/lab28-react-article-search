import React, { Component } from 'react';
import ArticleList from '../articleList/ArticleList';
import Search from '../search/Search';

export default class testing extends Component {
  render() {
    return (
      <>
        <div>
              Hello from the NewsSearch component.
        </div>
        <Search />
        <ArticleList />
      </>
    );
  }
}
