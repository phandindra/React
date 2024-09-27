
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Support from './Components/Support'
import About from './Components/About'
import Notfound from './Components/Notfound'
import Lab from './Components/lab'

function App() {
  

  return (
    <div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/lab">
              lab
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/support">
              support
            </NavLink>
          </li>
          
        </ul>
      </nav>

      <Routes>
        <Route>

          <Route path="/" element={<div>Home Page </div>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/lab" element={<Lab/>} />
          <Route path="*" element={<Notfound/>} />

          </Route>
          
      </Routes>
    </div>
  )
}

export default App
