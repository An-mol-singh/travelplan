import React,{useState} from 'react';
import './App.css';
import data from './data.js';
// import Cards from './components/Card.js';
import Tours from './components/Tours.js';

function App() {
  const [tours,settour]=useState(data);
  function removecard(Id)
  {
    const newtour=tours.filter(tour=>tour.Id!=Id);
    settour(newtour);
  }
  function selectcard(Id)
  {
    const newtour=tours.filter(tour=>tour.Id==Id);
    settour(newtour);
  }
  function refresh(){
    settour(data);
  }
if(tours.length==0)
{
  return(
    <div className='refreshpage'>
      <h1 className='msg'>no tours left</h1>
       <button className='btn' onClick={refresh}>refresh</button>
    </div>
  )
}

else{
  return (
   
    <div className="App">
      <h1 className='Heading'>Plan With Kanjusi</h1>
      <div>
       <Tours tours={tours} selectcard={selectcard} removecard={removecard}></Tours>
       </div>
    </div>
  );
}
}

export default App;
