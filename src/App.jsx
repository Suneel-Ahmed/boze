import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import SingleBlog from './pages/SingleBlog';
import Layout from './layout/Layout';
import useSmoothScroll from './hook/useSmoothScroll';
import Contact from './pages/Contact';
import Collab from './pages/Collab';
import useAssetsLoader from './hook/useAssetsLoader';
import Loading from './components/Loading';

const App = () => {
  useSmoothScroll();
  const { areImagesLoaded, loadingError } = useAssetsLoader(
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
      '/images/mobile/2.png',
      '/images/mobile/3.png',
      '/images/mobile/4.png',
      '/images/mobile/6.png',
      '/images/mobile/he.jpg',
      '/images/mobile/mobile.png',
      '/images/mobile/mobile2.png',
      '/images/mobile/she.png',
    ]
  );

  if (loadingError) {
    return (
      <div className="w-full flex justify-center min-h-screen items-center bg-black">
        <p>Error loading assets. Please try again later.</p>
      </div>
    );
  }

  if (!areImagesLoaded) {
    return (
      <div className="w-full flex justify-center min-h-screen items-center bg-black">
        <Loading />
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<SingleBlog />} />
          <Route path="/support" element={<Contact />} />
          <Route path="/collab" element={<Collab />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
