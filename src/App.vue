<script>
import Home from '@/page/Home'

export default {
  name: 'App',
  render: h => h(Home, { attrs: { id: 'app' } }),
  mounted() {
    this.$store.dispatch('algumaCoisa/start')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
