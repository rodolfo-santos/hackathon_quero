<script setup>
import CmsHeader from '@/components/CmsHeader.vue';
import SideBar from '@/components/SideBar.vue';
</script>

<template>
  <v-app>
    <CmsHeader />

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3"> <SideBar /> </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-10">
              <slot></slot>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
