import { NavLink } from 'react-router';
export default function Header(props) {
  const { hamMenu, setOpenHamMenu } = props;
  return (
    <div>
      {/* hamburger menu */}
      <button
        className="flex flex-col items-start   md:hidden"
        onClick={() => {
          setOpenHamMenu(!hamMenu);
        }}
      >
        ☰
      </button>
      <nav
        className={`${hamMenu ? 'flex items-start h-full' : 'hidden'} flex-col md:flex md:flex-row gap-6 bg-purple-950 px-8 py-4`}
      >
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
    </div>
  );
}
