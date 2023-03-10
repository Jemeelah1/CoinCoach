import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Donations from "./Components/Donations";
import Academy from "./Components/Academy";
import AboutUs from "./Components/AboutUs";
import Vidoe from "./Components/Vidoe";
import Profile from "./Components/Profile";
import Community from "./Components/Community";
import Article from "./Components/Article";
import Tools from "./Components/Tools";
import Fullscreen from "./Fullscreen";
import Sponsor from "./Sponsor";
import Verification from "./Components/Verification";

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
          <Route path='/profile' element={<Profile />} />
          <Route path='/community' element={<Community />} />
          <Route path='/article' element={<Article />} />
          <Route path='/tools' element={<Tools />} />
        </Route>
        <Route element={<Sponsor />}>
          <Route path='/donation' element={<Donations />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/verification' element={<Verification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
