import { createContext, useContext, useState, useEffect } from "react";
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
