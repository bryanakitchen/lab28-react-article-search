export const getTopArticles = () => {
  // eslint-disable-next-line max-len
  return fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => json.articles);
};
