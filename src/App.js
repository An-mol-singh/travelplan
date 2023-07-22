import React from 'react';
import './App.css';
import Cards from './components/Card.js'

function App() {
  const sentence = "Agra, a city in northern India, is renowned for its iconic landmark, the Taj Mahal, a breathtaking white marble mausoleum. This architectural masterpiece was built by the Mughal Emperor Shah Jahan in memory of his beloved wife. Agra's rich history also includes other historical gems like Agra Fort and Fatehpur Sikri, showcasing the grandeur of Mughal architecture. With its vibrant culture and bustling markets, Agra offers visitors an unforgettable experience steeped in history and beauty.";
  return (
    <div className="App">
      <h1 className='Heading'>Plan With Kanjusi</h1>
      <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />
          <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />
          <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />
          <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />
          <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />
          <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />
          <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />
          <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />
          <Cards Url="https://images.pexels.com/photos/602607/pexels-photo-602607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" cost="32,000" place="Agra" description={sentence} />

    </div>
  );
}

export default App;
