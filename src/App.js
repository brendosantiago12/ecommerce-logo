import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';

import Root from './pages/Root';

const App = ()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Root/>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;