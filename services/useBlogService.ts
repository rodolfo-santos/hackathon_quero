export const useBlogService = () => {
  async function getAll() {
    const data = await $fetch('/api/blog', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    return data;
  }

  async function getUnique(id: string) {
    const data = await $fetch(`/api/blog/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    return data;
  }

  async function create({ title, content }: { title: string; content: string }) {
    const data = await $fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    return data;
  }

  async function update(id: string, { title, content }: { title: string; content: string }) {
    const data = await $fetch(`/api/blog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    return data;
  }

  async function remove(id: string) {
    const data = await $fetch(`/api/blog/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    return data;
  }

  return { getAll, getUnique, create, update, remove };
};
