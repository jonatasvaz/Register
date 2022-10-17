import './App.css';
import{BrowserRouter , Routes,Route,Navigate}from "react-router-dom"
 import Home from "./pages/Home"
 import About from "./pages/About"
 import Cadastrar from "./pages/Cadastrar"
 import Login from './pages/Login';
  import Comprar from"./pages/Comprar"
   import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

<BrowserRouter>
     <Navbar/>
         <Routes>
             <Route path="/" element={<Home/>} exact/>
             <Route path="/about" element={<About/>}/>
             <Route path="/cadastrar" element={<Cadastrar/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/comprar" element={<Comprar/>}/>
         </Routes>
         </BrowserRouter>  


    </div>
  );
}

export default App;
