import React, { useState, useEffect } from 'react';

import { CartProvider } from './context/CartContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Presets from './pages/Presets';
import StoicPreset from './pages/StoicPreset';
import RegalPreset from './pages/RegalPreset';
import EarthyPreset from './pages/EarthyPreset';
import SoulTonePreset from './pages/SoulTonePreset';
import FilmPackPreset from './pages/FilmPackPreset';
import AwakenPreset from './pages/AwakenPreset';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Services from './pages/Services';
import Footer from './components/Footer';
import Header from './components/Header';
import AdFilms from './pages/subpages/AdFilms';
import Cinematics from './pages/subpages/CinematicFilms';

import Others from './pages/Others';
import Weddings from './pages/subpages/Weddings';
import PrePostWeddings from './pages/subpages/PrePostWeddings';
import EventCoverage from './pages/subpages/EventCoverage';
import FashionShoots from './pages/subpages/FashionShoots';
import Fashion1 from './pages/subpages/Fashion/Fashionshoot';
import Fashion2 from './pages/subpages/Fashion/Fashionshoot2';
import Fashion3 from './pages/subpages/Fashion/Fashionshoot3';
import Event1 from './pages/subpages/Events/Event1';
import Event2 from './pages/subpages/Events/Event2';
import Event3 from './pages/subpages/Events/Event3';

import Wed1 from './pages/subpages/weddings/Wed1';
import Wed2 from './pages/subpages/weddings/Wed2';



import PreWeddingShoot1 from './pages/subpages/Preweddings/PreWeddingShoot1';
import PreWeddingShoot2 from './pages/subpages/Preweddings/PreWeddingShoot2';
import PreWeddingShoot3 from './pages/subpages/Preweddings/PreWeddingShoot3';
import PreWeddingShoot4 from './pages/subpages/Preweddings/PreWeddingShoot4';
import PreWeddingShoot5 from './pages/subpages/Preweddings/PreWeddingShoot5';



import SlideOutCart from './components/SlideOutCart';

function App() {

  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };
  const location = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <div>
      <Header />
      <CartProvider>
     
        <Header toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/presets" element={<Presets />} />
        <Route path="/full-item/stoic-pack" element={<StoicPreset />} />
          <Route path="/full-item/regal-tones" element={<RegalPreset />} />
          <Route path="/full-item/earthy-tone" element={<EarthyPreset />} />
          <Route path="/full-item/soul-tone" element={<SoulTonePreset />} />
          <Route path="/full-item/film-pack" element={<FilmPackPreset />} />
          <Route path="/full-item/awaken" element={<AwakenPreset />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/weddings" element={<Weddings />} />
        <Route path="/services/pre-post-weddings" element={<PrePostWeddings />} />
        <Route path="/services/event-coverage" element={<EventCoverage />} />
        <Route path="/services/ad-films" element={<AdFilms />} />
        <Route path="/services/cinematicFilms" element={<Cinematics />} />

        <Route path="/services/fashion-shoots" element={<FashionShoots />} />
        <Route path="/services/others" element={<Others />} />
        <Route path="/preweddings/pre-wedding-shoot-1" element={<PreWeddingShoot1 />} />
        <Route path="/preweddings/pre-wedding-shoot-2" element={<PreWeddingShoot2 />} />
        <Route path="/preweddings/pre-wedding-shoot-3" element={<PreWeddingShoot3 />} />
        <Route path="/preweddings/pre-wedding-shoot-4" element={<PreWeddingShoot4 />} />
        <Route path="/preweddings/pre-wedding-shoot-5" element={<PreWeddingShoot5 />} />
        <Route path="/weddings/Wed1" element={<Wed1 />} />
        <Route path="/weddings/Wed2" element={<Wed2 />} />



        <Route path="/fashion/fashion-shoot-1" element={<Fashion1 />} />
        <Route path="/fashion/fashion-shoot-2" element={<Fashion2 />} />
        <Route path="/fashion/fashion-shoot-3" element={<Fashion3 />} />
        <Route path="/events/event1" element={<Event1 />} />
        <Route path="/events/event2" element={<Event2 />} />
        <Route path="/events/event3" element={<Event3 />} />



      </Routes>
      <Footer />
      <SlideOutCart isOpen={isCartOpen} setOpen={setCartOpen} />
     
    </CartProvider>
    </div>
  );
}

export default App;
