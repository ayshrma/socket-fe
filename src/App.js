import React, { useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import io from 'socket.io-client';
import axios from 'axios';
import Chatboard from './components/Chatboard';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { User, useAuth0 } from '@auth0/auth0-react';

const socket = io('http://localhost:5000');

function App() {

    const {user, loginWithRedirect, isAuthenticated}  =useAuth0()

    // console.log(user.name);
  return (
    <div style={{ padding: '20px' }}>
    {/* <h1>Hello {user.name}</h1> */}
      {/* <LoginButton/>
      <LogoutButton/>
      <Chatboard/> */}
      {isAuthenticated ? ( <div> <h1>Hello {user.name}</h1> <Chatboard/>
      </div>
      ): (
     <LoginButton/> )}
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// // import { useAuth0 } from '@auth0/auth0-react';
// import io from 'socket.io-client';
// import axios from 'axios';
// import Chatboard from './components/Chatboard';
// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/LogoutButton';
// import { User, useAuth0 } from '@auth0/auth0-react';

// const socket = io('http://localhost:5000');

// function App() {

//     const {user, loginWithRedirect, isAuthenticated}  =useAuth0()

//     // console.log(user.name);
//   return (
//     <div style={{ padding: '20px' }}>
//     {/* <h1>Hello {user.name}</h1> */}
//       {/* <LoginButton/>
//       <LogoutButton/>
//       <Chatboard/> */}
//       <Chatboard/>
//       {/* {isAuthenticated ? ( <div> <h1>Hello {user.name}</h1> <LogoutButton/>
//       </div>
//       ): (
//      <LoginButton/> )} */}
//     </div>
//   );
// }

// export default App;











































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function App() {
//   const [message, setMessage] = useState([]);

//   useEffect(() => {
//     axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2706c4cd0af34f9f8ed0c8d70784503b')
//       .then(res => {
//         setMessage(res.data.articles);
//         console.log(res.data.articles);
//       })
//       .catch(err => {
//         console.error('Error fetching news:', err);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Top Headlines</h1>
//       <ul>
//         {message.map((article, index) => (
//           <li key={index}>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               {article.title}
//             </a>
//             {article.urlToImage && (
//               <img
//                 src={article.urlToImage}
//                 alt={article.title}
//                 style={{ width: '400px', display: 'block', marginTop: '8px' }}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
