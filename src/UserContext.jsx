import {createContext,useContext,useState} from 'react'

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) =>{
  const [isActive, setActive] = useState(false);
 return (
    <UserContext.Provider value={{isActive, setActive}}>
        {children}
    </UserContext.Provider>
 )   
}