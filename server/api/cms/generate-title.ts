import { AxiosError } from 'axios';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: useRuntimeConfig().openAIApiKey,
});

const openAI = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  const { article } = await readBody(event);

  if (!article) {
    throw createError({
      statusCode: 400,
      message: 'Missing article',
    });
  }

  const prompt = 'Gere um título de acordo com o artigo abaixo: \n' + article;

  try {
    const completion = await openAI.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 2048,
    });

    return {
      result: extractStringValue(completion.data.choices[0].text?.trim() as string),
    };
  } catch (error) {
    const err = error as AxiosError;

    throw createError({
      statusCode: err.response?.status || 500,
      message: err.response?.statusText || 'Internal Server Error',
    });
  }
});

function extractStringValue(inputString: string) {
  const trimmedString = inputString.trim();

  if (trimmedString.startsWith('"') && trimmedString.endsWith('"') && trimmedString.length > 1) {
    return trimmedString.substring(1, trimmedString.length - 1);
  } else {
    return trimmedString;
  }
}

