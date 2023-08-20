import { db } from '../db';

export default defineEventHandler(async (e) => {
  const method = e.req.method;
  const context = e.context;
  const { id } = context.params;

  const findArticleById = (articleId: string) => {
    let index = 0;

    const article = db.articles.find((article, i) => {
      if (article.id === articleId) {
        index = i;
        return true;
      }
      return false;
    });

    if (!article) {
      const ArticleNotFoundError = createError({
        statusCode: 404,
        statusMessage: 'Article not found',
        data: {},
      });

      sendError(e, ArticleNotFoundError);
    }

    return { article, index };
  };

  if (method === 'PUT') {
    const { article, index } = findArticleById(id);
    const body = await readBody(e);

    const updateArticle = {
      ...article,
      ...body,
    };

    db.articles[index] = updateArticle;
    return updateArticle;
  }

  if (method === 'DELETE') {
    const { index } = findArticleById(id);
    db.articles.splice(index, 1);

    return { message: 'item deleted' };
  }
});
