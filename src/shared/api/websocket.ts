import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const socket: WebSocket = new SockJS('http://localhost:8080/ws');
const stompClient: Stomp.Client = Stomp.over(socket);

export { stompClient };
