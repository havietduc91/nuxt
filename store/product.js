import { get as getpro } from '../data/product.js'

export const state = () => ({
  products: []
})

export const mutations = {
  getProducts(state, payload) {
    let products = []
    let itemsPerPage = payload && payload.pageSize ? payload.pageSize : 10
    let page = payload && payload.currentPage ? payload.currentPage : 1
    getpro({filter: {}, limit: itemsPerPage, page: page})
      .then(res => {
        products = res && res.data ? res.data : []
        state.products = products
      })
  }
}
