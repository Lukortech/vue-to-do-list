<template>
  <div id="app">
    <div id="nav">
      <router-link to="/to-all-list">All</router-link> /
      <router-link to="/to-do-list">To do</router-link> /
      <router-link to="/to-done-list">Done</router-link>
    </div>
    <router-view/>
    <br/><br/><br/><br/><br/><br/>
    <p>Footer for anything you do in the app.</p>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
