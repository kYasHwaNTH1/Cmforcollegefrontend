import './App.css'
import Issuedisplay from './components/Issuedisplay'
import Nabafter from './components/Nabafter'
import Nabbefore from './components/Nabbefore'
import Changepassword from './screens/Changepassword'
import Footer from './screens/Footer'
import HomePage from './screens/HomePage'
import Signin from './screens/Signin'
import Signup from './screens/Signup'

import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/changepassword' element={<Changepassword />} />
      </Routes>
    </Router>
  //  <div className='h-screen w-full'>

  //   <Nabbefore/>
  //   <Nabafter/>
  //   <HomePage/>
  //   <Footer/>
  //   <Signin/>
  //   <Signup/>
  //   <Issuedisplay/>
  //   <Changepassword/>
  //  </div>
  )
}

export default App
