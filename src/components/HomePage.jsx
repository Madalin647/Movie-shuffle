import { Slist } from "./shuffle-list";
import './HomePage.css'

export function HomePage(){
  return(
    <>
    <div className="body">
<div class="content">
  <div class="menu-header">
  <h1>Welcome To Movie Shuffle</h1>
  <p class="sub-header">Choose your desiered category</p>
  </div>
  <div className="flex-container">
   <Slist/>
   </div>
</div>
</div>
   
    </>
  )
}