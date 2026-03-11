//import { useEffect, useReducer, useRef, useState } from 'react'
import Home from './pages/home/Home';
import { ThemeContext } from './context/ThemeContext';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import List from './pages/list/List';
import store from './redux/store';
import { Provider } from 'react-redux';
import { lazy } from 'react';
import Users from './pages/users/Users';

const List = lazy(()=> import('./pages/list/List'));



//import { countReducer } from './reducer/CountReducer';

//import './App.css'



function App() {

  
 
  return (
    <>     
      <Provider store={store}>
        <ThemeContext.Provider value = "dark">
          <Router>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/list" element={<List/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
              </Route>
            </Routes>
          </Router>
        </ThemeContext.Provider>
      </Provider>      
    </>
  )
}

export default App
