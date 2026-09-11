import { NavLink } from 'react-router';
export default function Header() {
  return (
    <nav className="flex gap-6 bg-purple-950 px-8 py-4">
      <NavLink to="/signin" className="font-medium text-white hover:text-purple-400">
        Sign In
      </NavLink>
      <NavLink to="/" className="font-medium text-white hover:text-purple-400">
        All Words
      </NavLink>
      <NavLink to="/categories" className="font-medium text-white hover:text-purple-400">
        Categories
      </NavLink>
      <NavLink to="/flashcards" className="font-medium text-white hover:text-purple-400">
        Flashcards
      </NavLink>
    </nav>
  );
}
