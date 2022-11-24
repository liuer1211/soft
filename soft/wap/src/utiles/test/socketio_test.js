import io from 'socket.io-client'

// 连接服务器, 得到与服务器的连接对象
const socket = io('ws://180.76.106.221:8888')
// const socket = io('ws://localhost:4000');
socket.on('connect', function () {
  console.log('websocket连接成功');
});
// let socket = io.connect('180.76.106.221:8888')
// 绑定监听, 接收服务器发送的消息
socket.on('receiveMsg', function (data) {
  console.log('客户端接收服务器发送的消息', data)
})
// setInterval(()=>{
  // 发送消息
  socket.emit('sendMsg', {from:'001', to:'002', content:'消息'})
// },2000)

console.log('客户端向服务器发消息', {from:'001', to:'002', content:'消息'})

socket.on('disconnect', function () {
  console.log('websocket已经下线');
});
export default socket;
