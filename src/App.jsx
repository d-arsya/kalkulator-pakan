import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Main from "./pages/Main"
import Bahan from "./pages/Bahan"
import Ternak from "./pages/Ternak"

function App() {
    return(

    <Router>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/bahan" element={<Bahan/>}></Route>
            <Route path="/ternak" element={<Ternak/>}></Route>
        </Routes>
    </Router>
    )

}

export default App
