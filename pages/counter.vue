<template>
  <TheCounter />
</template>

<script>
import TheCounter from '~/components/pages/TheCounter'

// This component to support test karma purpose
export default {
  name: 'counter',
  layout: 'admin',
  components: {
    TheCounter
  },
}
</script>

