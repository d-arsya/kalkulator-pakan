import { useState } from 'react'
import data from "./data/data"
import Ternak from './components/Ternak'
import Bahan from "./components/Bahan"


function App() {
  const [ternak, setTernak] = useState(data.initialState);
  return (
    <div className="container">
      <Ternak ternak={ternak} setTernak={setTernak} dataTernak={data.dataTernak}></Ternak>
      <Bahan dataBahan={data.dataBahan}></Bahan>
    </div>
  )
}

export default App
