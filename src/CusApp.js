import './App.css';
import { Route,Routes } from "react-router-dom";
import Record from './components/clientSide/movieList';
import NavBar from './components/navBar';
import Home from './components/clientSide/Home';
import Items from './components/clientSide/movieList';
import Movie from './components/clientSide/movie';


function CusApp() {
  return (
    <div>

    {/* <NavBar/>   */}

    <Routes>
    {/* <Route exact path="/" element={<Home/>}/> */}
    <Route exact path="/items" element={<Items/>}/>
    <Route exact path="/movie/:id" element={<Movie/>}/>
    </Routes>
    
    </div>
  ) 
  }

export default CusApp;