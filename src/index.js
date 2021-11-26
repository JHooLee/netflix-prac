import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, Login, Home, Detail, Recommendation, NotFound } from "pages";
// ./pages 안쓴다(webpack.config에서 절대경로 설정)

import './index.css'

const App = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/recommend' element={<Recommendation/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    );
  };
  
  ReactDOM.render(<BrowserRouter>
  <App/>
  </BrowserRouter>, document.getElementById("app"));