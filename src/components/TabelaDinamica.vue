<template>
  <div>
    <table v-if="messages.length" width="100%">
      <thead>
        <th width="40">idx</th>
        <th>Mensagens</th>
      </thead>
      <tbody>
        <tr v-for="item in messages" :key="item.idx">
          <td>{{ item.idx }}</td>
          <td>{{ item.message }}</td>
        </tr>
      </tbody>
    </table>
    <span v-if="!messages.length"> carregando as mensagens, aguarde... </span>
  </div>
</template>

<script>
export default {
  name: 'TabelaDinamica',
  computed: {
    messages() {
      return this.$store.getters['algumaCoisa/fiveLastMessages']
    }
  }
}
</script>
