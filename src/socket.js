import io from 'socket.io-client';

var socket;

const connectSocket = (user_id)=>{
    socket = io("http://localhost:5000",{
        query:`user_id=${user_id}`
    })
    // console.log(socket)
}


export {socket, connectSocket};
