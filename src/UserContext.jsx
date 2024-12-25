import { createContext, useContext, useState, useEffect } from "react";
import { apiClient } from "./api";
import Cookies from "js-cookie";
const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isActive, setActive] = useState(false);
  const [token, setToken] = useState(null);
  const [decodeData, SetdecodeData] = useState({});
  const [profileImg, setProfileImg] = useState("");
  const [user, setUser] = useState([]);
   const [topic, setTopic] = useState([]);
   const [filter, setFilterArticle] = useState([]);
   
   useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedDecode = localStorage.getItem('decode')
    if (savedToken && savedDecode) {
      setToken(savedToken);
      SetdecodeData(savedDecode)
    }
  }, []);
   useEffect(() => {
    if (token && decodeData) {
      
      localStorage.setItem('token', token); // Save token to localStorage
      localStorage.setItem('decode', decodeData.username )
    } else {
      localStorage.removeItem('token'); 
      localStorage.removeItem('decode')
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        isActive,
        setActive,
        token,
        setToken,
        decodeData,
        SetdecodeData,
        profileImg,
        setProfileImg,
        user,
        setUser,
        topic,
        setTopic,
        filter,
        setFilterArticle
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
