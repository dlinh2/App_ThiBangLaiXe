import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Start from "./containers/Start/Start";
import End from "./containers/End/End";
import Exam from "./containers/Exam/Exam";


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/Exam" element={<Exam/>} />
        <Route path="/End" element={<End/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
