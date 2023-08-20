<script lang="ts" setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return 'Name needs to be at least 2 characters.';
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return 'Phone number needs to be at least 9 digits.';
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return 'Must be a valid e-mail.';
    },
    select(value) {
      if (value) return true;

      return 'Select an item.';
    },
    checkbox(value) {
      if (value === '1') return true;

      return 'Must be checked.';
    },
  },
});
const name = useField('name');
const phone = useField('phone');
const email = useField('email');
const select = useField('select');
const checkbox = useField('checkbox');

const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value" label="Nome"></v-text-field>

    <v-text-field v-model="phone.value.value" :counter="7" :error-messages="phone.errorMessage.value" label="Telefone"></v-text-field>

    <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value" label="E-mail"></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Etapa de Ensino de Interesse"></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      value="1"
      label="Receber novidades por e-mail"
      type="checkbox"></v-checkbox>

    <div class="d-flex justify-end">
      <v-btn class="mr-4" @click="handleReset"> Limpar </v-btn>
      <v-btn class="bg-orange-darken-4 text-white" type="submit"> Enviar </v-btn>
    </div>
  </form>
</template>
