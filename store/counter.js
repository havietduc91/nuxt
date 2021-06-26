export const state = () => ({
  count: 0
})

export const actions = {
  increment(context) {
    context.commit('increment')
  }
}

export const mutations = {
  increment(state) {
    state.count++
  }
}
