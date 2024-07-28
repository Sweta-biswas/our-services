import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCards from './components/ServiceCards'; // New component for the cards

const App = () => {
  return (
    <div>
      <Header />
      <ServiceCards />
      <Footer />
    </div>
  );
};

export default App;