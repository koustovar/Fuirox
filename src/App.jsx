import Hero from './components/Hero';
import FeaturedGames from './components/FeaturedGames';
import Stats from './components/Stats';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Stats />
      <FeaturedGames />
      <Footer />
    </div>
  );
}

export default App;
