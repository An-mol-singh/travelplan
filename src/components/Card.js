import './Card.css';



function Cards(props)
{
   <div className='Card'>
    <img src={props.Url} alt='photos' className='Img' />
    <p className='Cost'>&#x20B9;{props.cost}</p>
    <h1>{props.place}</h1>
    <p>{props.description}....<span className="readmore">read more</span> </p>
    <button className='bnt'>
            Not Interested
        </button>
     <button className='bnt'>
               Interested
     </button>
    </div> 
}

export default Cards;