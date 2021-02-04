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
    <ul>
      {articleList}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
  
export default ArticleList;
