import React from 'react';
import Article from '../article/Article';
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => {
  const articleList = articles.map(article => (
    <li key={article.url}>
      <Article {...articles} />
    </li>
  ));

  return (
    <ul>
      {articleList}
    </ul>
  );
};

ArticleList.prototypes = {
  articles: PropTypes.array.isRequired
};
  
export default ArticleList;
