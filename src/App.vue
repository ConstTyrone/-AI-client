<template>
  <div id="app">
    <router-link class="rot" to="/SeriousMod">Ser</router-link>
    <br>
    <router-link class="rot" to="/home">HOme</router-link>
    <br>
    <router-link class="rot" to="/AdvanceMod">Adcance</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>



<script>
// import HomeView from './views/HomeView.vue';
export default {
  name:'App',
  // components:{
  //   HomeView
  // }
}
</script>


<style>
  .rot{
    height: 10px;
    width: 50px;
    color: black;
  }

</style>
