import { AxiosError } from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: useRuntimeConfig().openAIApiKey,
});

const openAI = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  const { description } = await readBody(event);

  const prompt =
    'Retorne pra mim a tag <article> com os parágrafos envoltos em <section> e cada <section> deve possuir um titulo e parágrafos O texto deve conter, no mínimo, 6 parágrafos. Segue a o texto base para gerar o artigo, seja criativo e adicione mais conteúdo: \n' +
    description;

  try {
    const completion = await openAI.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 3000,
      temperature: 0.7,
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
