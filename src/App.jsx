import { Christmas } from './components/Christmas'
import './App.css'
import { HomePage } from './components/HomePage'
import { Route,Routes } from 'react-router'
import { Easter } from './components/Easter'
import { Summer } from './components/Summer'
import { Horror } from './components/Horror'
import { Halloween } from './components/Halloween'
import { Disney } from './components/Disney'

function App() {

  return (
    <Routes>

<Route index element={<HomePage/>}/>
<Route path="Christmas" element={<Christmas/>}/>
<Route path="Easter" element={<Easter/>}/>
<Route path="Summer" element={<Summer/>}/>
<Route path="Horror" element={<Horror/>}/>
<Route path="Halloween" element={<Halloween/>}/>
<Route path="Disney" element={<Disney/>}/>
    </Routes>


  )
}

export default App
