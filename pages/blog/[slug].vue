<script lang="ts" setup>
import SchoolCard from '@/components/SchoolCard.vue';
import { useBlogService } from '@/services/useBlogService';

const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];

const { data: article } = useAsyncData('article', async () => {
  const data = await useBlogService().getUnique(useRoute().params.slug as string);
  return data;
});
</script>

<template>
  <v-app>
    <CmsHeader />

    <v-main>
      <div class="parallax-container">
        <div class="parallax-image"></div>
        <div class="overlay"></div>
        <div class="content">
          <h1>{{ article.title }}</h1>
          <p>Aqui irei descrever brevemente do que se trata o artigo</p>
        </div>
      </div>
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-sheet min-height="70vh" rounded="lg">
              <v-container class="pa-5">
                <v-row>
                  <v-col cols="12">
                    <div v-html="article.content" class="article__content"></div>
                    <footer class="mt-4">
                      <p class="text-caption">Com carinho, Equipe Escolar</p>
                    </footer>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>

          <v-col cols="4">
            <div class="bg-grey-lighten-3 py-8 px-4">
              <p class="mb-4">Estude na escola <strong>Escola de Teste</strong> com mensalidades que cabem no seu bolso</p>
              <div style="display: flex; gap: 12px; flex-direction: column">
                <SchoolCard />
                <SchoolCard />
                <SchoolCard />
                <SchoolCard />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer class="text-center d-flex flex-column">
      <div>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-footer>
  </v-app>
</template>

<style>
.article__content h1,
.article__content h2,
.article__content h3,
.article__content h4 {
  margin-top: 24px !important;
  margin-bottom: 8px !important;
}

.article__content {
  text-align: justify;
}

.parallax-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://png.pngtree.com/background/20230517/original/pngtree-classroom-school-room-wallpaper-for-desktop-or-your-smart-phone-by-picture-image_2636726.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Ajuste o valor do alpha conforme necessário */
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}
</style>
