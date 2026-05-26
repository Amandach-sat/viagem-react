import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Escocia from './componentes/Escocia'
import Aruba from './componentes/Aruba'
import Muralha_china from './componentes/Muralha_china'
import Grand_canyon from './componentes/Grand_canyon'

function App() {
 

  return (
    <main>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Escocia" element={<Escocia />} />
        <Route path="/Aruba" element={<Aruba />} />
        <Route path="/Muralha-china" element={<Muralha_china />} />
        <Route path="/Grand-canyon" element={<Grand_canyon />} />
      </Routes>
      <Footer />
      </Router>
    </main>
  )
}

export default App
