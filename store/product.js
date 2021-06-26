import { get as getpro } from '~/data/product.js'

export const state = () => ({
  products: []
})

export const actions = {
  getProducts(context, payload) {
    let products = []
    let itemsPerPage = payload && payload.pageSize ? payload.pageSize : 10
    let page = payload && payload.currentPage ? payload.currentPage : 1
    getpro({filter: {}, limit: itemsPerPage, page: page})
      .then(res => {
        products = res && res.data ? res.data : []
        context.commit('getProductsSuccessful', products)
      })
  }
}

export const mutations = {
  getProductsSuccessful(state, products) {
    state.products = products
  }
}
