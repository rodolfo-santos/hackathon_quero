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
  description:
    'Na semana passada os alunos se fantasiaram de coelhinho e tivemos varias atividades relacionadas a pascoas, os pais foram convidados e teve muito chocolate para as crianças',
  content: '',
});

const isRequestSending = ref(false);

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

function printContent() {
  console.log(tinymce.activeEditor.getContent());
}

function insertText() {
  const text = '<b>Adicionado Texto</b>';
  tinymce.activeEditor.execCommand('mceInsertContent', false, ` ${text} `);
}
</script>

<template>
  <div>
    <div class="mb-16">
      <span class="mb-5 text-h4">Criação de artigo</span>
      <p class="mb-6">Gere um artigo de forma fácil utilizando inteligência artificial</p>
      <v-divider></v-divider>
    </div>

    <v-form>
      <section class="mb-4">
        <span class="mb=6">Descreva algum acontecimento de sua escola </span>

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

      <section class="mt-16">
        <v-text-field
          v-model="form.title"
          variant="filled"
          clear-icon="mdi-close-circle"
          clearable
          label="Título do Artigo"
          type="text"
          :disabled="isRequestSending"
          @click:append="sendMessage"
          @click:clear="clearMessage"></v-text-field>

        <client-only>
          <Editor
            v-model="form.content"
            :disabled="isRequestSending"
            :api-key="useRuntimeConfig().public.tinymceAPiKey"
            :init="{
              height: 700,
              menubar: false,
              plugins: 'code',
              branding: false,
              statusbar: false,
              toolbar:
                'undo redo | formatselect  | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | code',
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
  </div>
</template>
