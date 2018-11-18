<template>
  <main>
    <h1 @click="irVueJsBrasil" title="acessar o grupo VueJS Brasil">
      VueJS Brasil
    </h1>
    <p>
      exemplo feito para
      <span @click="falarComLuiz" title="falar com o Luiz de Souza">
        @luis_de_souza
      </span>
      <br />
      carregando uma nova mensagem a cada 1,5s <br />
      utilizando as libs
      <span @click="irVue" title="acessar documentação">#vue</span>,
      <span @click="irVuex" title="acessar documentação">#vuex</span> e
      <span @click="irAxios" title="acessar documentação">#axios</span>
    </p>
    <hr />
    <tabela-dinamica />
  </main>
</template>

<script>
import TabelaDinamica from '@/components/TabelaDinamica'

export default {
  name: 'Home',
  components: { TabelaDinamica },
  methods: {
    irVueJsBrasil: () => (window.location = 'https://t.me/vuejsbrasil/258599'),
    falarComLuiz: () => (window.location = 'https://telegram.me/luis_de_souza'),
    irVue: () => (window.location = 'https://br.vuejs.org'),
    irVuex: () => (window.location = 'https://vuex.vuejs.org'),
    irAxios: () => (window.location = 'https://github.com/axios/axios')
  }
}
</script>

<style scoped>
h1,
span {
  color: blue;
  cursor: pointer;
}
p,
hr {
  margin-bottom: 15px;
}
</style>
