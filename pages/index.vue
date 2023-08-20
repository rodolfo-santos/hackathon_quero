<template>
  <v-app id="inspire">
    <v-app-bar app class="px-3" flat dense>
      <v-avatar color="grey darken-1" class="hidden-md-and-up" size="32"></v-avatar>
    </v-app-bar>

    <v-main>
      <v-container>
        <div class="d-flex justify-center my-8">Nada Aqui</div>

        <v-row class="d-flex justify-center">
          <v-btn to="/create-article" class="mr-4" text> CMS </v-btn>
          <v-btn to="/primeiro-artigo" text> Blog </v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
