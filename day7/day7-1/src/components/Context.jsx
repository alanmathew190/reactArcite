import { createContext, useState } from "react";


export const userContext = createContext();



function UserProvider({ children }) {
    let [user, setUser] = useState({
        name: "Alan",
        age:22
    })
  let [count, setCount] = useState(0)
  
  let[darkMode,setDarkMode]=useState(false)

  return (
    <userContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider