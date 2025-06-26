// import React, { useEffect, useState, useContext, useRef } from 'react';
// import io from 'socket.io-client';
// import axios from 'axios';
// import '../style/Chatboard.css';
// import LogoutButton from './LogoutButton';
// import { userContext } from '../Context';
// import { useAuth0 } from '@auth0/auth0-react';  
// import ChatApps from './ChatApps';
// const socket = io('http://localhost:5000');

// export default function Chatboard() {
//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);
//     const { user } = useAuth0();
//     // const [userInfo, setUserInfo] = useState(user);
//   let currUser = user.name;
//     // const [user, setUser] = useState('User' + Math.floor(Math.random() * 1000));
//        const [userrr, setUser] = useState(currUser)
//        const ChatMessage = ({ message, onEdit, onDelete }) => {
//         const [showOptions, setShowOptions] = useState(false);
//         const menuRef = useRef(null);
      
//         // Close menu when clicking outside
//         useEffect(() => {
//           const handleClickOutside = (event) => {
//             if (menuRef.current && !menuRef.current.contains(event.target)) {
//               setShowOptions(false);
//             }
//           };
//           document.addEventListener('mousedown', handleClickOutside);
//           return () => document.removeEventListener('mousedown', handleClickOutside);
//         }, []);
      
//     useEffect(() => {
//       // Load existing messages
//       axios.get('http://localhost:5000/messages').then(res => {
//         setMessages(res.data);
//       });
  
//       // Listen for new messages
//       socket.on('receiveMessage', (msg) => {
//         setMessages(prev => [...prev, msg]);
//       });
//     }, []);

//   console.log(currUser,">>>>>>>>>>>>>>>>>>>>>>>>>>>");
  
//     useEffect(() => {
//       if (messages.length > 0) {
//         console.log(messages[0].user, "+++++");
//         let n = messages[0].user
//           console.log(typeof n);
  
//         if (messages[0].user == 'User537') {
//           console.log("Turu");
//         }
//         else{
//           console.log("False");
//         }
//       }
//     }, [messages]);
    
//     const showOption =() =>
//     {
//       // alert("option")
//       console.log('clicked');
//     }
  
  
  
//     const sendMessage = () => {
//       if (message.trim()) {
//         const msg = {user: currUser, message };
//         // const msg = {currUser, message}
//         socket.emit('sendMessage', msg);
//         setMessage('');
//       }
//     };
//   return (
//     <div>
//     <div>
//       <LogoutButton/>
//     </div>
//     <div class="chatboard-heading">
//     <h2>Chat App</h2>
//     </div>
     
//       <div style={{ height: 300, overflowY: 'scroll', border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
//         {messages.map((msg, idx) => (
//           <div key={idx}><strong>{msg.user}</strong>: {msg.message} <button onClick={showOption}> <div style={styles.chatMessage}>
//       {message}
//       <button
//         style={styles.optionsButton}
//         onClick={() => setShowOptions((prev) => !prev)}
//       >
//         ⋮
//       </button>

//       {showOptions && (
//         <div ref={menuRef} style={styles.optionsMenu}>
//           <button onClick={onEdit}>Edit</button>
//           <button onClick={onDelete}>Delete</button>
//         </div>
//       )}
//     </div>
// </button></div>
//         ))}
//       </div>

          

//       <input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//         placeholder="Type your message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   )
// }


import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import '../style/Chatboard.css';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';  

const socket = io('http://localhost:5000');

const ChatMessage = ({ msg, onEdit, onDelete }) => {
  const [showOptions, setShowOptions] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={styles.chatMessageWrapper}>
      <strong>{msg.user}</strong>: {msg.message}
      <button
        style={styles.optionsButton}
        onClick={() => setShowOptions((prev) => !prev)}
      >
        ⋮
      </button>

      {showOptions && (
        <div ref={menuRef} style={styles.optionsMenu}>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default function Chatboard() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { user } = useAuth0();
  const currUser = user.name;

  useEffect(() => {
    axios.get('http://localhost:5000/messages').then((res) => {
      setMessages(res.data);
    });

    socket.on('receiveMessage', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const msg = { user: currUser, message };
      socket.emit('sendMessage', msg);
      setMessage('');
    }
  };

  const handleEdit = (index) => {
    const updatedText = prompt("Edit your message:", messages[index].message);
    if (updatedText) {
      const updatedMessages = [...messages];
      updatedMessages[index].message = updatedText;
      setMessages(updatedMessages);
    }
  };

  const handleDelete = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  return (
    <div>
      <LogoutButton />
      <div className="chatboard-heading">
        <h2>Chat App</h2>
      </div>

      <div
        style={{
          height: 300,
          overflowY: 'scroll',
          border: '1px solid #ccc',
          marginBottom: 10,
          padding: 10,
        }}
      >
        {messages.map((msg, idx) => (
          <ChatMessage
            key={idx}
            msg={msg}
            onEdit={() => handleEdit(idx)}
            onDelete={() => handleDelete(idx)}
          />
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

const styles = {
  chatMessageWrapper: {
    position: 'relative',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
  },
  optionsButton: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
  optionsMenu: {
    position: 'absolute',
    top: '35px',
    right: '10px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 100,
  },
};
