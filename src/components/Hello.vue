<template>
  <div class="Hello">
    <ul>
      <li v-for="item in tasks" :key="item.id">
        <i v-bind:class="{[classes.tick]: tasks.done}"><input type="checkbox" v-model="item.done"></i>
        <span :class="{done: tasks.done}" v-if="item.done === true"> {{ item.message }} status: done </span>
        <span :class="{todo: !tasks.done}" v-if="item.done === false"> {{ item.message }} status: to-do </span>
        <button v-on:click="deleteTask">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </ul>
    <form v-on:submit="addTask">
      <input type="text" v-model="tasks.message">
      <input type="submit" value="Submit">
    </form>
    
    <!--<button v-on:click="addTask">Add task</button>-->
  </div>
</template>

<script>
//import json from 'https://qunabu.com/api/todos.json'
export default {
  name: 'hello',
  data() {
    return{
      classes: {
        tick: "green fas fa-check",
      },
      //myJson: json,
      newTask:{},
      tasks: [
        { done: false, message: 'Clean up the room' },
        { done: true, message: 'Clean up the kitchen' },
        { done: false, message: 'Go to the grocery store' },
      ]
    }
  },
  methods:{
    addTask: function(e){
      this.tasks.push({
        message: this.tasks.message,
        done: false
      })
      e.preventDefault();
    },
    deleteTask: function(task){
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }
  }
}

/*
{
  "todos": [
    {
      "ID": 329,
      "Content": "cos",
      "Finished": "0",
      "Sort": "0"
    },
    {
      "ID": 330,
      "Content": "cos2",
      "Finished": "0",
      "Sort": "0"
    },
    {
      "ID": 331,
      "Content": "cos4",
      "Finished": "0",
      "Sort": "0"
    },
    {
      "ID": 332,
      "Content": "cos5",
      "Finished": "0",
      "Sort": "0"
    }
  ]
}
*/
/*
visibility filters
var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}
*/


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul{
    list-style-type: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  li{
    transition: all 0.1s;
    //&::before{font-family: "Font Awesome 5 Free";  font-weight: 100; content: "\f0c8"; color: #ccc;}
    &:hover{
      transition: all 0.1s;
      font-weight: 900;
    }
    .done{
      text-decoration: line-through;
      color: #ccc;
    }
    .todo{
      background:none;
    }
    .green{
      color:#42b983;
    }
    button{
      &:hover{
        color:red;
      }
    }
/* CHECK BOX */
  
  }
</style>
