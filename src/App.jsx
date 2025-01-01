import React from 'react'
import { BrowserRouter as Router , Routes ,  Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/blogs' element = {<Blogs/>} />
      <Route path='/blogs/:id' element = {<SingleBlog/>} />
    </Routes>

   </Router>
  )
}

export default App
