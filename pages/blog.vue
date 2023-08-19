<script lang="ts" setup>
const links = ['Dashboard', 'Messages', 'Profile', 'Updates'];

const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];

const html = `
.\n\n<article>\n    <section>\n        <h2>Bondade dos Familiares Proporcionou Diversão</h2>\n        <p>Na semana passada tivemos uma linda celebração de Páscoa em que as crianças foram convidadas a comparecer com seus pais e trajando fantasias de coelhinhos. A ilusão criada pelo clima festivo deu o tom para o divertimento que foi proporcionado a todos na escola. </p> \n        <p>Muitos brinquedos foram desenvolvidos para as crianças e os pais também se divertiram com os jogos e atividades elaboradas pela equipe de organização. As comidas da festa eram gostosas e não faltou água e refrigerantes para os familiares. </p>\n    </section>\n    \n    <section>\n        <h2>Chocolate e Simpatia</h2>\n        <p>Como a Páscoa é sinônimo de chegada do coelho, não poderia faltar chocolate para animar a criançada! Os pais traziam caixas de chocolates e as mesas estavam repletas de guloseimas! </p>\n        <p>Além da criatividade na hora de decorar, para deixar o local a cara da Páscoa, o acolhimento da equipe tornou o ambiente mais agradável e os visitantes evidenciavam a satisfação de receber um tratamento tão amigo. </p>\n    </section>\n    \n    <section>\n        <h2>União dos Eventos</h2>\n        <p>Ver todas aquelas cores trocando entre si criava uma visão divertida, estimulando a criatividade em muitos. Os pais possuem o intuito de varias atividades em conjunto para os filhos e a Páscoa foi mais um motivo para essas uniões se tornarem mais intensas. </p>\n        <p>As histórias bíblicas eram apresentadas aos moradores locais e tendo alcançadas as crianças havia periodos de lazer, contato com a natureza e outras coisas que despertavam o interesse de todos. </p>\n    </section>\n    \n    <section>\n        <h2>Garantia de Praticar o Bem</h2>\n        <p>O cenário criado pela Páscoa foi formado com base nos princípios de bondade e esperança, onde cada um devia praticar o bem de forma abnegada para todos. Espalhar alegria com a força do amor e a energia criativa nos deu a liberdade que o mundo oferece para expandir e fortalecer o parapeto de harmonia. </p>\n        <p>Foi mais um momento de amor, compreensão e fidelidade para todos aqueles que participaram, que saíram com um coração cheio. Esperamos que possamos ter outros acontecimentos igualmente prazerosos e que todos possam entender o verdadeiro significado da Páscoa, que é o retorno triunfante do Senhor à Terra. </p>\n    </section>\n\n</article>`;
</script>

<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" flat density="compact">
      <v-avatar color="grey-darken-1" class="hidden-md-and-up" size="32"></v-avatar>

      <v-spacer></v-spacer>

      <v-tabs centered color="grey-darken-2">
        <v-tab v-for="link in links" :key="link" :text="link"></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32"></v-avatar>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="9">
            <v-sheet min-height="70vh" rounded="lg">
              <v-container class="pa-5">
                <v-row>
                  <v-col cols="12">
                    <h1 class="text-h3">Uma Noite Mágica de Tradição: Recapitulando a Festa Junina da Nossa Escola!</h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <div v-html="html"></div>
                    <footer class="mt-4">
                      <p class="text-caption">Com carinho, Equipe Escolar</p>
                    </footer>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="3">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
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

<style scoped>
h2 {
  margin-top: 2rem;
}
</style>
