<script setup>
import Logo from '@/assets/LogoMelhorEscolha.png';
</script>

<template>
  <v-app-bar flat class="bg-orange-darken-4">
    <v-container class="d-flex align-center justify-space-between">
      <v-avatar class="me-4" size="100">
        <v-img :src="Logo" alt="Logotipo Melhor Escolha" :width="120"></v-img>
      </v-avatar>

      <div class="d-flex justify-center">
        <v-btn v-for="link in ['Gestão', 'Ofertas', 'Blog', 'Serviços']" :key="link" :text="link" variant="plain"></v-btn>
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
</template>
