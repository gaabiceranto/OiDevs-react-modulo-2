
import React from 'react';
import styled from 'styled-components';
import { Home } from './pages/home';
import { Login } from './pages/login';


function funcaoMemoizada(){
  return "teste" 
}



function App() {
  const [currentPage, setCurrentPage] = React.useState("login");

  return (
    <>
      {currentPage === "login" && <Login onClickHomeButton={setCurrentPage} />}
      {currentPage === "home" && <Home onClickLoginButton={setCurrentPage} />}
    </>
  );
}


export default App
