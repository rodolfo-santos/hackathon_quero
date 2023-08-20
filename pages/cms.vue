<script setup>
import { ref } from 'vue';
import { useCmsService } from '@/services/useCmsService';
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

// title
const isGeneratingTitle = ref(false);

const titleButtonText = computed(() => {
  return isGeneratingTitle.value ? 'Gerando...' : 'Gerar Título';
});

async function generateTitle() {
  isGeneratingTitle.value = true;
  const data = await useCmsService().generateTitle(form.value.content);
  form.value.title = data.result;
  isGeneratingTitle.value = false;
}

// article
const isGeneratingArticle = ref(false);

const articleButtonText = computed(() => {
  return isGeneratingArticle.value ? 'Gerando...' : 'Gerar Artigo';
});

async function generateArticleByDescription() {
  isGeneratingArticle.value = true;
  const data = await useCmsService().generateArticle(form.value.description);
  form.value.content = data.result;
  isGeneratingArticle.value = false;
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
    <v-app-bar flat class="bg-orange-darken-4 text-white">
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

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-subheader class="text-white font-weight-bold">Blog da Escola</v-list-subheader>
                <v-list-item v-for="(item, i) in items" :key="i" :value="item.text" variant="plain" class="text-white"
                  ><template #prepend> <v-icon :icon="item.icon"></v-icon> </template>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-10">
              <div class="mb-6">
                <span class="mb-5 text-h4">Gerar Artigo</span>
                <p>Gere um artigo de forma fácil utilizando inteligência artificial</p>
              </div>
              <v-divider class="ms-3 my-5 bg-orange-darken-3" inset></v-divider>

              <v-form>
                <section class="mb-6">
                  <v-textarea
                    v-model="form.description"
                    class="text-white"
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Descreva o conteúdo do artigo"
                    required
                    auto-grow></v-textarea>
                  <div class="d-flex justify-end">
                    <v-btn class="bg-orange-darken-3 mr-4" prepend-icon="mdi-robot-confused-outline" @click="generateArticleByDescription">
                      {{ articleButtonText }}
                    </v-btn>
                    <v-btn
                      class="bg-orange-darken-3"
                      prepend-icon="mdi-robot-confused-outline"
                      :disabled="isDisable"
                      @click="generateTitle">
                      {{ titleButtonText }}
                    </v-btn>
                  </div>
                </section>

                <section class="mb-6">
                  <v-text-field
                    v-model="form.title"
                    variant="filled"
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Título do Artigo"
                    type="text"
                    @click:append="sendMessage"
                    @click:clear="clearMessage"></v-text-field>
                  <v-textarea
                    v-model="form.content"
                    class="text-white"
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Resultado do artigo"
                    required
                    auto-grow></v-textarea>
                </section>
              </v-form>
              <v-divider class="ms-3 my-5 bg-orange-darken-3" inset></v-divider>
              <div class="d-flex justify-end">
                <v-btn type="submit" class="font-weight-bold bg-grey-darken-3 text-white mr-3" @click="clearForm">Limpar</v-btn>
                <v-btn type="submit" class="font-weight-bold text-white bg-orange-darken-4">Salvar</v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
