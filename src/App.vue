<template>
  <div id="app">
    <router-link class="rot" to="/SeriousMod">Ser </router-link>

    <router-link class="rot" to="/home">HOme </router-link>

    <router-link class="rot" to="/index">index</router-link>

    <router-view></router-view>

  </div>

</template>

<script>
import PubSub from 'pubsub-js'

export default {
  name:'App',
  // components:{
  //   HomeView
  // }
  data() {
          return {
            prompt: ''
          }
        },
  methods: {
    sendMsg() {
            PubSub.publish('userEvent',this.prompt); //发布消息
    },
    login() {
         console.log(this.prompt)         
     }  
   }
}
</script>


<style scoped>
  /* .app{
    background-color: black;
  } */
  .rot{
    height: 10px;
    width: 50px;
    color: black;
  }
  .login-input{
    height: 10px;
    width: 100px;
    color: black;
  }

</style>
