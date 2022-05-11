import './App.css';
import { Route,Routes } from "react-router-dom";
import Record from './components/clientSide/movieList';
import NavBar from './components/navBar';
import Home from './components/clientSide/Home';
import Items from './components/clientSide/movieList';
import Movie from './components/clientSide/movie';
import Addmovie from './components/movie/Addmovie';
import Dismovie from './components/movie/Dismovie'
import CusApp from './CusApp';
import AdminApp from './AdminApp';



function App() {
  return (
    <div>

    <NavBar/>  

    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/customer" element={<CusApp/>}/>
    <Route exact path='admin' element={<AdminApp/>}/>
    </Routes>
    
    </div>
  ) 
  }

export default App;
