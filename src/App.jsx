import {BrowserRouter as Router,Routes, Route,} from "react-router-dom"
import Navbar from "./components/Navbar"
import ContexProvider from "./context/ContexProvider"
import Todo from "./components/pages/Todo"
import Footer from "./components/footer"

function App() {

  return (
    <>
    {/* basename was useful for github deployment */}
    <Router basename="/react_To_Do_app/">
      <ContexProvider>
        <Navbar />
        <Routes >
          <Route path="/" element={<Todo /> } />
        </Routes>
        <Footer />
      </ContexProvider>
      
    </Router>
    </>
  )
}

export default App
