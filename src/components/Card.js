import './Card.css';
import React, { useState } from 'react';

function Cards(props) {
  const [readmore, setinfo] = useState(false);
  const description = readmore ? props.description : `${props.description.substring(0, 200)}...`;

  function setread() {
    setinfo(!readmore);
  }

  return (
    <div className='Card'>
      <img src={props.Url} alt='photos' className='Img' />
      <span className='Cost'>&#x20B9;{props.cost}</span>
      <h1 className='place'>{props.place}</h1>
      <p className='desc'>
        {description}
        <span className="readmore" onClick={setread}>
          {readmore ? `show less` : `read more`}
        </span>
      </p>
      <button className='btn' onClick={() => props.removecard(props.Id)}>
        Not Interested
      </button>
      <button className='btn' onClick={() => props.selectcard(props.Id)}>
         Interested
      </button>

    </div>);
}

export default Cards;