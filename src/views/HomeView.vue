<template>
  <div class="prompt">
    <input class="input" type="text" v-model="prompt" placeholder="请输入prompt">
    <button class="login-button" @click="sendMsg">数据传输</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: 'HomeView',
  data() {
    return {
      prompt: ''
    }
  },
  methods: {
    sendMsg() {

      PubSub.publish('userEvent', this.prompt) // 发布消息
      this.$router.push({
        path: '/SeriousMod'
      })
    }
  }

}
</script>


<style scoped>
  .input{
    background-color: #212121;
    max-width: 380px;
    height: 80px;
    padding: 20px;
    /* text-align: center; */
    font-size: large;
    font-family: 'Courier New', Courier, monospace;
    border: 2px solid white;
    border-radius: 5px;
  }
  .input:focus {
    color: rgb(0, 255, 255);
    background-color: #212121;
    outline-color: rgb(0, 255, 255);
    box-shadow: -3px -3px 15px rgb(0, 255, 255);
    transition: .1s;
    transition-property: box-shadow;
  }
  .prompt{
    width: 100%;
    height: 100%;
    background-image: url(./home/img/16.png);
    background-size: 100% ;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

</style>
