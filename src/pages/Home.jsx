import React from 'react';
import Header from '../components/Header';
import ExcuseGenerator from '../components/ExcuseGenerator';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <ExcuseGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default Home;