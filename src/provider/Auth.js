import React, { useEffect, useState } from "react";



export const AuthContext=  React.createContext()

export const AuthProvider= (props)=>{

    const[user,setUser]=  useState({
      name:"",
      email:"",
      password:""
    })
    const[logint, setLogint]=useState({
     // email:"",
      //password:""
    })

    const[product,setProduct]=useState({
    
    })
console.log(logint)

    useEffect(() => {
      const userStorage = localStorage.getItem("user");
      if (userStorage) {
        setUser(JSON.parse(userStorage));
      } else {
        setUser("")
      
      }
    }, []);

   
  


    return (
        <AuthContext.Provider value={{ user, setUser,logint,setLogint ,product,setProduct}}>
          {props.children}
        </AuthContext.Provider>
      );
  
}

export const useAuth=()=> React.useContext(AuthContext)