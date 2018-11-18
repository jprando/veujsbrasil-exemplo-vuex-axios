import axios from 'axios'

export const algumaCoisa = {
  namespaced: true,
  state: { idx: 0, messages: [] },
  getters: { fiveLastMessages: state => state.messages /* .slice(-5) */ },
  actions: { start: vuexContext => startAndScheduleTask(vuexContext) },
  mutations: {
    idxPlus: state => state.idx++,
    addMessage: (state, message) =>
      5 /* tamanho desejado do array */ +
      1 /* flag */ -
        state.messages.push(message) || state.messages.shift()
  }
}

const startAndScheduleTask = context =>
  axiosTask(context).then(() => setInterval(axiosTask, 1500, context))

const axiosTask = ({ state, commit }) =>
  axios
    .get('https://baconipsum.com/api/?type=meat-and-filler&paras=1&sentences=1')
    .then(response => response.data[0])
    .then(message1st => message1st.substring(0, 60) + '...')
    .then(first60 => commit('idxPlus') || { idx: state.idx, message: first60 })
    .then(shortMessage => commit('addMessage', shortMessage))
