export const searchArticle = (searchTerm) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => json.articles);
};
