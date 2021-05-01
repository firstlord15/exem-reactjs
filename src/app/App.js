import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Navbar'

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="nav-img">
          <div className="opacity">
            <div className="slider-text">
              <h1 className="text-center light">Greetings to all!</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;