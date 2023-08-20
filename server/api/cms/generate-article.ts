import { AxiosError } from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: useRuntimeConfig().openAIApiKey,
});

const openAI = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  const { description } = await readBody(event);

  if (description.split(' ').length < 10) {
    throw createError({
      statusCode: 400,
      message: 'A descrição deve conter pelo menos 10 palavras.',
    });
  }

  const prompt =
    'Crie um artigo usando a tag <article>. Dentro do artigo, inclua 6 ou mais parágrafos envoltos em tags <section>, cada <section> com um título e parágrafos. Utilize o seguinte texto como base e sinta-se à vontade para adicionar mais conteúdo: \n' +
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
