import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Layout can stay as a regular import since it's probably part of the shell
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import the custom loading component
import Loading from './Components/Loading'; 

// Lazy load the pages
const Home = lazy(() => import('./Pages/Home'));
const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
