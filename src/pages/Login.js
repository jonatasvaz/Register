import React, { useState } from 'react'
import "./Login.css"
import { useAuth } from '../provider/Auth'
import {  Link } from 'react-router-dom'

const Login = () => {

 const{user}= useAuth()

  const[login,setLogin]=useState({
    email:"",
    password:""
  })
  function handleLogin(e){
    const{name,value}=e.target
    setLogin({...login, [name]:value})

  } 
   function handleSubmitLogin(){
           if(user.email===login.email && user.password===login.password){
             alert("login   com sucesso")
           }else{
                  alert("email ou senha com erro tente novamente")
           }
   }

   console.log(login)
  return (
    <div className='login'>
       <header>LOGIN</header>
       <div className='login-main'>
            <div>
         <label>email</label>
         <input type="email" placehold="digite seu email" required  onChange={handleLogin} name="email"  />
           </div>
           <div>
         <label>senha</label>
         <input type="password" placehold="digite sua senha" required   onChange={handleLogin} name="password" />  
           </div>
           <span className='span'> <Link to="/cadastrar" >faça o cadastro</Link>  </span>
       </div>
             <div >
      
         <button  className='btn-login'  onClick={handleSubmitLogin}>LOGIN</button>
             </div>
    </div>
  )
}

export default Login
