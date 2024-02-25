import './App.css'
import { Listing } from './data/Listing'
import data from './data/etsy.json'

function App() {
    
 return (
      <>
        <Listing items={data} />
      </>
    )
}

export default App
