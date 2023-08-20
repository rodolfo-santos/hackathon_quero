<template>
  <v-card class="school-card pa-4">
    <div class="mb-4">
      <div class="d-flex align-center">
        <span class="image mr-2"></span>
        <strong>Ensino Fundamental I - 1ª Série ~ Manhã</strong>
      </div>
    </div>
    <div class="d-flex justify-space-between">
      <div>R$ 1250</div>

      <v-btn class="bg-orange-darken-4">Ver Bolsa</v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.school-card {
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
}

.school-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.image {
  height: 20px;
  width: 20px;
  background-image: url('https://yt3.googleusercontent.com/ytc/AOPolaRoCGlNij_VyMdkm2z9SC4AmqnfBD0kpCoTPV-g=s900-c-k-c0x00ffffff-no-rj');
  background-size: cover;
  background-position: center;
}
</style>
