import {BrowserRouter as Router,Routes, Route,} from "react-router-dom"
import ContexProvider from "./context/ContexProvider"
import Todo from "./components/pages/Todo"
import Footer from "./components/footer"
import Mainlayout from "./components/Mainlayout"
import DashboardLayoaut from "./components/DashboardLayoaut"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

function App() {

  return (
    <>
    {/* basename was useful for github deployment */}
    <Router>
      <ContexProvider>
        <Routes >
          <Route element={<Mainlayout />} >
              <Route path="/" element={<Todo /> } />
              <Route path="/login" element={<Login /> } />

          </Route>

          <Route element={<DashboardLayoaut />} >
              <Route path="/dashboard" element={<Dashboard /> } />
          </Route>
        </Routes>
      </ContexProvider>
      
    </Router>
    </>
  )
}

export default App
