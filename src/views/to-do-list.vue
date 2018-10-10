<template>
  <div class="main">
    <label class="grid-top">
      <p class="wrapper"><input v-model="title" class="title" placeholder=""></p>
    </label>
    <ul class="list">
      <li v-for="(item, index) in tasks" :key="index">
        <input type='checkbox' v-bind:id="index" v-model="item.completed"/>
        <label v-bind:for="index" class="content-label">
          <span v-bind:class="{ done: item.completed }" v-if="item.completed === true"> {{ item.title }} status: done </span>
          <span v-bind:class="{ todo: !item.completed }" v-if="item.completed === false"> {{ item.title }} status: to-do </span>
        </label>
        <button v-on:click="deleteTask(item)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </ul><br/>
    <form v-on:submit="addTask();" class="task-input"> 
      <button type="submit" value="" required="required" pattern="[A-Za-z0-9 ]{1,20}"><i class="fas fa-plus"></i></button>
      <input type="text" v-model="tasks.title" required="required" placeholder="What is there left to do?">
    </form>
  </div>
</template>

<script>
//import json from 'https://qunabu.com/api/todos.json'
export default {
  name: 'main',
  data: function() {
    return{
      title: "Your todo app name",
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
  background: url('') cover;
  border: 1px solid #9eb2c0;
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
  }
}
.done{
  text-decoration: line-through;
  color: #9eb2c0;
}
.todo{
  color: #2e3641;
}
.title{
  border: none;
  text-align: center;
  font-family: 'Lato', serif;
  font-size: 1em;
  background:#2e3641;
  color: #9eb2c0;
}
.grid-top{
  display: grid;
  grid-area:name;
  background:#2e3641;
}
.wrappper{
  grid-area: name;
  display: grid;
}
.wrapper:before {
  font-family: "Font Awesome 5 Free";
  color:#9eb2c0;
  position: relative;
  font-weight: 900;
  left:-5px;
  content: "\f013";
}
.cogwheel{
  border:none;
  background:none;
  background:#2e3641;
  color: #9eb2c0;
}
.main{
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.5fr;
  grid-template-rows: repeat(3,auto);
  grid-template-areas: ". name ."
                       " . list ."
                       " . input .";
}
.list{
  display: grid;
  grid-area: list;
  li{
    &:last-child{
      border: none;
      /*
      &::after{
        content: "";
        position:relative;
        top:1em;
        width: 100%;
        background: darkgray;
        -webkit-clip-path: polygon(0 50%, 100% 50%, 85% 100%, 15% 100%);
        clip-path: polygon(0 50%, 100% 50%, 85% 100%, 15% 100%);
      }*/
    }
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    border-bottom: 1px solid #9eb2c0;
    grid-template-areas: "check content delete";
    button{
      background: none;
      border: none;
      display: grid;
      grid-area: delete;
      &:hover{
        color:red;
        background: none;
        border: none;
      }
    }
    label{
      display: grid;
      grid-template-columns: 1fr 11fr;
    }
    input[type=checkbox] {
      display: none;
      border-right: red solid 1px;
    }

    input[type=checkbox] + label {
      background: none;
      padding: 0;
      display: grid;
      grid-area: content;
      cursor: pointer;
      &::before{
        font-family: "Font Awesome 5 Free";
        display: inline;
        font-weight: 300;
        font-size: 1em;
        content: "\f0c8";
        color:#9eb2c0;
        display: flex;
        padding: auto;
      }
    }
    input[type=checkbox]:checked + label {
      background: none;
      padding: 0;
      cursor: pointer;
      &::before{
        font-family: "Font Awesome 5 Free";
        font-weight: 600;
        font-size: 1em;
        content:"\f00c";
        color:green;
        display: flex;
        padding: auto;
      }
    }
  }
}
.task-input{
  display: grid;
  grid-template-columns: 0.5fr 11fr 0.5fr;
  grid-area: input;
  border: 1px solid #9eb2c0;
  input{
    border:none;
  }
  button{
    border:none;
    background:none;
  }
}
</style>
