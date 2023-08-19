<script setup>
import { ref } from 'vue';
import { useCmsService } from '@/services/useCmsService';

const links = ['Dashboard', 'Messages', 'Profile', 'Updates'];

const form = ref({
  title: '',
  content: '',
  author: '',
});

function generateTitle() {
  form.value.title = useCmsService().generateTitle(form.value.title);
}

function clearForm() {
  form.value.title = '';
  form.value.content = '';
  form.value.author = '';
}
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat class="bg-orange-darken-3 text-white">
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" :text="link" class="font-italic" variant="text"></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            class="font-weight-bold"
            density="compact"
            flat
            hide-details
            label="Search"
            rounded="lg"
            single-line
            variant="solo-filled"
            append-inner-icon="mdi-magnify"></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-darken-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg" class="bg-grey-darken-2">
                <v-list-item v-for="n in 5" :key="n" link :title="`List Item ${n}`" class="text-white"></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item color="grey-lighten-4" link title="Refresh"></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-10 bg-grey-darken-2">
              <v-form @submit.prevent="submitForm">
                <v-row gap="20">
                  <v-col cols="11">
                    <v-text-field
                      v-model="form.title"
                      variant="filled"
                      clear-icon="mdi-close-circle"
                      clearable
                      label="Título do Blog"
                      type="text"
                      @click:append="sendMessage"
                      @click:clear="clearMessage"></v-text-field>
                  </v-col>
                  <v-col cols="1">
                    <v-btn icon class="bg-orange-darken-3" @click="generateTitle">
                      <v-icon>mdi-robot-confused-outline</v-icon>
                      <v-tooltip activator="parent" location="start">Gerar título por Inteligência Artificial </v-tooltip>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-textarea
                  v-model="form.content"
                  class="text-white"
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Conteúdo do Blog"
                  required
                  auto-grow></v-textarea>
                <v-text-field
                  v-model="form.author"
                  :prepend-icon="icon"
                  variant="filled"
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Autor"
                  type="text"></v-text-field>
              </v-form>
              <div class="d-flex justify-end">
                <v-btn type="submit" class="font-weight-bold bg-grey-darken-3 text-white mr-3" @click="clearForm">Limpar</v-btn>
                <v-btn type="submit" class="font-weight-bold text-white bg-orange-darken-3" @click="submitForm">Salvar</v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
