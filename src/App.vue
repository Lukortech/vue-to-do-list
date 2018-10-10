<template>
  <div id="app">
    <div id="nav">
      <router-link to="/to-do-list">To do</router-link>
    </div>
    <router-view/>
    <br/><br/><br/><br/><br/><br/>
    <p>Created by : <a href="mailto:lukortech@gmail.com">lukortech</a></p>
  </div>
</template>

<style lang="scss">
@import url(https://fonts.google.com/?selection.family=Lato);
#app {
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    border: 1px solid black;
    padding:0.7em;
    transition: all 0.5s;
    &:hover{
      background:#ccc;
      transition: all 0.5s;
      border: dotted ;
      border-radius: 2em;
    }
    &.router-link-exact-active {
      color: #42b983;
      border: 1px solid;
      margin: 0 10px 0 10px;
    }
  }
}
a {font-weight: bold;color: #2c3e50;padding:0.1em;}
</style>
