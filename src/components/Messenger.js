// import React, { useState, useEffect } from 'react';
// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';
// import styles from './Messenger.module.css';

// const Messenger = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [stompClient, setStompClient] = useState(null);

//   useEffect(() => {
//     const socket = new SockJS('http://localhost:8080/ws');
//     const client = Stomp.over(socket);
//     client.connect({}, () => {
//       client.subscribe('/topic/messages', (msg) => {
//         const newMessage = JSON.parse(msg.body);
//         setMessages((prevMessages) => [...prevMessages, newMessage]);
//       });
//     });
//     setStompClient(client);
//     return () => {
//       client.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (stompClient && input.trim()) {
//       const message = { from: 'User', text: input };
//       stompClient.send('/app/messages', {}, JSON.stringify(message));
//       setInput('');
//     }
//   };

//   return (
//     <div className={styles.messenger}>
//       <div className={styles.messages}>
//         {messages.map((msg, index) => (
//           <div key={index} className={styles.message}>
//             <strong>{msg.from}:</strong> {msg.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className={styles.input}
//       />
//       <button onClick={sendMessage} className={styles.button}>Send</button>
//     </div>
//   );
// };

// export default Messenger;
