import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLOggedIn] = useState(false);

  const handleLogin = () => {
    setIsLOggedIn(true);
  };
  const handleLogOut = () => {
    setIsLOggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <button type="button" onClick={handleLogOut}>
          Log Out
        </button>
      )}
      <div>User is {isLoggedIn ? "logged in" : "not logged in"}</div>
    </div>
  );
};
