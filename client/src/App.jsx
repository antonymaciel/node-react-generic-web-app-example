import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Page from './components/Page'



const MainPage = () => {
  const [pageName, setPageName] = useState("Home"); // parse page route instead

  const handleChangePage = (page) => {
    setPageName(page); // go to page route instead
  }


  return (<>Hi</>)



}

const Test = () =>{
  const [pageName, setPageName] = useState("Home"); // parse page route instead
  const handleChangePage = (page) => {
    setPageName(page); // go to page route instead
  }


  return (
    <Page handleChangePage={handleChangePage} pageName={pageName}>
      <Home />
    </Page>
  );
};

/*
<Page handleChangePage={handleChangePage} pageName={pageName}>
Hi
</Page>
*/

const App = () => {


  return (
    <Test />
  ) 
}

export default App;



  /* <Page handleChangePage={handleChangePage} pageName={pageName}> */