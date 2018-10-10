<template>
  <div class="Hello">
    <ul>
      <li v-for="(item, index) in tasks" :key="index">
        <input type='checkbox' v-bind:id="index" v-model="item.completed"/>
        <label v-bind:for="index">
          <span v-bind:class="{ done: item.completed }" v-if="item.completed === true"> {{ item.title }} status: done </span>
          <span v-bind:class="{ todo: !item.completed }" v-if="item.completed === false"> {{ item.title }} status: to-do </span>
        </label>
        <button v-on:click="deleteTask(item)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </ul><br/>
    <form v-on:submit="addTask();">
      <input type="text" v-model="tasks.title" required="required">
      <button type="submit" value="" required="required" pattern="[A-Za-z0-9 ]{1,20}"><i class="fas fa-angle-right"></i></button>
    </form>
  </div>
</template>

<script>
//import json from 'https://qunabu.com/api/todos.json'
export default {
  name: 'hello',
  data: function() {
    return{
      tasks: []
    }
  },
  methods:{
    addTask: function(e){
      this.tasks.push({
        title: this.tasks.title,
        done: false
      })
      this.tasks.title = "";
      e.preventDefault();
    },
    deleteTask: function(element){
      this.tasks.splice(
        this.tasks.indexOf(element), 1
        );
    },
   
    getTodos: function() {
      this.$http.get('https://jsonplaceholder.typicode.com/todos', {something: "string"})
      .then ((response) =>{
        console.log (response.body)
        this.tasks = response.body
      } )
      .catch ((error)=> console.log(error))
    }
  },
  mounted: function () {
        this.getTodos();
    }
}


</script>


<style scoped lang="scss">
html, body{
  font-family: Lato;
}
ul{
  list-style-type: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0;
  margin: auto;
  width: 20%;
  background: url('') cover;
  li{
    display: flex;
    height: minmax(1em, 2em);
    justify-content: center;
    align-content: center;
    transition: all 0.2s;
    
    &:hover{
      font-size:1.4em;
    }
    //&::before{font-family: "Font Awesome 5 Free";  font-weight: 100; content: "\f0c8"; color: #ccc;}
    button{
      background: none;
      border: none;
      &:hover{
        color:red;
        background: none;
        border: none;
      }
    }

    input[type=checkbox] {
      display:none;
    }

    input[type=checkbox] + label {
      background: none;
      padding: 0 0 0 0px;
      cursor: pointer;
      span{
        width: minmax(1em, 50px);
      }
      &::before{
        font-family: "Font Awesome 5 Free";
        display: inline-block;
        font-weight: 300;
        font-size: 1em;
        content: "\f0c8";
        color:#9eb2c0;
        display: inline-block;
      }
    }
    input[type=checkbox]:checked + label {
      background: none;
      padding: 0;
      cursor: pointer;
      span{
        width: minmax(1em, 50px);
      }
      &::before{
        font-family: "Font Awesome 5 Free";
        font-weight: 600;
        font-size: 1em;
        content:"\f00c";
        color:green;
        display: inline-block;
      }
    }
  }
}
.done{
  text-decoration: line-through;
  color: #9eb2c0;
}
.todo{
  color: #2e3641;
}

</style>
