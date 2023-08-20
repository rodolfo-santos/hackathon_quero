import { sendError } from 'h3';
import { db } from '../db';
import { stringToSlug } from '../../../assets/ts/helpers';

export default defineEventHandler(async (e) => {
  const method = e.req.method;

  if (method === 'GET') {
    return db.articles;
  }

  if (method === 'POST') {
    const body = await readBody(e);

    if (!body.content || !body.title) {
      const ArticleNotFoundError = createError({
        statusCode: 400,
        statusMessage: 'No article provided',
        data: {},
      });

      sendError(e, ArticleNotFoundError);
    }

    const newArticle = {
      slug: stringToSlug(body.title),
      content: body.content,
      title: body.title,
    };

    db.articles.push(newArticle);

    return newArticle;
  }
});
