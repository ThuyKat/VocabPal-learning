import { BrowserRouter, Routes, Route } from 'react-router';
import Flashcards from './pages/Flashcards';
import Words from '@/pages/Words';
import SignIn from '@/pages/SignIn';
import Categories from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Words />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
