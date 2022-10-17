import React, { useState } from 'react'
import { useAuth } from '../provider/Auth'
import {Redirect} from 'react-router-dom'
import "./Cadatro.css"

const Cadastrar = () => {
   const {setUser}=useAuth()
   const[cadastro,setCadastro]=useState({
    name:"",
    email:"",
    password:""
  })

   function handleCadastro(){
    
     if(cadastro.name && cadastro.email && cadastro.password){
        setUser(cadastro)
       localStorage.setItem('user', JSON.stringify(cadastro))
         

     }else{
       alert("prencha todos  os campos")
     }
   }


   function handleChange(e){
    const{name,value}= e.target

  
    setCadastro({ ...cadastro, [name]:value})
   }


console.log(cadastro)
  return (
    <div className='cadastrar'>
       <header>CADASTRAR</header>
       <div className='main-cadastro'>
            <div>
         <label>nome</label>
         <input type="text" placehold="digite seu nome" required  onChange={handleChange} name="name" value={cadastro.name}/>
           </div>
           <div>
         <label>email</label>
         <input type="email" placehold="digite seu email" required onChange={handleChange} name="email" value={cadastro.email}/>
           </div>
           <div>
         <label>senha</label>
         <input type="password" placehold="digite sua senha" required onChange={handleChange} name="password" value={cadastro.password}/>
           </div>
       </div>
         <button  className='btn-cadastro' onClick={handleCadastro}>CADASTRAR</button>
    </div>
  )
}

export default Cadastrar
