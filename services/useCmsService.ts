export const useCmsService = () => {
  async function generateTitle(article: string) {
    const data = await $fetch('/api/cms/generate-title', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        article,
      }),
    });

    return data;
  }

  async function generateArticle(description: string) {
    const data = await $fetch('/api/cms/generate-article', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description,
      }),
    });

    return data;
  }

  async function semanticize(article: string) {
    const data = await $fetch('/api/cms/semanticize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        article,
      }),
    });

    return data;
  }

  return { generateTitle, generateArticle, semanticize };
};
