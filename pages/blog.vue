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
          

          <v-col cols="9">
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

          <v-col cols="3" >
            <v-sheet rounded="lg" min-height="268">
              <p class="card"> Escolas com bolsas disponíveis para seu filho. Venha conferir! </p>
              <div class="recommended-schools">
                <div class="recommended-schools-list">
                  <div class="Colegio">
                      <a class="schools" href="/">
                            <img class="logo" src="https://moppe.com.br/wp-content/uploads/2021/09/cropped-cropped-LogoM512-2.png">
                            <h4>Moppe</h4>
                            <div class="prices">
                              <span class="Ev">A partir de</span>
                              <span class="full-price"> 1658,25</span>
                              <span class="offered-price">825,50</span>
                            </div>
                      </a>
                  </div>
                  
                  <div class="Colegio">  
                  <a class="schools" href="/">
                    <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Melhor_Escolha_logo.png">
                    <h4>Melhor escolha</h4>
                    <div class="prices">
                      <span class="Ev">A partir de</span>
                      <span class="full-price"> 1430,20</span>
                      <span class="offered-price">754,80</span>
                    </div>
                  </a>
                  </div>
                  <div class="Colegio">
                  <a class="schools" href="/">
                    <img class="logo" src="https://colegiobelavistasp.com.br/wp-content/uploads/2019/01/Logo-Objetivo-PDF.png">
                    <h4>Objetivo</h4>
                    <div class="prices">
                      <span class="Ev">A partir de</span>
                      <span class="full-price"> 1587,50</span>
                      <span class="offered-price">690,90</span>
                    </div>
                  </a>
                  </div> 
                  <div class="Colegio">
                  <a class="schools" href="/">
                    <img class="logo" src="https://static.wixstatic.com/media/d36955_ba84321a9a564771bc490dd5dedf3f83~mv2.png/v1/fill/w_600,h_180,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/Logo_Poliedro_Horiz_SIST_ENSINO.png">
                    <h4>Poliedro</h4>
                    <div class="prices">
                      <span class="Ev">A partir de</span>
                      <span class="full-price"> 1330,40</span>
                      <span class="offered-price">830,15</span>
                    </div>
                  </a>
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-row class="inputs">
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-form>
        <v-row>
          <v-col cols="4">
            <v-text-field :counter="15" label="First name" required></v-text-field>
          </v-col>

          <v-col cols="4">
            <v-text-field :counter="15" label="Last name" required></v-text-field>
          </v-col>
          <v-col class="email" cols="4">
            <v-text-field label="E-mail" required></v-text-field>
          </v-col>
        </v-row>
        <v-row class="coment">
          <v-col cols="12" md="12">
            <v-textarea label="Comentário"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-btn class="send" type="submit" blockclass="mt-2">Submit</v-btn>
          </v-col>
        </v-row>
      <v-row>
        <v-col cols="4">
          <p>Anterior</p>
          <a class="link" href="/">A escola foi decorada toda com coelhos na páscoa</a>
        </v-col>
        <v-col cols="4">
        </v-col>
        <v-col cols="4">
          <p class="next">Próxima</p>
          <a class="link" href="/">A escola fez um evento de games para os alunos</a>
        </v-col>
      </v-row>
    </v-form>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>


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
.email {
  margin-top: 0;
}
.coment {
  margin-bottom: 3px;
}
.send {
  width: 200px;
  align-items: center;
}
.link{
  text-decoration: none;
  color:white;
}
.next{
  margin-left: 220px;
}
a:hover{
  color: orangered;
  transition: 0.5s;
}
.send:hover {
  background-color: orangered;
  transition: 0.5s;
  border: solid 0.5px ;
  }
  .inputs{
    margin-top: 15px;
  }
  .logo{
    max-width: 50px;
    max-height: 50px;
  }
  .recommended-schools-list{
    padding: 15px;
  }
  .prices{
    justify-content:space-between;
  }
  .full-price{
    margin-left: 170px;
  }
  .offered-price{
    margin-left: 30px;

  }
  .schools{
    text-decoration: none;
    color:white;
  }
  .Colegio{
    margin-bottom: 20px;
    background-color: aliceblue;
  }
</style>
