import { createContext, useState } from "react";


export const userContext = createContext();



function UserProvider({ children }) {
    let [user, setUser] = useState({
        name: "Alan",
        age:22
    })
  return (
      <userContext.Provider value={ user }>
          {children}
    </userContext.Provider>
  )
}

export default UserProvider