import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layout/Layout';
import useSmoothScroll from './hook/useSmoothScroll';
import Contact from './pages/Contact';
import Collab from './pages/Collab';
import useAssetsLoader from './hook/useAssetsLoader';
import Loading from './components/Loading';
import PublicPolicy from './pages/PublicPolicy';
import WhitePaper from './pages/WhitePaper';



const App = () => {
  useSmoothScroll();
  const { areImagesLoaded } = useAssetsLoader(
    [
      '/images/logo.png',
      '/images/bg-images/1.png',
      '/images/bg-images/2.png',
      '/images/bg-images/3.png',
      '/images/bg-images/4.png',
      '/images/bg-images/5.png',
      '/images/bg-images/6.png',
      '/images/bg-images/7.png',
      '/images/bg-images/8.png',
      '/images/bg-images/10.png',
      '/images/bg-images/11.png',
      '/images/bg-images/12.png',
      '/images/bg-images/13.png',
      '/images/bg-images/14.png',
      '/images/bg-images/15.png',
      '/images/bg-images/16.png',
      '/images/btn/btn.svg',
      '/images/logo/1.svg',
      '/images/logo/2.svg',
      '/images/logo/3.svg',
      '/images/logo/4.svg',
      '/images/logo/5.png',
      '/images/logo/6.png',
      '/images/mobile/1.png',
      '/images/mobile/3.png',
      '/images/mobile/4.png',
      '/images/mobile/6.png',
    ]
  );

  if (!areImagesLoaded) {
    return (
      <div className="w-full flex justify-center min-h-screen items-center bg-black">
        <Loading />
      </div>
    );
  }

  return (
    <HelmetProvider>

    
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publicPolicy" element={<PublicPolicy />} />
          <Route path="/whitePaper" element={<WhitePaper />} />
          <Route path="/blogs/:slug" element={<SingleBlog />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/collab" element={<Collab />} />
        </Routes>
      </Layout>
    </Router>
    </HelmetProvider>
  );
};

export default App;
