<template>
<div class="home">
    <div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Mysocket',
    data() {
        return {
            socket: null,
            DATA_BUFFER: '',
            TRANSFER_SIZE: 1024
        }
    },
    created() {
this.socket =new WebSocket('ws://127.0.0.1:8765');
this.DATA_BUFFER='';
this.TRANSFER_SIZE=1024;
// 连接建立时触发  
this.socket.onopen = function(event) {  
    console.log('Connected to server!');
}; 
// 接收到来自服务器的消息时触发  
this.socket.onmessage = function(event) {  
    console.log('Message from server: ', event.data); 
    // 从服务器收到READY__代表正在经行大量数据传输，执行对应逻辑
    if(event.data == 'READY__' && DATA_BUFFER == '')
    {
        
        socket.send('message_have_sent_done');
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
        }
    }
    if(event.data.length > 14 )
    {
        if(event.data.slice(0,14) == 'WST_IMG_RETURN')
        {
            console.log(event.data.slice(14,event.data.length));
        }
    }

};  

// 大量数据分片发送，在使用时先对全局变量DATA_BUFFER赋值，这个函数就会不断发送消息直到完成
// 完成发送后，会向服务器返回'message_have_sent_done'
function MY_SOCKET_sender()
{
    if(DATA_BUFFER.length > TRANSFER_SIZE)
    {
        socket.send(DATA_BUFFER.slice(0,TRANSFER_SIZE));
        DATA_BUFFER=DATA_BUFFER.slice(TRANSFER_SIZE,DATA_BUFFER.length);
    }
    else
    {
        socket.send(DATA_BUFFER);
        DATA_BUFFER='';
    }
}


//----------------------------------------------------------------
//chat的示例代码
// var socket = new WebSocket('ws://127.0.0.1:8765');  



// DATA_BUFFER='';
// TRANSFER_SIZE=1024;

// // 连接建立时触发  
// socket.onopen = function(event) {  
//     console.log('Connected to server!');
//     DATA_BUFFER=JSON.stringify({ 'message':  [
//         {
//             "role": "user",
//             "content": "你能告诉我什么是人工智能吗？"
//         },
//         {
//             "role": "assistant",
//             "content": "人工智能是指由人制造出来的系统能够模拟人类智能行为的技术。它包括机器学习、自然语言处理、计算机视觉等多个领域。"
//         },
//         {
//             "role": "user",
//             "content": "那么机器学习又是什么呢？"
//         },
//         {
//             "role": "assistant",
//             "content": "机器学习是人工智能的一个分支，它让计算机能够通过数据分析和模式识别来学习和改进，而无需每一步都进行明确的编程。"
//         },
//         {
//             "role": "user",
//             "content": "机器学习有哪些应用呢？"
//         }
//         ]})
//     socket.send('chat');
// }; 
// // 接收到来自服务器的消息时触发  
// socket.onmessage = function(event) {  
//     console.log('Message from server: ', event.data); 
//     // 从服务器收到READY__代表正在经行大量数据传输，执行对应逻辑
//     if(event.data == 'READY__' && DATA_BUFFER == '')
//     {
//         socket.send('message_have_sent_done');
//     }
//     else if(event.data == 'READY__')
//     {
//         MY_SOCKET_sender();
//     } 
    
//     if(event.data.length > 11 )
//     {
//         if(event.data.slice(0,11) == 'CHAT_RETURN')
//         {
//             console.log(event.data.slice(11,event.data.length));
//         }
//     }

// };  

// // 大量数据分片发送，在使用时先对全局变量DATA_BUFFER赋值，这个函数就会不断发送消息直到完成
// // 完成发送后，会向服务器返回'message_have_sent_done'
// function MY_SOCKET_sender()
// {
//     if(DATA_BUFFER.length > TRANSFER_SIZE)
//     {
//         socket.send(DATA_BUFFER.slice(0,TRANSFER_SIZE));
//         DATA_BUFFER=DATA_BUFFER.slice(TRANSFER_SIZE,DATA_BUFFER.length);
//     }
//     else
//     {
//         socket.send(DATA_BUFFER);
//         DATA_BUFFER='';
//     }
// }



//----------------------------------------------------------------
// // 创建一个新的 WebSocket 连接  
// var socket = new WebSocket('ws://localhost:8765');  
  
// // 连接打开时触发  
// socket.onopen = function(event) {  
//     console.log('WebSocket is open now.');  
//     // 发送一条消息到服务器  
//     socket.send('Hello Server!');  
// };  
  
// // 接收到来自服务器的消息时触发  
// socket.onmessage = function(event) {  
//     console.log('Message from server: ', event.data);  
// };  
  
// // 连接关闭时触发  
// socket.onclose = function(event) {  
//     if (event.wasClean) {  
//         console.log('WebSocket connection closed cleanly, code=' + event.code + ' reason=' + event.reason);  
//     } else {  
//         console.log('WebSocket connection died');  
//     }  
// };  
  
// // 捕获连接错误  
// socket.onerror = function(error) {  
//     console.log('WebSocket Error: ' + error);  
// };  
  
// // 你可以通过发送消息来与服务器进行通信  
// // 例如，你可以添加一个按钮，当用户点击时发送消息  
// // document.getElementById('send-button').addEventListener('click', function() {  
// //     var message = document.getElementById('message-input').value;  
// //     socket.send(message);  
// // });
    },
}

</script>
