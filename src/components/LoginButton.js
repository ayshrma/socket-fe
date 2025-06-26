import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../style/LoginButton.css'

const LoginButton = () => {
  const {user, loginWithRedirect } = useAuth0();
  console.log(user,"///////////////");  

  return <div className="container">
  <button className="main-login-button" onClick={() => loginWithRedirect()}>Log In</button>
  {/* <LoginButton/> */}
  </div>
  ;
};

export default LoginButton;