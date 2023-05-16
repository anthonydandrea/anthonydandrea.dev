import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://media.licdn.com/dms/image/C4D03AQGIpTghdNRa5g/profile-displayphoto-shrink_800_800/0/1612729925197?e=1689811200&v=beta&t=Af-iMTb0D85bHg3hueBMJMOa__cf5r_LakdaSgqQZl8'} className="App-logo" alt="logo" />
        <p>Hi! I'm Anthony D'Andrea, a software engineer based in New York City.</p>
      </header>
        <Footer />
    </div>
  );
}

export default App;
