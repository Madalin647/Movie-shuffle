import './Links.css'
import { halloweenMovies } from '../Data/Halloween';
import { Link } from 'react-router'
import {shuffle, sampleSize} from 'lodash'
import { useState } from 'react';





export function Halloween() {

let list = halloweenMovies;


  function Randomizer(){

const shuffled = shuffle(list);

const reduced = sampleSize(shuffled, 2)



console.log(reduced)
return(reduced)
};



function listHTML(){
const display = Randomizer()



const value = display.map((data)=>{
return(

<div className='list-body'>
  <img className='list-image' src={data.image}/>
  <div className='diferential'> </div>
  <div className='list-info'>
<p className='list-name'>{data.name}</p>
<p className='list-duration'>Duration: {data.duration} minutes</p>
<div className='rating-content'>
  <p className='list-rating'>Rating: {data.rating}</p>
  <img src='star.svg' className='list-star'/>
  </div>
  </div>
</div>

)
})

console.log(value)

return(
  value
)
};


const [render , setRender] = useState(false)





  return (
    <body>
<div className='content'>

  <p className='title'>Movie list</p>

  <div className='image-carousel'>
  {christmasList}
  </div>
<div className='button-randomizer'>
 <button onClick={()=>{
  setRender(true)
  Randomizer
  listHTML
 }} className='shuffle-button'>Shuffle</button>
<button onClick={()=>{
  setRender(false)
}} className='reset-button'>Reset List</button>
</div>
<div className='list-content'>{render && listHTML()}</div>

</div>



 <div className='non-select'></div>

 <Link to='/'>
 <button className='back-button'><img src="arrow-left.png"/>Back</button>
 </Link>

</body>

  )

}

const christmasList = halloweenMovies.map((cdata)=>{
  return(
<div className='movie-container'>
<img src={cdata.image} className='image'/>
<p className='name'>{cdata.name}</p>
 </div>
  )
})






