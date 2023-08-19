import { AxiosError } from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: useRuntimeConfig().openAIApiKey,
});

const openAI = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  const { article } = await readBody(event);

  const prompt = 'Gere um título de acordo com o artigo abaixo: \n' + article;

  try {
    const completion = await openAI.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 2048,
    });

    return {
      result: completion.data.choices[0].text?.trim(),
    };
  } catch (error) {
    const err = error as AxiosError;

    throw createError({
      statusCode: err.response?.status || 500,
      message: err.response?.statusText || 'Internal Server Error',
    });
  }
});
