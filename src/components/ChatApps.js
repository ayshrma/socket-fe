// import React, { useState, useRef, useEffect } from 'react';

// const ChatMessage = ({ message, onEdit, onDelete }) => {
//   const [showOptions, setShowOptions] = useState(false);
//   const menuRef = useRef(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowOptions(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div style={styles.chatMessage}>
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
//   );
// };

// // Example usage
// const ChatApps = () => {
//   const [messages, setMessages] = useState(['Hello, this is a message!']);

//   const handleEdit = (index) => {
//     const newMessage = prompt('Edit your message:', messages[index]);
//     if (newMessage !== null) {
//       const updated = [...messages];
//       updated[index] = newMessage;
//       setMessages(updated);
//     }
//   };

//   const handleDelete = (index) => {
//     const updated = messages.filter((_, i) => i !== index);
//     setMessages(updated);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       {messages.map((msg, i) => (
//         <ChatMessage
//           key={i}
//           message={msg}
//           onEdit={() => handleEdit(i)}
//           onDelete={() => handleDelete(i)}
//         />
//       ))}
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   chatMessage: {
//     position: 'relative',
//     padding: '10px',
//     marginBottom: '10px',
//     background: '#f0f0f0',
//     borderRadius: '8px',
//     width: 'fit-content',
//   },
//   optionsButton: {
//     background: 'none',
//     border: 'none',
//     fontSize: '18px',
//     position: 'absolute',
//     top: '5px',
//     right: '5px',
//     cursor: 'pointer',
//   },
//   optionsMenu: {
//     position: 'absolute',
//     top: '30px',
//     right: '5px',
//     background: 'white',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
//     zIndex: 10,
//   },
// };

// export default ChatApps;

import React, { useState, useRef, useEffect } from 'react';

const ChatMessage = ({ message, onEdit, onDelete }) => {
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
    <div style={styles.chatMessage}>
      {message}
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

// Example usage
const ChatApps = () => {
  const [messages, setMessages] = useState(['Hello, this is a message!']);

  const handleEdit = (index) => {
    const newMessage = prompt('Edit your message:', messages[index]);
    if (newMessage !== null) {
      const updated = [...messages];
      updated[index] = newMessage;
      setMessages(updated);
    }
  };

  const handleDelete = (index) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
  };

  return (
    <div style={{ padding: '20px' }}>
      {messages.map((msg, i) => (
        <ChatMessage
          key={i}
          // message={msg}
          onEdit={() => handleEdit(i)}
          onDelete={() => handleDelete(i)}
        />
      ))}
    </div>
  );
};

// Inline styles
const styles = {
  chatMessage: {
    // position: 'relative',
    // padding: '10px',
    // marginBottom: '10px',
    background: '#f0f0f0',
    // borderRadius: '8px',
    // width: 'fit-content',
  },
  // optionsButton: {
  //   background: 'none',
  //   // border: 'none',
  //   fontSize: '18px',
  //   position: 'absolute',
  //   top: '5px',
  //   marginLeft: '4%',
  //   right: '5px',
  //   cursor: 'pointer',
  // },
  // optionsMenu: {
  //   position: 'absolute',
  //   top: '30px',
  //   right: '5px',
  //   background: 'white',
  //   border: '1px solid #ccc',
  //   borderRadius: '4px',
  //   boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
  //   zIndex: 10,
  // },
};

export default ChatApps;
