<script lang="ts" setup>
const links = ['Dashboard', 'Messages', 'Profile', 'Updates'];

const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];

const data = {
  title: '',
  content: '',
  links: [
    { text: 'Home', url: '/' },
    { text: 'Sobre', url: '/sobre' },
    { text: 'Contato', url: '/contato' },
  ],
  sitemap: [
    { title: 'Página 1', url: '/pagina1' },
    { title: 'Página 2', url: '/pagina2' },
    { title: 'Página 3', url: '/pagina3' },
  ],
  copyright: '© 2023 Nome da Sua Empresa. Todos os direitos reservados.',
};
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
                    <article>
                      <p>
                        Olá, queridos leitores do blog da escola! Temos o prazer de trazer a vocês um emocionante relato do evento que
                        agitou nossa escola na última semana: a tão esperada Festa Junina! Com muita alegria, música, danças e comidas
                        típicas, nossa festa foi uma verdadeira celebração das tradições juninas.
                      </p>

                      <h2>Preparativos e Decoração: Uma Atmosfera Encantadora</h2>
                      <p>
                        Desde o início do mês, nossos alunos e professores trabalharam incansavelmente para transformar nosso espaço escolar
                        em um autêntico arraial. Bandeirinhas coloridas, balões e enfeites temáticos deram um toque especial às salas de
                        aula e aos espaços comuns. A sensação de entrar na escola e ser transportado para uma autêntica festa junina era
                        realmente mágica!
                      </p>

                      <h2>Apresentações Culturais: Danças e Músicas que Encantaram a Todos</h2>
                      <p>
                        Uma das partes mais aguardadas da festa foram as apresentações culturais dos alunos. Desde os mais pequeninos até os
                        mais velhos, todos tiveram a chance de mostrar seus talentos e espalhar alegria no palco. As danças tradicionais,
                        como a quadrilha, foram executadas com maestria, levando os espectadores a se envolverem e até mesmo a participarem
                        das coreografias animadas.
                      </p>
                      <p>
                        As músicas típicas, tocadas por nossa talentosa banda escolar, criaram uma atmosfera vibrante, fazendo com que todos
                        se sentissem parte de um grande forró. Ouvir os acordes das sanfonas e as batidas dos triângulos nos fez dançar e
                        cantar juntos, celebrando a rica cultura junina.
                      </p>

                      <h2>Comidas Típicas: Sabores que Aqueceram o Coração</h2>
                      <p>
                        E é claro que não podemos esquecer da parte mais saborosa da festa: as comidas típicas! Nossos chefs de cozinha
                        prepararam um verdadeiro banquete com quitutes tradicionais, como canjica, quentão, milho cozido, pamonha e muito
                        mais. As barracas de alimentos foram um ponto de encontro para todos, onde compartilhamos risadas, histórias e, é
                        claro, degustamos essas deliciosas iguarias.
                      </p>

                      <h2>Jogos e Atividades: Diversão para Todas as Idades</h2>
                      <p>
                        Além das apresentações e das delícias culinárias, a festa também contou com uma variedade de jogos e atividades para
                        todas as idades. As brincadeiras típicas de quermesse, como pescaria e correio elegante, proporcionaram momentos de
                        diversão e descontração. Foi uma ótima oportunidade para os alunos interagirem, criarem laços e se divertirem
                        juntos.
                      </p>

                      <h2>Conclusão: Celebrando a Cultura e a Comunidade Escolar</h2>
                      <p>
                        A Festa Junina deste ano foi verdadeiramente memorável. Além de celebrar nossas tradições culturais, a festa também
                        reforçou os laços de amizade e união entre alunos, professores, funcionários e familiares. Ficamos emocionados em
                        ver como todos se envolveram e fizeram deste evento um sucesso retumbante.
                      </p>
                      <p>
                        Agradecemos a todos os envolvidos por fazerem desta Festa Junina um momento inesquecível. A celebração de nossa
                        cultura e o espírito de comunidade que vivenciamos são exemplos do que torna nossa escola tão especial. Até o
                        próximo evento incrível!
                      </p>
                    </article>
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
