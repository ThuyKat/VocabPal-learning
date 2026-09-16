import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { useState } from 'react';
export default function Layout() {
  const [openHamMenu, setOpenHamMenu] = useState(false);
  return (
    <div className="flex md:flex-col min-h-screen">
      <Header hamMenu={openHamMenu} setOpenHamMenu={setOpenHamMenu} />
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
