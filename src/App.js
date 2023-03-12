import './App.css';
import React from "react";
import {Header} from "./components";
import {Routes, Route} from 'react-router-dom';
import {Home, Cart} from "./pages";



function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path='/' element={<Home/>} exact/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;


