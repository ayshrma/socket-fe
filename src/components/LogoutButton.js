import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { userContext } from "../Context";
const LogoutButton = () => {
  const {user, logout } = useAuth0();
  const [userInfo, setUeserInfo] = useState(user)
  console.log(userInfo,"????");

  return (
    <div> 
     <userContext.Provider value={userInfo}>

</userContext.Provider>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </div>
  );
};

export default LogoutButton;