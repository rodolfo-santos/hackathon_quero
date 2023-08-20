<script setup>
import { ref } from 'vue';
import { useCmsService } from '@/services/useCmsService';
import { useBlogService } from '@/services/useBlogService';
import Logo from '@/assets/LogoMelhorEscolha.png';

const isDisable = computed(() => {
  return !form.value.content;
});

const items = [
  { text: 'Desempenho', icon: 'mdi-message-draw' },
  { text: 'Meus Artigos', icon: 'mdi-check-decagram-outline' },
];

const form = ref({
  title: '',
  description:
    'Na semana passada os alunos se fantasiaram de coelhinho e tivemos varias atividades relacionadas a pascoas, os pais foram convidados e teve muito chocolate para as crianças',
  content: '',
});

const links = ['Gestão', 'Ofertas', 'Blog', 'Serviços'];

// title input
const titleButtonText = ref('Gerar Título');

async function generateTitle() {
  titleButtonText.value = 'Gerando...';
  const data = await useCmsService().generateTitle(form.value.content);
  form.value.title = data.result;
  titleButtonText.value = 'Gerar Título';
}

// article input
const articleButtonText = ref('Gerar Artigo');

async function generateArticleByDescription() {
  articleButtonText.value = 'Gerando...';
  const data = await useCmsService().generateArticle(form.value.description);
  form.value.content = data.result;
  articleButtonText.value = 'Gerar Artigo';
}

// submit form
const submitButtonText = ref('Criar Artigo');

async function submitForm() {
  submitButtonText.value = 'Criando...';
  await useBlogService().create(form.value);
  submitButtonText.value = 'Artigo Criado';

  setTimeout(() => {
    submitButtonText.value = 'Criar Artigo';
  }, 5000);
}

// utils
function clearForm() {
  form.value = {
    title: '',
    description: '',
    content: '',
  };
}
</script>

<template>
  <v-app>
    <v-app-bar flat class="bg-orange-darken-4">
      <v-container class="d-flex align-center justify-space-between">
        <v-avatar class="me-4" size="100">
          <v-img :src="Logo" alt="Logotipo Melhor Escolha" :width="120"></v-img>
        </v-avatar>

        <div class="d-flex justify-center">
          <v-btn v-for="link in links" :key="link" :text="link" variant="plain"></v-btn>
        </div>

        <div>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-subheader class="font-weight-bold">Blog da Escola</v-list-subheader>
                <v-list-item v-for="(item, i) in items" :key="i" :value="item.text" variant="plain" class=""
                  ><template #prepend> <v-icon :icon="item.icon"></v-icon> </template>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-10">
              <div class="mb-6">
                <span class="mb-5 text-h4">Artigos mais vistos</span>
                <p>Aqui estão os artigos mais acessados da nossa escola leia também.</p>
              </div>
              <v-divider class="ms-3 my-5 bg-orange-darken-3" inset></v-divider>
              <container class="master-cards">
                <v-card class="cards">
                  <v-card-title>Card Title</v-card-title>
                  <v-card-subtitle>Card subtitle</v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipsicing elit. Hic necessitabus dolor quas, impedit placeat lure quod ex
                    commodi est, non sint veniam! Dicta iLLo nihil nobis docimus.
                  </v-card-text>
                  <v-btn class="button">Edit</v-btn>
                  <v-btn class="button2">Delete</v-btn>
                </v-card>

                <v-card class="cards">
                  <v-card-title>Card Title</v-card-title>
                  <v-card-subtitle>Card subtitle</v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipsicing elit. Hic necessitabus dolor quas, impedit placeat lure quod ex
                    commodi est, non sint veniam! Dicta iLLo nihil nobis docimus.
                  </v-card-text>
                  <v-btn class="button">Edit</v-btn>
                  <v-btn class="button2">Delete</v-btn>
                </v-card>

                <v-card class="cards">
                  <v-card-title>Card Title</v-card-title>
                  <v-card-subtitle>Card subtitle</v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipsicing elit. Hic necessitabus dolor quas, impedit placeat lure quod ex
                    commodi est, non sint veniam! Dicta iLLo nihil nobis docimus.
                  </v-card-text>
                  <v-btn class="button">Edit</v-btn>
                  <v-btn class="button2">Delete</v-btn>
                </v-card>

                <v-card class="cards">
                  <v-card-title>Card Title</v-card-title>
                  <v-card-subtitle>Card subtitle</v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipsicing elit. Hic necessitabus dolor quas, impedit placeat lure quod ex
                    commodi est, non sint veniam! Dicta iLLo nihil nobis docimus.
                  </v-card-text>
                  <v-btn class="button">Edit</v-btn>
                  <v-btn class="button2">Delete</v-btn>
                </v-card>

                <v-card class="cards">
                  <v-card-title>Card Title</v-card-title>
                  <v-card-subtitle>Card subtitle</v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipsicing elit. Hic necessitabus dolor quas, impedit placeat lure quod ex
                    commodi est, non sint veniam! Dicta iLLo nihil nobis docimus.
                  </v-card-text>
                  <v-btn class="button">Edit</v-btn>
                  <v-btn class="button2">Delete</v-btn>
                </v-card>

                <v-card class="cards">
                  <v-card-title>Card Title</v-card-title>
                  <v-card-subtitle>Card subtitle</v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipsicing elit. Hic necessitabus dolor quas, impedit placeat lure quod ex
                    commodi est, non sint veniam! Dicta iLLo nihil nobis docimus.
                  </v-card-text>
                  <div class="btn">
                    <v-btn class="button">Edit</v-btn>
                    <v-btn class="button2">Delete</v-btn>
                  </div>
                </v-card>
              </container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
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
