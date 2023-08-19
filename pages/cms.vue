<script setup>
import { ref } from 'vue';

const form = ref({
  title: '',
  footerContent: '',
});

const submitForm = () => {
  // Aqui você pode implementar a lógica para enviar os dados do formulário
  // Por exemplo, enviar os dados para uma API ou salvá-los localmente
  console.log('Formulário enviado:', form.value);
};
const links = ['Dashboard', 'Messages', 'Profile', 'Updates'];
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

        <v-btn v-for="link in links" :key="link" :text="link" variant="text"></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field density="compact" flat hide-details label="Search" rounded="lg" single-line variant="solo-filled"></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item v-for="n in 5" :key="n" link :title="`List Item ${n}`"></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item color="grey-lighten-4" link title="Refresh"></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-10">
              <v-form @submit.prevent="submitForm">
                <v-row gap="20">
                  <v-col cols="11">
                    <v-text-field
                      v-model="form.title"
                      variant="filled"
                      clear-icon="mdi-close-circle"
                      clearable
                      label="Título"
                      type="text"
                      @click:append="sendMessage"
                      @click:clear="clearMessage"></v-text-field>
                  </v-col>
                  <v-col cols="1">
                    <v-btn icon>
                      <v-icon>mdi-robot-confused-outline</v-icon>
                      <v-tooltip activator="parent" location="start">Gerar título por Inteligência Artificial </v-tooltip>
                    </v-btn>
                  </v-col>
                </v-row>

                <v-textarea v-model="form.footerContent" label="Conteúdo" required auto-grow></v-textarea>
                <v-text-field
                  v-model="form.title"
                  :prepend-icon="icon"
                  variant="filled"
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Autor"
                  type="text"></v-text-field>
              </v-form>
              <div class="d-flex justify-end">
                <v-btn type="submit" color="primary">Salvar</v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
