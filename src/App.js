import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Projects from './components/Projects';
import SchoolProjects from './components/SchoolProjects';
import CustomerProjects from './components/CustomerProjects';
import PersonalProjects from './components/PersonalProjects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route path="/projects/school-projects" element={<SchoolProjects />} />
            <Route path="/projects/customer-projects" element={<CustomerProjects />} />
            <Route path="/projects/personal-projects" element={<PersonalProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
