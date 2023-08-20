<script setup>
import { ref } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import { useCmsService } from '@/services/useCmsService';
import { useBlogService } from '@/services/useBlogService';
import Logo from '@/assets/LogoMelhorEscolha.png';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

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
  isGeneratingTitle.value = false;
  console.log('passou');
  insertText();
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

function printContent() {
  console.log(tinymce.activeEditor.getContent());
}

function insertText() {
  const text = '<b>Adicionado Texto</b>';
  tinymce.activeEditor.execCommand('mceInsertContent', false, ` ${text} `);
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
                <span class="mb-5 text-h4">Gerar Artigo</span>
                <p>Gere um artigo de forma fácil utilizando inteligência artificial</p>
              </div>
              <v-divider class="ms-3 bg-orange-darken-3" inset></v-divider>

              <v-form>
                <section class="mb-4">
                  <span class="mb=6">Descreva o Conteúdo do Artigo</span>
                  <client-only>
                    <Editor
                      api-key="mklq2i4wt1oh6v7ke96vqsmt5tzs3ehptgo7xl1vxwi12myz"
                      :init="{
                        toolbar:
                          'undo redo | blocks | ' +
                          'bold italic backcolor | alignleft aligncenter ' +
                          'alignright alignjustify | bullist numlist outdent indent | ' +
                          'removeformat | help',

                        //skin: 'oxide-dark',
                        //content_css: 'dark',
                        statusbar: false,
                        plugins: 'code',
                      }" />
                  </client-only>

                  <!-- <v-textarea
                    id="myText"
                    v-model="form.description"
                    class=""
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Descreva o conteúdo do artigo"
                    required
                    auto-grow></v-textarea> -->
                  <div class="d-flex justify-end my-4">
                    <v-btn class="bg-orange-darken-3 mr-4" prepend-icon="mdi-robot-confused-outline" @click="generateArticleByDescription">
                      {{ articleButtonText }}
                    </v-btn>
                    <v-btn
                      class="bg-purple-darken-3"
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
                    class=""
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Resultado do artigo"
                    required
                    auto-grow></v-textarea>
                </section>
              </v-form>
              <v-divider class="ms-3 my-5 bg-orange-darken-3" inset></v-divider>
              <div class="d-flex justify-end">
                <v-btn type="submit" class="font-weight-bold text-white bg-orange-darken-4 mr-3">Salvar</v-btn>
                <v-btn type="submit" class="font-weight-bold text-white bg-orange-darken-4 mr-3" @click="printContent">Gerar HTML</v-btn>

                <v-btn type="submit" class="font-weight-bold bg-orange-darken-4 mr-3" @click="submitForm">
                  {{ submitButtonText }}
                </v-btn>
                <v-btn type="submit" class="font-weight-bold bg-grey-darken-4 mr-3" @click="clearForm">Limpar</v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
