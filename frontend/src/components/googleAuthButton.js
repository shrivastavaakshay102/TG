// frontend/src/components/GoogleOAuthButton.js

import React from 'react';

const GoogleOAuthButton = () => {
  const handleLogin = () => {
    console.log("Logging in with Google");
  };

  const handleLogout = () => {
    console.log("Logging out");
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default GoogleOAuthButton;
