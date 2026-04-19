import {BrowserRouter as Router,Routes, Route,} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Login from "./components/Login"
import ContexProvider from "./context/ContexProvider"
import Lists from "./components/Lists"
import Todo from "./components/pages/Todo"

function App() {

  return (
    <>
    <Router>
      <ContexProvider>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<Todo /> } />
        </Routes>
      </ContexProvider>
      
    </Router>
    </>
  )
}

export default App
