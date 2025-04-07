import React from 'react';
import Header from '../components/Header';
import SavedExcuses from '../components/SavedExcuses';
import Footer from '../components/Footer';

const SavedExcusesPage = () => {
  return (
    <div className="saved-excuses-page">
      <Header />
      <main>
        <SavedExcuses />
      </main>
      <Footer />
    </div>
  );
};

export default SavedExcusesPage;