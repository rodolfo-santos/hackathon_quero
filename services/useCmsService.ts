export const useCmsService = () => {
  async function generateTitle(article: string) {
    const data = await $fetch('/api/cms/generate-title');
    return data;
  }

  return { generateTitle };
};
