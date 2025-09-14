import './Slist.css'
import { shuffelListData } from '../Data/SlistData'
import { Link } from 'react-router'

export function Slist(){
return(
shuffelListData.map((data)=>{
   return(
<Link to={data.path}>
  <div className='item-container'>
<img className='image-container'
  src={data.image}
  />
<div className='name-container'>
{data.name}
</div>
  </div>
  </Link>
  )
})
)
}