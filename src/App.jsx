
import {BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import Home from './pages/Home'
import "./index.css"



function App() {


  return (
    <>
    <Router>
      <Routes>
  
        <Route excat path = "/" element = {<Home/>}></Route>
    
      </Routes>
    </Router>

    
    </>
  )
}

export default App
