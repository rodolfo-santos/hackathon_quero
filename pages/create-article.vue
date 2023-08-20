<script setup>
import { ref } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import { useCmsService } from '@/services/useCmsService';
import { useBlogService } from '@/services/useBlogService';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

definePageMeta({ layout: 'cms' });

const generateTitleDisabled = computed(() => !form.value.content || isRequestSending.value);

const form = ref({
  title: '',
  description: '',
  content: '',
});

const isRequestSending = ref(false);
const dialog = ref(false);

// title input
const titleButtonText = ref('Gerar Título');

async function generateTitle() {
  isRequestSending.value = true;
  titleButtonText.value = 'Gerando...';
  const data = await useCmsService().generateTitle(form.value.content);
  form.value.title = data.result;
  isRequestSending.value = false;
  titleButtonText.value = 'Gerar Título';
}

// article input
const articleButtonText = ref('Gerar Artigo');

async function generateArticleByDescription() {
  isRequestSending.value = true;
  articleButtonText.value = 'Gerando...';
  const data = await useCmsService().generateArticle(form.value.description);
  form.value.content = data.result;
  isRequestSending.value = false;
  articleButtonText.value = 'Gerar Artigo';
}

// submit form
const submitButtonText = ref('Criar Artigo');

async function submitForm() {
  submitButtonText.value = 'Criando...';
  await useBlogService().create(form.value);
  submitButtonText.value = 'Artigo Criado';
  dialog.value = true;

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

const isListen = ref(false);

let recognition;

function listen() {
  isListen.value = true;
  start();

  function start() {
    recognition = new window.webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'pt-BR';
    recognition.continuous = true; // Alterado para true para que a escuta continue indefinidamente
    recognition.start();
    recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          const escutou = event.results[i][0].transcript.trim();
          form.value.description += escutou;
        }
      }
    };
  }
}

function stopListening() {
  if (recognition) recognition.stop();
  isListen.value = false;
}
</script>

<template>
  <div>
    <div class="mb-10">
      <span class="mb-5 text-h4">Criação de artigo</span>
      <p class="mb-6">Gere um artigo de forma fácil utilizando inteligência artificial</p>
      <v-divider></v-divider>
    </div>

    <v-form>
      <section class="mb-4">
        <div class="d-flex justify-space-between">
          <span class="mb=6">Descreva algum acontecimento de sua escola </span>

          <div>
            <v-btn v-if="isListen" icon="mdi-microphone-off" class="bg-red" @click="stopListening">
              <v-icon>mdi-microphone-off</v-icon>
              <v-tooltip activator="parent" bottom> Parar de escutar</v-tooltip>
            </v-btn>
            <v-btn v-else icon="mdi-microphone" class="bg-green" @click="listen">
              <v-icon>mdi-microphone</v-icon>
              <v-tooltip activator="parent" left> Escutar </v-tooltip>
            </v-btn>
          </div>
        </div>

        <v-textarea
          id="myText"
          v-model="form.description"
          class=""
          clear-icon="mdi-close-circle"
          clearable
          label="Descreva o conteúdo do artigo"
          required
          :disabled="isRequestSending"
          auto-grow></v-textarea>
        <div class="d-flex justify-end my-4">
          <v-btn
            class="bg-orange-darken-3 mr-4"
            prepend-icon="mdi-robot-confused-outline"
            :disabled="isRequestSending"
            @click="generateArticleByDescription">
            {{ articleButtonText }}
          </v-btn>
          <v-btn
            class="bg-purple-darken-3"
            prepend-icon="mdi-robot-confused-outline"
            :disabled="generateTitleDisabled"
            @click="generateTitle">
            {{ titleButtonText }}
          </v-btn>
        </div>
      </section>

      <section class="mt-10">
        <v-text-field
          v-model="form.title"
          variant="filled"
          clear-icon="mdi-close-circle"
          clearable
          label="Título do Artigo"
          type="text"
          :disabled="isRequestSending"></v-text-field>

        <p class="pa-3">Resultado do Artigo Gerado:</p>
        <client-only>
          <Editor
            v-model="form.content"
            :disabled="isRequestSending"
            :api-key="useRuntimeConfig().public.tinymceAPiKey"
            :init="{
              height: 700,
              plugins: 'code',
              branding: false,
              statusbar: false,
            }" />
        </client-only>
      </section>
    </v-form>
    <v-divider class="ms-3 my-5 bg-orange-darken-3" inset></v-divider>
    <div class="d-flex justify-end">
      <v-btn type="submit" class="font-weight-bold bg-orange-darken-4 mr-3" @click="submitForm">
        {{ submitButtonText }}
      </v-btn>
      <v-btn type="submit" class="font-weight-bold bg-grey-darken-4 mr-3" @click="clearForm">Limpar</v-btn>
    </div>

    <v-col cols="auto">
      <v-dialog v-model="dialog" class="text-center" transition="dialog-bottom-transition" width="512">
        <v-card>
          <v-card-text>
            <div class="text-h5 pa-12">Artigo Criado com Sucesso!</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </div>
</template>
