<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <NuxtLink to="/users">Users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Home page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/hello-world">Hello world</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/counter">Counter</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
