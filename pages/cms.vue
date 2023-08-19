<script setup>
import { ref } from 'vue';
import { useCmsService } from '@/services/useCmsService';

const isDisable = computed(() => {
  return !form.value.footerContent;
});

const links = ['Dashboard', 'Messages', 'Profile', 'Updates'];

const items = [
  { text: 'Revisados', icon: 'mdi-flag' },
  { text: 'Postados', icon: 'mdi-flag' },
];

const form = ref({
  title: '',
  content:
    '<article>\n  <section>\n    <h2>A Semana do Coelhinho: Espírito Lúdico e Educativo</h2>\n    <p>A magia da Páscoa tomou conta da nossa escola na semana passada, quando os corredores se encheram de pequenos coelhinhos saltitantes e as atividades temáticas trouxeram alegria para alunos, pais e professores. Durante toda a semana, as crianças vestidas com suas adoráveis fantasias de coelhinhos deram vida a uma atmosfera de encanto e celebração.</p>\n  </section>\n  <section>\n    <h2>Unindo Gerações: Convite aos Pais</h2>\n    <p>Uma parte especial da celebração foi o convite estendido aos pais para participarem ativamente das atividades. A presença dos pais trouxe um elemento único para a celebração, reforçando o valor da parceria entre escola e família na educação das crianças. Os sorrisos radiantes no rosto das crianças ao compartilharem esses momentos especiais com seus pais eram testemunhos da importância desses laços.</p>\n  </section>\n  <section>\n    <h2>Delícias Doces: Chocolate e Alegria</h2>\n    <p>O aroma tentador de chocolate pairava no ar enquanto as crianças se deleitavam com uma abundância de doces deliciosos. A tradição de compartilhar chocolate na Páscoa se mostrou viva e presente na nossa escola. Pequenos ninhos de Páscoa repletos de ovos de chocolate eram um mimo adorável para cada aluno, trazendo um brilho extra aos olhos cheios de alegria.</p>\n  </section>\n  <section>\n    <h2>Lições de Compartilhamento e União</h2>\n    <p>Além da diversão e das guloseimas, a Semana do Coelhinho também transmitiu lições valiosas para nossos alunos. As atividades promoveram valores como compartilhamento, união e a importância de celebrar tradições. Através da brincadeira e do envolvimento ativo, as crianças aprenderam sobre a história e os significados culturais por trás da Páscoa, enriquecendo seus conhecimentos de maneira envolvente e lúdica.</p>\n  </section>\n</article>',
  author: '',
});

async function generateTitle() {
  const data = await useCmsService().generateTitle(form.value.content);
  form.value.title = data.result;
}

function clearForm() {
  form.value.title = '';
  form.value.content = '';
  form.value.author = '';
}
</script>

<template>
  <v-app>
    <v-app-bar flat class="bg-orange-darken-4 text-white">
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

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-subheader class="text-white font-weight-bold">Artigos Recentes</v-list-subheader>
                <v-list-item v-for="(item, i) in items" :key="i" :value="item" variant="plain" class="text-white"
                  ><template #prepend> <v-icon :icon="item.icon"></v-icon> </template
                ></v-list-item>

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
                  <v-col cols="1">
                    <v-btn icon class="bg-orange-darken-3" :disabled="isDisable" @click="generateTitle">
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
                  label="Conteúdo do Artigo"
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
