import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GeneInput from './components/GeneInput';
import ReportUpload from './components/ReportUpload';
import SymptomsChecker from './components/SymptomsChecker';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gene" element={<GeneInput />} />
          <Route path="/report" element={<ReportUpload />} />
          <Route path="/symptoms" element={<SymptomsChecker />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
