import React from 'react'
import { BrowserRouter as Router , Routes ,  Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';
import Layout from './layout/Layout';
import useSmoothScroll from './hook/useSmoothScroll';
import Contact from './pages/Contact';
import Collab from './pages/Collab';

const App = () => {
  useSmoothScroll();
  return (
   <Router>
      <Layout>
    <Routes>
      <Route path='/' element = {<Home/>} />
        
      <Route path='/blogs' element = {<Blogs/>} />
      <Route path='/blogs/:slug' element = {<SingleBlog/>} />
      <Route path='/support' element = {<Contact/>} />
      <Route path='/collab' element = {<Collab/>} />
    </Routes>
      </Layout>

   </Router>
  )
}

export default App
