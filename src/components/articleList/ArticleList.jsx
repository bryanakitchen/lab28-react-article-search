import React from 'react';
import Article from '../article/Article';
import PropTypes from 'prop-types';

const ArticleList = ({ articles }) => {
  const articleList = articles.map(article => (
    <li key={article.url}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul data-testid="articles">
      {articleList}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired
};
  
export default ArticleList;
