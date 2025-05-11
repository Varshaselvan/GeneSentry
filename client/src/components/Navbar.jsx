import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">GeneSentry</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/gene" className="hover:underline">Gene Input</Link>
        <Link to="/report" className="hover:underline">Upload Report</Link>
        <Link to="/symptoms" className="hover:underline">Symptoms</Link>
      </div>
    </nav>
  );
}

export default Navbar;
