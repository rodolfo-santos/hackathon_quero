<script lang="ts" setup>
const items = [
  { text: 'Desempenho', icon: 'mdi-message-draw', link: '' },
  { text: 'Meus Artigos', icon: 'mdi-check-decagram-outline', link: '/articles' },
  { text: 'Criar Artigo', icon: 'mdi-pencil-outline', link: '/create-article' },
  { text: 'Artigos Excluídos', icon: 'mdi-text-box-remove-outline', link: '' },
  { text: 'Exportar Artigos', icon: 'mdi-export-variant', link: '' },
  { text: 'Importar Artigos', icon: 'mdi-import', link: '' },
];
</script>

<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg">
      <v-list-subheader class="font-weight-bold">Blog da Escola</v-list-subheader>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item.text" variant="plain">
        <template #prepend> <v-icon :icon="item.icon"></v-icon> </template>
        <v-btn size="small" :to="item.link">{{ item.text }}</v-btn>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>
