<script lang="ts" setup>
import Logo from '@/assets/LogoMelhorEscolha.png';
import { useBlogService } from '@/services/useBlogService';

const links = ['Dashboard', 'Messages', 'Profile', 'Updates'];

const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];

const { data: article } = useAsyncData('article', async () => {
  const data = await useBlogService().getUnique(useRoute().params.slug as string);
  return data;
});
</script>

<template>
  <v-app>
    <v-app-bar flat class="bg-orange-darken-4 text-white">
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

    <v-main class="bg-gray">
      <div class="parallax-container">
        <div class="parallax-image"></div>
        <div class="overlay"></div>
        <div class="content">
          <h1>{{ article.title }}</h1>
          <p>Aqui irei descrever brevemente do que se trata o artigo</p>
        </div>
      </div>
      <v-container>
        <v-row>
          <v-col cols="9">
            <v-sheet min-height="70vh" rounded="lg">
              <v-container class="pa-5">
                <v-row>
                  <v-col cols="12">
                    <div v-html="article.content" class="article__content"></div>
                    <footer class="mt-4">
                      <p class="text-caption">Com carinho, Equipe Escolar</p>
                    </footer>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>

          <v-col cols="3">
            <v-sheet rounded="lg" min-height="268">
              <p class="card">Escolas com bolsas disponíveis para seu filho. Venha conferir!</p>
              <div class="recommended-schools">
                <div class="recommended-schools-list">
                  <div class="Colegio">
                    <a class="schools" href="/">
                      <img class="logo" src="https://moppe.com.br/wp-content/uploads/2021/09/cropped-cropped-LogoM512-2.png" />
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
                      <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Melhor_Escolha_logo.png" />
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
                      <img class="logo" src="https://colegiobelavistasp.com.br/wp-content/uploads/2019/01/Logo-Objetivo-PDF.png" />
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
                      <img
                        class="logo"
                        src="https://static.wixstatic.com/media/d36955_ba84321a9a564771bc490dd5dedf3f83~mv2.png/v1/fill/w_600,h_180,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/Logo_Poliedro_Horiz_SIST_ENSINO.png" />
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
            <v-col cols="4"> </v-col>
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

<style>
.article__content h1,
.article__content h2,
.article__content h3,
.article__content h4 {
  margin-top: 24px !important;
  margin-bottom: 8px !important;
}

.article__content {
  text-align: justify;
}

.parallax-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.parallax-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://png.pngtree.com/background/20230517/original/pngtree-classroom-school-room-wallpaper-for-desktop-or-your-smart-phone-by-picture-image_2636726.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Ajuste o valor do alpha conforme necessário */
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

/*-------------------- */

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
.link {
  text-decoration: none;
  color: white;
}
.next {
  margin-left: 220px;
}

.inputs {
  margin-top: 15px;
}
.logo {
  max-width: 50px;
  max-height: 50px;
}
.recommended-schools-list {
  padding: 15px;
}
.prices {
  justify-content: space-between;
  padding: 15px;
}
.full-price {
  margin-left: 140px;
}
.offered-price {
  margin-left: 30px;
}
.schools {
  text-decoration: none;
  color: grey;
  padding: 15px;
}
.Colegio {
  margin-bottom: 20px;
  background-color: aliceblue;
  border-radius: 15px;
}
.Colegio:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
h4 {
  padding: 15px;
}
.logo {
  margin-top: 10px;
}
.full-price {
  text-decoration: line-through;
}
</style>
