<template>
  <ProductList />
</template>

<script>
import ProductList from '~/components/pages/ProductList'

// This component to support test karma purpose
export default {
  name: 'products',
  layout: 'admin',
  components: {
    ProductList
  },
}
</script>

