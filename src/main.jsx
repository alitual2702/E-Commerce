import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Shop from './Components/Routes/Shop.jsx'
import Blog from './Components/Routes/Blog.jsx'
import Contact from './Components/Routes/Contact.jsx'
import About from './Components/Routes/About.jsx'
import Error from './Components/Routes/Error.jsx'
import CardPage from './Components/Routes/CardPage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
    <Route path='/' element={<App />} />   

    <Route path='/about' element={<About />} />    
    <Route path='/blog' element={<Blog />} />    
    <Route path='/contact' element={<Contact />} />    
    <Route path='/shop' element={<Shop />} />    
    <Route path='/product' element={<CardPage />} />    
    <Route path='/*' element={<Error />} />    


    </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
