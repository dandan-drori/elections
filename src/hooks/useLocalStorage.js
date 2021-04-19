import { useState, useEffect } from "react";

const useLocalStorage = (api, email) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  if (email) {
    const userInLocalStorage = localStorage.getItem("userEmail");
    if (userInLocalStorage) {
      setIsUserAuthenticated(true);
    } else {
      setIsUserAuthenticated(false);
    }
  }

  useEffect(() => {
    const makeApiCall = async () => {
      const response = await api.get("/login");
      response?.data.forEach((user) => {
        if (email) {
          if (user.email === email) {
            localStorage.setItem("userEmail", email);
            setIsUserAuthenticated(true);
          }
        } else {
          if (user.email === localStorage.getItem("userEmail")) {
            setIsUserAuthenticated(true);
          }
        }
      });
    };
    makeApiCall();
  }, [api, email]);

  return isUserAuthenticated;
};

export default useLocalStorage;
