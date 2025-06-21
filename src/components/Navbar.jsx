import { Link } from 'react-router-dom';
import logo from '../assets/prodesk-logo.jpg'; // Update with the actual path

export default function Navbar() {
  return (
    <section>
      <nav className="fixed top-0 left-0 h-15 w-full bg-black shadow-md p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <img className="w-28 h-20 p-2 object-contain" src={logo} alt="Logo" />
        </div>
        <div className="flex gap-6">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </div>
      </nav>
      {/* Add padding to the top of the page content to prevent it from being hidden behind the fixed navbar */}
      <div className="pt-20" />
    </section>
  );
}
