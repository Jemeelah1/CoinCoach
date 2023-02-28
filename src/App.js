import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import SignIn from "./Components/SignIn";
import Donations from "./Components/Donations";
import Academy from "./Components/Academy";
import AboutUs from "./Components/AboutUs";
import Vidoe from "./Components/Vidoe";
import Fullscreen from "./Fullscreen";
import Sponsor from "./Sponsor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Fullscreen />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/academy' element={<Academy />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/vidoe' element={<Vidoe />} />
        </Route>
        <Route element={<Sponsor />}>
          <Route path='/donation' element={<Donations />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
