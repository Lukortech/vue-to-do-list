<template>
  <div class="to-done-list">
    <h1>A place for to-do list with items that are already completed.</h1>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './../components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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