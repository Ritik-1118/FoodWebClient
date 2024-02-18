import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setuser] = useState("");

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [food, setFood] = useState([]);
  const [isloading, setLoading] = useState(true);
  const autheader = `Bearer ${token}`;
  // Store Token in local storage
  const storetokeinLs = (servertoken) => {
    setToken(servertoken);
    localStorage.setItem("token", servertoken);
  };
  // check wheteher token present or not
  let islogin = !!token;
  //   Logout funxtion4

  const Logoutuser = () => {
    setToken("");
    localStorage.removeItem("token");
  };
  // JWt verification
  const userAuthentication = async () => {
    try {
      const response = await fetch(
        "https://foodhut-d4sp.onrender.com/auth/user",
        {
          method: "GET",
          headers: {
            Authorization: autheader,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setuser(data.userdata);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {}
  };
  const getFood = async () => {
    try {
      const response = await axios.get(
        "https://foodhut-d4sp.onrender.com/food",
        {
          withCredentials: true,
        }
      );
      setFood(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFood();
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        food,
        islogin,
        userData,
        user,
        isloading,
        autheader,
        storetokeinLs,
        Logoutuser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
