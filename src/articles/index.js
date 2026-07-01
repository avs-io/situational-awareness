import situationalAwareness from './situational-awareness/data.js?v=1';

export const articles = {
  [situationalAwareness.id]: situationalAwareness
};

export const defaultArticleId = situationalAwareness.id;

export function getArticle(id = defaultArticleId) {
  return articles[id] || articles[defaultArticleId];
}
