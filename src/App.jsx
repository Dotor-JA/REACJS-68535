import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  { NavBar }  from "./components/NavBar";
import  ItemListContainer  from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"; 
import "./index.css";
import "bulma/css/bulma.css";    


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element = {<ItemListContainer/>} />
      <Route path='/category/:categoryId' element = {<ItemListContainer/>} />
      <Route path='/item/:itemId' element = {<ItemDetailsContainer/>} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}


