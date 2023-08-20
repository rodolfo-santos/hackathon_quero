<script lang="ts" setup>
const items = [
  { text: 'Desempenho', icon: 'mdi-message-draw' },
  { text: 'Meus Artigos', icon: 'mdi-check-decagram-outline' },
  { text: 'Criar Artigos', icon: 'mdi-pencil-outline' },
  { text: 'Artigos Excluídos', icon: 'mdi-text-box-remove-outline' },
  { text: 'Exportar Artigos', icon: 'mdi-export-variant' },
  { text: 'Importar Artigos', icon: 'mdi-import' },
  { text: 'Editar Perfil', icon: 'mdi-account-edit-outline' },
];
</script>

<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg">
      <v-list-subheader class="font-weight-bold">Blog da Escola</v-list-subheader>
      <v-list-item v-for="(item, i) in items" :key="i" :value="item.text" variant="plain" class="">
        <template #prepend> <v-icon :icon="item.icon"></v-icon> </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>
