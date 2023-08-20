<script setup>
import { ref } from 'vue';
import { useCmsService } from '@/services/useCmsService';
import Logo from '@/assets/logo.png';

const isDisable = computed(() => {
  return !form.value.content;
});

const items = [
  { text: 'Revisados', icon: 'mdi-message-draw' },
  { text: 'Postados', icon: 'mdi-check-decagram-outline' },
];

const form = ref({
  title: '',
  description:
    'Na semana passada os alunos se fantasiaram de coelhinho e tivemos varias atividades relacionadas a pascoas, os pais foram convidados e teve muito chocolate para as crianças',
  content: '',
});

async function generateTitle() {
  const data = await useCmsService().generateTitle(form.value.content);
  form.value.title = data.result;
}

async function generateArticleByDescription() {
  const data = await useCmsService().generateArticle(form.value.description);
  form.value.content = data.result;
}

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
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" size="60">
          <v-img :src="Logo" alt="Logotipo Melhor Escolha"></v-img>
        </v-avatar>

        <v-btn v-for="link in links" :key="link" :text="link" class="font-italic" variant="text"></v-btn>

        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-subheader class="text-white font-weight-bold">Artigos Recentes</v-list-subheader>
                <v-list-item v-for="(item, i) in items" :key="i" :value="item.text" variant="plain" class="text-white"
                  ><template #prepend> <v-icon :icon="item.icon"></v-icon> </template>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item color="grey-lighten-4" link title="Refresh"></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-10">
              <v-form>
                <v-row gap="20">
                  <v-col cols="11">
                    <v-text-field
                      v-model="form.title"
                      variant="filled"
                      clear-icon="mdi-close-circle"
                      clearable
                      label="Título do Artigo"
                      type="text"
                      @click:append="sendMessage"
                      @click:clear="clearMessage"></v-text-field>
                  </v-col>
                  <v-col cols="1" class="d-flex justify-center pt-4">
                    <v-btn icon class="bg-orange-darken-3" :disabled="isDisable" @click="generateTitle">
                      <v-icon>mdi-robot-confused-outline</v-icon>
                      <v-tooltip activator="parent" location="start">Gerar título por Inteligência Artificial </v-tooltip>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="11">
                    <v-textarea
                      v-model="form.description"
                      class="text-white"
                      clear-icon="mdi-close-circle"
                      clearable
                      label="Descreva o conteúdo do artigo"
                      required
                      auto-grow></v-textarea>
                  </v-col>

                  <v-col cols="1" class="d-flex justify-center pt-4">
                    <v-btn icon class="bg-orange-darken-3" @click="generateArticleByDescription">
                      <v-icon>mdi-robot-confused-outline</v-icon>
                      <v-tooltip activator="parent" location="start">Gerar Artigo </v-tooltip>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="11">
                    <v-textarea
                      v-model="form.content"
                      class="text-white"
                      clear-icon="mdi-close-circle"
                      clearable
                      label="Resultado do artigo"
                      required
                      auto-grow></v-textarea>
                  </v-col>

                  <v-col cols="1" class="d-flex justify-center pt-4"> </v-col>
                </v-row>
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
