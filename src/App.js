import './App.css';
import { Brand , CTA , Navbar} from './commponents';
import {Blog , Footer, Header , Features, Possibility, WhatGPT3} from './containers'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features/>
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
