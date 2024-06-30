<template>
  <div class="but">
    <button class="button" ref="chat_button"  @click="generatechat">chat</button>
    <button class="button" ref="wst_img_button" @click="generatepro">img</button>
  </div>
</template>

<script>
import SeriousMod from './SeriousMod.vue';

export default {
  components: { SeriousMod },
  name: 'MainProgram',
  data () {
    return {
      text:'',
      Myimg:{ url:[] ,state: false},
      Myimg1:{ url:[] ,state: false},
      socket: null,
      DATA_BUFFER: '',
      TRANSFER_SIZE: 1024,
      buttonState: true
    }
  },
  methods: {
    // ***************通讯与用户事件逻辑处理方法*****************
    'wst_img': function(mess){
      this.DATA_BUFFER=JSON.stringify({ 'message':{
        'height': 768,
        'width': 576,
        'prompt': mess,
        'batchSize':3,
        'styleConfig': '8fe3d641be3e589dad231dc6c3b1429a'
        }})
        this.socket.send('wst_img');
      },
    'chat':function(mess){
      this.DATA_BUFFER=JSON.stringify({ 'prompt': mess })
      this.socket.send('chat');      
    },
    //**********************逻辑处理方法**************************************************************************
   
    generatechat:function(){
      let mess = "谈论关于现代科技感汽车"
      console.log(mess)
      this.chat(mess)
    },

    generatepro: function(){
      let StringSend="用以下关键词画一幅画 科技"+"汽车" +" "+" 公路"+"奔驰";
      console.log(StringSend);
      this.wst_img(StringSend);
    }
  },

  
  mounted() {
   
  this.socket =new WebSocket('ws://127.0.0.1:8765');
  this.DATA_BUFFER='';
  this.TRANSFER_SIZE=1024;
  console.log(this.DATA_BUFFER)
  // 连接建立时触发  
  this.socket.onopen = function(event) {  
      console.log('Connected to server!');
  }; 
  // 接收到来自服务器的消息时触发  
  this.socket.onmessage = (event) => { 
    const MY_SOCKET_sender = () =>{
      // 大量数据分片发送，在使用时先对全局变量DATA_BUFFER赋值，这个函数就会不断发送消息直到完成
      // 完成发送后，会向服务器返回'message_have_sent_done'
        if(this.DATA_BUFFER.length > this.TRANSFER_SIZE)
        {
            this.socket.send(this.DATA_BUFFER.slice(0,this.TRANSFER_SIZE));
            this.DATA_BUFFER=this.DATA_BUFFER.slice(this.TRANSFER_SIZE,this.DATA_BUFFER.length);
        }
        else
        {
            this.socket.send(this.DATA_BUFFER);
            this.DATA_BUFFER='';
        }
    }
      console.log('Message from server: ', event.data); 
      // 从服务器收到READY__代表正在经行大量数据传输，执行对应逻辑
      if(event.data == 'READY__' && this.DATA_BUFFER == '')
      {
        this.socket.send('message_have_sent_done');
      }
      else if(event.data == 'READY__')
      {
        MY_SOCKET_sender();
      }
      if(event.data.length > 11 )
      {
        if(event.data.slice(0,11) == 'CHAT_RETURN')
        {
          console.log(event.data.slice(11,event.data.length));
          this.text=event.data.slice(14,event.data.length);
        }
      }
      if(event.data.length > 14 )
      {
          if(event.data.slice(0,14) == 'WST_IMG_RETURN')
          {            
            console.log(event.data.slice(14,event.data.length))
            let text=event.data.slice(14,event.data.length);
            // 合并所有需要去除的字符到一个正则表达式中
            let combinedRegex = /[\\"[\]]/g;

            // 使用合并的正则表达式一次性去除所有不需要的字符
            text = text.replace(combinedRegex, '');
            console.log(text);
            this.Myimg.url = text.split(',')
            console.log(this.Myimg.url[0])
            console.log(this.Myimg.url[1])
            this.Myimg.state=true;
            this.buttonState=false;
          }
      }
    
      };  
  }
}

</script>

<style>
  .but{
    text-align: center;
  }
   #AIGC{
      border-radius:3px;
      
      box-shadow:rgba(0,0,0,0.15) 0 0 8px;
      
      background:#FBFBFB;
      
      border:2px solid #ddd;
      
      margin:10px auto;
      
      margin-left: 15px;
      
      padding:5px;
      
   } 
   .button{
      height: 50px;
      width: 200px;
      color: #ddd;
   }
   #text{
    height: 50px;
    width: 50px;
   }
   #wz{
    height: 100%;
    width: 100%;
   }
</style>
