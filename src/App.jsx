import React from 'react'
import { BrowserRouter as Router , Routes ,  Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';
import Layout from './layout/Layout';
import useSmoothScroll from './hook/useSmoothScroll';

const App = () => {
  useSmoothScroll();
  return (
   <Router>
      <Layout>
    <Routes>
      <Route path='/' element = {<Home/>} />
        
      <Route path='/blogs' element = {<Blogs/>} />
      <Route path='/blogs/:id' element = {<SingleBlog/>} />
    </Routes>
      </Layout>

   </Router>
  )
}

export default App
