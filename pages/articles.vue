<script setup>
import { useBlogService } from '@/services/useBlogService';

definePageMeta({ layout: 'cms' });

const { data: articles } = useAsyncData('article', async () => {
  const data = await useBlogService().getAll();
  return data;
});
</script>

<template>
  <div>
    <div class="mb-6">
      <span class="mb-5 text-h4">Meus Artigos</span>
      <p>Aqui estão os artigos de sua escola</p>
    </div>
    <v-divider class="ms-3 my-5 bg-orange-darken-3" inset></v-divider>
    <v-container class="master-cards">
      <v-card v-for="article in articles" :key="article.slug" class="cards">
        <v-card-title>{{ article.title }}</v-card-title>
        <v-card-subtitle>Card subtitle</v-card-subtitle>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipsicing elit. Hic necessitabus dolor quas, impedit placeat lure quod ex commodi est, non
          sint veniam! Dicta iLLo nihil nobis docimus.
        </v-card-text>
        <div class="d-flex justify-end" style="gap: 12px">
          <v-btn class="bg-orange">Editar</v-btn>
          <v-btn class="bg-red">Deletar</v-btn>
          <v-btn class="bg-green">Ver Página</v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.master-cards {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  gap: 30px;
  margin: 0 auto;
}
.cards:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.cards {
  border-radius: 15px;
  padding: 15px;
}
.button {
  margin-right: 20px;
  width: 100px;
  margin-left: 15px;
  margin-bottom: 15px;
}

.button2 {
  width: 100px;
  margin-bottom: 15px;
}

.button:hover {
  background-color: orangered;
  color: white;
  transition: 0.5s;
}
.button2:hover {
  background-color: orangered;
  color: white;
  transition: 0.5s;
}
</style>
